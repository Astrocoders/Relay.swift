// Auto-generated by relay-compiler. Do not edit.

import Relay

public struct CurrentUserToDoListQuery {
    public var variables: Variables

    public init(variables: Variables) {
        self.variables = variables
    }

    public static var node: ConcreteRequest {
        ConcreteRequest(
            fragment: ReaderFragment(
                name: "CurrentUserToDoListQuery",
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
                            .field(ReaderScalarField(
                                name: "id"
                            )),
                            .fragmentSpread(ReaderFragmentSpread(
                                name: "ToDoList_user"
                            ))
                        ]
                    ))
                ]
            ),
            operation: NormalizationOperation(
                name: "CurrentUserToDoListQuery",
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
                            .field(NormalizationScalarField(
                                name: "id"
                            )),
                            .field(NormalizationLinkedField(
                                name: "todos",
                                args: [
                                    LiteralArgument(name: "first", value: 100)
                                ],
                                storageKey: "todos(first:100)",
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
                            ))
                        ]
                    ))
                ]
            ),
            params: RequestParameters(
                name: "CurrentUserToDoListQuery",
                operationKind: .query,
                text: """
query CurrentUserToDoListQuery {
  user(id: "me") {
    id
    ...ToDoList_user
  }
}

fragment ToDoItem_todo on Todo {
  id
  text
  complete
}

fragment ToDoList_user on User {
  todos(first: 100) {
    edges {
      node {
        id
        ...ToDoItem_todo
      }
    }
  }
}
"""
            )
        )
    }
}

extension CurrentUserToDoListQuery {
    public typealias Variables = EmptyVariables
}


extension CurrentUserToDoListQuery {
    public struct Data: Decodable {
        public var user: User_user?

        public struct User_user: Decodable, Identifiable, ToDoList_user_Key {
            public var id: String
            public var fragment_ToDoList_user: FragmentPointer
        }
    }
}

extension CurrentUserToDoListQuery: Relay.Operation {}