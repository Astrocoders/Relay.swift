import Combine
import Foundation
import os

private let logger = Logger(subsystem: "io.github.mjm.Relay", category: "store")

public class Store {
    var recordSource: RecordSource
    var optimisticSource: RecordSource?

    private var updatedRecordIDs = Set<DataID>()
    private var invalidatedRecordIDs = Set<DataID>()
    private var subscriptions = [StoreSubscription]()
    private var gc: GarbageCollector!

    private var _currentWriteEpoch = 0
    private let writeEpochLock = DispatchQueue(label: "relay-store-write-epoch-lock")
    private var globalInvalidationEpoch: Int?

    var currentWriteEpoch: Int {
        writeEpochLock.sync { _currentWriteEpoch }
    }

    public init(
        source: RecordSource = DefaultRecordSource(),
        gcReleaseBufferSize: Int = 0,
        gcScheduler: DispatchQueue = DispatchQueue(label: "relay-garbage-collector")
    ) {
        recordSource = source

        initializeRecordSource()
        gc = GarbageCollector(
            store: self,
            releaseBufferSize: gcReleaseBufferSize,
            scheduler: gcScheduler
        )
    }

    public var source: RecordSource {
        get {
            if let source = optimisticSource {
                return source
            }
            return recordSource
        }
        set {
            if optimisticSource != nil {
                optimisticSource = newValue
            } else {
                recordSource = newValue
            }
        }
    }

    private func initializeRecordSource() {
        if !recordSource.has(.rootID) {
            recordSource[.rootID] = Record.root
        }
    }

    public func lookup<T: Decodable>(selector: SingularReaderSelector) -> Snapshot<T?> {
        Reader.read(T.self, source: source, selector: selector)
    }

    public func retain(operation: OperationDescriptor) -> AnyCancellable {
        gc.retain(operation)
    }

    public func check(operation: OperationDescriptor) -> OperationAvailability {
        let selector = operation.root
        let rootEntry = gc.roots[operation.request.identifier]
        let lastWrittenAt = rootEntry?.epoch

        if let globalInvalidationEpoch = globalInvalidationEpoch {
            guard let lastWrittenAt = lastWrittenAt,
                  lastWrittenAt > globalInvalidationEpoch else {
                return .stale
            }
        }

        let operationAvailability = DataChecker.check(source: source, selector: selector)

        if let mostRecentlyInvalidatedAt = operationAvailability.mostRecentlyInvalidatedAt {
            if let lastWrittenAt = lastWrittenAt, mostRecentlyInvalidatedAt > lastWrittenAt {
                return .stale
            }
        }

        if case .missing = operationAvailability {
            return .missing
        }

        return .available(rootEntry?.fetchTime)
    }

    public func publish(source: RecordSource, idsMarkedForInvalidation: Set<DataID> = []) {
        self.source.update(from: source,
                           currentWriteEpoch: currentWriteEpoch + 1,
                           idsMarkedForInvalidation: idsMarkedForInvalidation,
                           updatedRecordIDs: &updatedRecordIDs,
                           invalidatedRecordIDs: &invalidatedRecordIDs)

        if optimisticSource != nil {
            logger.debug("Publish: \(source.count) records (optimistic)")
        } else {
            logger.debug("Publish: \(source.count) records")
        }
    }

    public func notify(
        sourceOperation: OperationDescriptor? = nil,
        invalidateStore: Bool = false
    ) -> [RequestDescriptor] {
        writeEpochLock.sync {
            let newWriteEpoch = _currentWriteEpoch + 1
            _currentWriteEpoch = newWriteEpoch

            if invalidateStore {
                globalInvalidationEpoch = newWriteEpoch
            }

            if let op = sourceOperation {
                logger.debug("Notify: \(op.request.node.params.name, privacy: .public)\(op.request.variables) [\(newWriteEpoch)]")
            }
        }

        var updatedOwners: [RequestDescriptor] = []
        for subscription in subscriptions {
            if let owner = subscription.storeUpdatedRecords(updatedRecordIDs) {
                updatedOwners.append(owner)
            }
        }
        // TODO invalidation subscriptions

        updatedRecordIDs.removeAll()
        invalidatedRecordIDs.removeAll()

        if let sourceOperation = sourceOperation {
            gc.updateEpoch(for: sourceOperation)
        }

        return updatedOwners
    }

    public func subscribe<Data: Decodable>(snapshot: Snapshot<Data?>) -> SnapshotPublisher<Data> {
        SnapshotPublisher(store: self, initialSnapshot: snapshot)
    }

    public func snapshot() {
        precondition(optimisticSource == nil, "Unexpected call to snapshot() while a previous snapshot exists")

        logger.debug("Snapshot")

        for subscription in subscriptions {
            subscription.storeDidSnapshot(source: recordSource)
        }

        gc.invalidateCurrentRun()
        optimisticSource = OptimisticRecordSource(base: recordSource)
    }

    public func restore() {
        precondition(optimisticSource != nil, "Unexpected call to restore() without a snapshot")

        logger.debug("Restore")

        optimisticSource = nil
        gc.scheduleIfNeeded()

        for subscription in subscriptions {
            subscription.storeDidRestore()
        }
    }

    func pauseGarbageCollection() -> AnyCancellable {
        gc.pause()
    }

    func subscribe(subscription: StoreSubscription) {
        subscriptions.append(subscription)
    }
    
    func unsubscribe(subscription: StoreSubscription) {
        subscriptions.removeAll(where: { $0 === subscription })
    }
}

protocol StoreSubscription: AnyObject {
    func storeDidSnapshot(source: RecordSource)
    func storeDidRestore()
    func storeUpdatedRecords(_ updatedIDs: Set<DataID>) -> RequestDescriptor?
}
