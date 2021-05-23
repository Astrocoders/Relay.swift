(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var o=n(3),i=n(7),a=(n(0),n(188)),r={title:"Declarative mutation directives"},c={unversionedId:"knowledge-base/declarative-mutation-directives",id:"version-1.1.0/knowledge-base/declarative-mutation-directives",isDocsHomePage:!1,title:"Declarative mutation directives",description:"In version 10.1.0, Relay added support for declarative mutation directives in both the compiler and the JavaScript library. Relay.swift also supports these directives, which can remove the need to write updater functions for your mutations for some common cases of adding and removing records.",source:"@site/versioned_docs/version-1.1.0/knowledge-base/declarative-mutation-directives.md",slug:"/knowledge-base/declarative-mutation-directives",permalink:"/Relay.swift/docs/knowledge-base/declarative-mutation-directives",editUrl:"https://github.com/relay-tools/Relay.swift/edit/main/website/versioned_docs/version-1.1.0/knowledge-base/declarative-mutation-directives.md",version:"1.1.0"},d=[{value:"Adding nodes to a connection",id:"adding-nodes-to-a-connection",children:[{value:"Returning edges instead of nodes",id:"returning-edges-instead-of-nodes",children:[]}]},{value:"Deleting nodes from a connection",id:"deleting-nodes-from-a-connection",children:[]},{value:"Deleting records from the store",id:"deleting-records-from-the-store",children:[]},{value:"Getting the record ID for a connection",id:"getting-the-record-id-for-a-connection",children:[]}],s={toc:d};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In version ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/relay/releases/tag/v10.1.0"},"10.1.0"),", Relay added support for declarative mutation directives in both the compiler and the JavaScript library. Relay.swift also supports these directives, which can remove the need to write ",Object(a.b)("a",{parentName:"p",href:"/Relay.swift/docs/knowledge-base/updater-functions"},"updater functions")," for your mutations for some common cases of adding and removing records."),Object(a.b)("h2",{id:"adding-nodes-to-a-connection"},"Adding nodes to a connection"),Object(a.b)("p",null,"Relay supports four directives for adding to the list of records managed by a ",Object(a.b)("inlineCode",{parentName:"p"},"@connection"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@prependNode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@appendNode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@prependEdge")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@appendEdge"))),Object(a.b)("p",null,"Let's look at an example of how to use ",Object(a.b)("inlineCode",{parentName:"p"},"@prependNode"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'mutation AddTodoMutation($input: AddTodoInput!, $connections: [ID!]!) {\n    addTodo(input: $input) {\n        todo @prependNode(connections: $connections, edgeTypeName: "TodoEdge") {\n            id\n            text\n            complete\n        }\n    }\n}\n')),Object(a.b)("p",null,"When we execute this mutation, we want the new ",Object(a.b)("inlineCode",{parentName:"p"},"Todo")," item to be inserted at the top of our list of todos. Normally, we would need to write an updater function to do this using ",Object(a.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/connection-handler"},"ConnectionHandler")," methods and pass that function when we commit the mutation, but by marking the node in our mutation result with ",Object(a.b)("inlineCode",{parentName:"p"},"@prependNode"),", Relay do this automatically. Relay will automatically create a new edge record using the ",Object(a.b)("inlineCode",{parentName:"p"},"edgeTypeName")," we passed to the directive, and will set the ",Object(a.b)("inlineCode",{parentName:"p"},"node")," field of that record to the ",Object(a.b)("inlineCode",{parentName:"p"},"todo")," returned in the mutation's response. Then it will add that edge to the beginning of the list of edges for the connection. Any views that are showing that connection will update to show the new item."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@appendNode")," works just like ",Object(a.b)("inlineCode",{parentName:"p"},"@prependNode"),", but it adds the new item to the end of this list rather than the beginning."),Object(a.b)("p",null,"Relay still needs to know which connection(s) to add the node to, so we pass those in to the directive with the ",Object(a.b)("inlineCode",{parentName:"p"},"$connections")," variable that we added to the mutation. The strings we pass in need to be the record IDs for each connection, not the ",Object(a.b)("inlineCode",{parentName:"p"},"key")," passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"@connection")," directive. This is because a connection may support filter arguments, which cause one key to be used to store multiple records with different filtered versions of the same connection. Relay needs to know exactly which one(s) you want to update. See ",Object(a.b)("a",{parentName:"p",href:"#getting-the-record-id-for-a-connection"},"further below")," for how you can determine the record ID for your connections."),Object(a.b)("h3",{id:"returning-edges-instead-of-nodes"},"Returning edges instead of nodes"),Object(a.b)("p",null,"If the mutation's response payload includes an edge record instead of just a node, we can use ",Object(a.b)("inlineCode",{parentName:"p"},"@prependEdge")," or ",Object(a.b)("inlineCode",{parentName:"p"},"@appendEdge")," instead:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"mutation AddTodoMutation($input: AddTodoInput!, $connections: [ID!]!) {\n    addTodo(input: $input) {\n        todoEdge @prependEdge(connections: $connections) {\n            cursor\n            node {\n                id\n                text\n                complete\n            }\n        }\n    }\n}\n")),Object(a.b)("p",null,"When using the edge variants of these directives, we don't have to pass an ",Object(a.b)("inlineCode",{parentName:"p"},"edgeTypeName"),", since Relay doesn't have to build the edge itself: the record already exists in the mutation's response."),Object(a.b)("h2",{id:"deleting-nodes-from-a-connection"},"Deleting nodes from a connection"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@deleteEdge")," directive will remove the edge(s) corresponding to a particular node from one or more connections."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"mutation RemoveTodoMutation($input: RemoveTodoInput!, $connections: [ID!]!) {\n    removeTodo(input: $input) {\n        deletedTodoID @deleteEdge(connections: $connections)\n    }\n}\n")),Object(a.b)("p",null,"To use this directive, your mutation response must have a field corresponding to the ID of the node whose edge(s) you want to remove. If there are multiple edges in the connection for that node, all of them will be removed. The record itself remains in the store, so if it is referenced from other places, those references will continue to be valid."),Object(a.b)("p",null,"As with the append and prepend directives, this directive needs the record IDs of the connections it should update. ",Object(a.b)("a",{parentName:"p",href:"#getting-the-record-id-for-a-connection"},"See further below")," for how you can determine the record ID for your connections."),Object(a.b)("h2",{id:"deleting-records-from-the-store"},"Deleting records from the store"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@deleteRecord")," will remove a record entirely from Relay's store."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"mutation RemoveTodoMutation($input: RemoveTodoInput!) {\n    removeTodo(input: $input) {\n        deletedTodoID @deleteRecord\n    }\n}\n")),Object(a.b)("p",null,"Similar to ",Object(a.b)("inlineCode",{parentName:"p"},"@deleteEdge"),", this directive is used on a field in your mutation response with the ID of the record to delete. Unlike ",Object(a.b)("inlineCode",{parentName:"p"},"@deleteEdge"),", ",Object(a.b)("inlineCode",{parentName:"p"},"@deleteRecord")," doesn't remove any references to the record: it just deletes it. This can cause fragments to be missing data that they previously weren't, so use this with care."),Object(a.b)("h2",{id:"getting-the-record-id-for-a-connection"},"Getting the record ID for a connection"),Object(a.b)("p",null,"There are two ways to get a record ID that we can pass in to the ",Object(a.b)("inlineCode",{parentName:"p"},"$connections")," argument of our mutation. The preferred way is to ask for it in your query or fragment, and then pass it on to the mutation when you commit. The record ID for any record is available with the ",Object(a.b)("inlineCode",{parentName:"p"},"__id")," field."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'fragment ToDoList_user on User\n  @refetchable(queryName: "ToDoListPaginationQuery")\n  @argumentDefinitions(\n    count: { type: "Int", defaultValue: 100 }\n    cursor: { type: "String" }\n    ) {\n  todos(first: $count, after: $cursor)\n      @connection(key: "ToDoList_todos") {\n      __id\n    edges {\n      node {\n        id\n        ...ToDoItem_todo\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"__id")," field is similar to ",Object(a.b)("inlineCode",{parentName:"p"},"__typename")," in that it doesn't need to be declared in your schema and is available as a selection anywhere in the graph. It will always return the ID Relay is using for the corresponding record in its store. You can then pass that ID as the connections when committing the mutation to add the item:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-swift"},"addTodo.commit(\n    variables: .init(\n        input: AddTodoInput(/* ... */),\n        connections: [user.todos.__id]\n    )\n)\n")),Object(a.b)("p",null,"This works well when you need to perform the mutation from the same view or a subview of the one that is using the connection, as there's a direct way to pass the ID of the connection to the code that commits the mutation. In some cases, you may need to perform the mutation from a completely different part of your app from where you are viewing the data in the connection. For these situations, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"getConnectionID(parentID:key:filters:)")," method on ",Object(a.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/connection-handler"},"ConnectionHandler")," to ask Relay directly for the ID of a particular connection record."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-swift"},'addTodo.commit(\n    variables: .init(\n        input: AddTodoInput(/* ... */),\n        connections: [\n            ConnectionHandler.default.getConnectionID(\n                parentID: DataID(user.id),\n                key: "ToDoList_todos"\n            )\n        ]\n    )\n)\n')),Object(a.b)("p",null,"To use ",Object(a.b)("inlineCode",{parentName:"p"},"getConnectionID"),", you need to know the record ID for the parent record of the connection, as well as the key of the connection and any filter arguments if necessary. In this example, the connection is on a field of the ",Object(a.b)("inlineCode",{parentName:"p"},"User")," type, which implements ",Object(a.b)("inlineCode",{parentName:"p"},"Node")," so its record ID matches its ",Object(a.b)("inlineCode",{parentName:"p"},"id")," field. Some other common parent IDs for connections are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"DataID.rootID"),": for connections on fields on the root ",Object(a.b)("inlineCode",{parentName:"li"},"Query")," type of the schema"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"DataID.viewerID"),": for connections on fields on the ",Object(a.b)("inlineCode",{parentName:"li"},"Viewer")," type")),Object(a.b)("p",null,"If your connection is not on the ",Object(a.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Viewer"),", or a ",Object(a.b)("inlineCode",{parentName:"p"},"Node"),", it won't have a stable ID and you'll need to fetch it from a query or fragment using the ",Object(a.b)("inlineCode",{parentName:"p"},"__id")," field. But you would be better off changing your schema instead, since in this case it also won't be usable with ",Object(a.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/pagination-fragment"},"@PaginationFragment"),", which has similar constraints."))}l.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,m=p["".concat(r,".").concat(b)]||p[b]||u[b]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);