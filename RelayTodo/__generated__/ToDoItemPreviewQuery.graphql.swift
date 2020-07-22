// Auto-generated by relay-compiler. Do not edit.

import Relay

public struct ToDoItemPreviewQuery {
    public var variables: Variables

    public init(variables: Variables) {
        self.variables = variables
    }

    public static var node: ConcreteRequest {
        ConcreteRequest(
            fragment: ReaderFragment(
                name: "ToDoItemPreviewQuery",
                type: "Query",
                selections: [
                    .field(ReaderLinkedField(
                        name: "user",
                        storageKey: "user(id:\"me\")",
                        args: [
                            LiteralArgument(name: "id", value: "me")
                        ],
                        concreteType: "User",
                        plural: false,
                        selections: [
                            .field(ReaderLinkedField(
                                name: "todos",
                                storageKey: "todos(first:3)",
                                args: [
                                    LiteralArgument(name: "first", value: 3)
                                ],
                                concreteType: "TodoConnection",
                                plural: false,
                                selections: [
                                    .field(ReaderLinkedField(
                                        name: "edges",
                                        concreteType: "TodoEdge",
                                        plural: true,
                                        selections: [
                                            .field(ReaderLinkedField(
                                                name: "node",
                                                concreteType: "Todo",
                                                plural: false,
                                                selections: [
                                                    .field(ReaderScalarField(
                                                        name: "id"
                                                    )),
                                                    .fragmentSpread(ReaderFragmentSpread(
                                                        name: "ToDoItem_todo"
                                                    ))
                                                ]
                                            ))
                                        ]
                                    ))
                                ]
                            ))
                        ]
                    ))
                ]
            ),
            operation: NormalizationOperation(
                name: "ToDoItemPreviewQuery",
                selections: [
                    .field(NormalizationLinkedField(
                        name: "user",
                        args: [
                            LiteralArgument(name: "id", value: "me")
                        ],
                        storageKey: "user(id:\"me\")",
                        concreteType: "User",
                        plural: false,
                        selections: [
                            .field(NormalizationLinkedField(
                                name: "todos",
                                args: [
                                    LiteralArgument(name: "first", value: 3)
                                ],
                                storageKey: "todos(first:3)",
                                concreteType: "TodoConnection",
                                plural: false,
                                selections: [
                                    .field(NormalizationLinkedField(
                                        name: "edges",
                                        concreteType: "TodoEdge",
                                        plural: true,
                                        selections: [
                                            .field(NormalizationLinkedField(
                                                name: "node",
                                                concreteType: "Todo",
                                                plural: false,
                                                selections: [
                                                    .field(NormalizationScalarField(
                                                        name: "id"
                                                    )),
                                                    .field(NormalizationScalarField(
                                                        name: "text"
                                                    )),
                                                    .field(NormalizationScalarField(
                                                        name: "complete"
                                                    ))
                                                ]
                                            ))
                                        ]
                                    ))
                                ]
                            )),
                            .field(NormalizationScalarField(
                                name: "id"
                            ))
                        ]
                    ))
                ]
            ),
            params: RequestParameters(
                name: "ToDoItemPreviewQuery",
                operationKind: .query,
                text: """
query ToDoItemPreviewQuery {
  user(id: "me") {
    todos(first: 3) {
      edges {
        node {
          id
          ...ToDoItem_todo
        }
      }
    }
    id
  }
}

fragment ToDoItem_todo on Todo {
  id
  text
  complete
}
"""
            )
        )
    }
}

extension ToDoItemPreviewQuery {
    public typealias Variables = EmptyVariables
}


extension ToDoItemPreviewQuery {
    public struct Data: Decodable {
        public var user: User_user?

        public struct User_user: Decodable {
            public var todos: TodoConnection_todos?

            public struct TodoConnection_todos: Decodable {
                public var edges: [TodoEdge_edges?]?

                public struct TodoEdge_edges: Decodable {
                    public var node: Todo_node?

                    public struct Todo_node: Decodable, Identifiable, ToDoItem_todo_Key {
                        public var id: String
                        public var fragment_ToDoItem_todo: FragmentPointer
                    }
                }
            }
        }
    }
}

extension ToDoItemPreviewQuery: Relay.Operation {}