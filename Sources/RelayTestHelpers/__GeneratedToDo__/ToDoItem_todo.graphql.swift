// Auto-generated by relay-compiler. Do not edit.

import Relay
struct ToDoItem_todo {
    var fragmentPointer: FragmentPointer
    init(key: ToDoItem_todo_Key) {
        fragmentPointer = key.fragment_ToDoItem_todo
    }
    static var node: ReaderFragment {
        ReaderFragment(
            name: "ToDoItem_todo",
            type: "Todo",
            selections: [
                .field(ReaderScalarField(
                    name: "id"
                )),
                .field(ReaderScalarField(
                    name: "text"
                )),
                .field(ReaderScalarField(
                    name: "complete"
                ))
            ]
        )
    }
}
extension ToDoItem_todo {
    struct Data: Decodable, Identifiable {
        var id: String
        var text: String
        var complete: Bool
    }
}
protocol ToDoItem_todo_Key {
    var fragment_ToDoItem_todo: FragmentPointer { get }
}
extension ToDoItem_todo: Relay.Fragment {}
#if swift(>=5.3) && canImport(RelaySwiftUI)
import RelaySwiftUI
extension ToDoItem_todo_Key {
    @available(iOS 14.0, macOS 10.16, tvOS 14.0, watchOS 7.0, *)
    func asFragment() -> RelaySwiftUI.FragmentNext<ToDoItem_todo> {
        RelaySwiftUI.FragmentNext<ToDoItem_todo>(self)
    }
}
#endif