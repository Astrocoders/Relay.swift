(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(188)),o={title:"Environment"},c={unversionedId:"api/environment",id:"version-1.0.0/api/environment",isDocsHomePage:!1,title:"Environment",description:"`swift",source:"@site/versioned_docs/version-1.0.0/api/environment.md",slug:"/api/environment",permalink:"/Relay.swift/docs/1.0.0/api/environment",editUrl:"https://github.com/relay-tools/Relay.swift/edit/main/website/versioned_docs/version-1.0.0/api/environment.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"GraphQL tagged strings",permalink:"/Relay.swift/docs/1.0.0/api/graphql"},next:{title:"Network layer",permalink:"/Relay.swift/docs/1.0.0/api/network"}},u=[{value:"Creating an environment",id:"creating-an-environment",children:[{value:"<code>init</code>",id:"init",children:[]}]},{value:"Fetching data outside a view",id:"fetching-data-outside-a-view",children:[{value:"<code>fetchQuery</code>",id:"fetchquery",children:[]}]},{value:"Running mutations outside a view",id:"running-mutations-outside-a-view",children:[{value:"<code>commitMutation</code>",id:"commitmutation",children:[]}]}],s={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"class Environment\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Environment")," combines all the things that Relay.swift needs to be able to work. You use an environment to fetch queries and load stored records. Any views in your app that need to use Relay will need access to the environment to do so."),Object(i.b)("h2",{id:"creating-an-environment"},"Creating an environment"),Object(i.b)("h3",{id:"init"},Object(i.b)("inlineCode",{parentName:"h3"},"init")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"init(\n    network: Network,\n    store: Store,\n    handlerProvider: HandlerProvider = DefaultHandlerProvider()\n)\n")),Object(i.b)("p",null,"An environment needs two things at a minimum:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("a",{parentName:"li",href:"/Relay.swift/docs/1.0.0/api/network"},"Network Layer")," to tell it how to communicate with your GraphQL API"),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("a",{parentName:"li",href:"/Relay.swift/docs/1.0.0/api/store"},"Store")," for keeping track of data locally")),Object(i.b)("p",null,"Once you've created it, you probably want to keep the same Environment instance for the lifetime of your app. In SwiftUI, you can use ",Object(i.b)("a",{parentName:"p",href:"/Relay.swift/docs/1.0.0/api/relay-environment-modifier"},"relayEnvironment()")," to provide this to your views."),Object(i.b)("h2",{id:"fetching-data-outside-a-view"},"Fetching data outside a view"),Object(i.b)("h3",{id:"fetchquery"},Object(i.b)("inlineCode",{parentName:"h3"},"fetchQuery")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"func fetchQuery<Op: Operation>(\n    _ operation: Op,\n    cacheConfig: CacheConfig = .init()\n) -> AnyPublisher<Op.Data?, Error>\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"fetchQuery")," method allows you to perform a query without displaying the data in a view. Sometimes this can be useful to update the local store with new data in response to an event, or if you  need access to a query's data in a background task."),Object(i.b)("p",null,"If you want to show query data in a SwiftUI view, use the ",Object(i.b)("a",{parentName:"p",href:"/Relay.swift/docs/1.0.0/api/query"},"@Query")," property wrapper."),Object(i.b)("h2",{id:"running-mutations-outside-a-view"},"Running mutations outside a view"),Object(i.b)("h3",{id:"commitmutation"},Object(i.b)("inlineCode",{parentName:"h3"},"commitMutation")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"func commitMutation<Op: Operation>(\n  _ operation: Op,\n  optimisticResponse: [String: Any]? = nil,\n  optimisticUpdater: SelectorStoreUpdater? = nil,\n  updater: SelectorStoreUpdater? = nil\n) -> AnyPublisher<Op.Data?, Error>\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"commitMutation")," method allows you to execute a mutation to update data on the server. You can use this if you need to execute a mutation outside your views."),Object(i.b)("p",null,"Note that you need to subscribe to the publisher that is returned (using ",Object(i.b)("inlineCode",{parentName:"p"},"sink")," or ",Object(i.b)("inlineCode",{parentName:"p"},"assign"),") in order for your mutation to actually execute, and if that subscription is canceled early for some reason, you may not see the updates you expect."),Object(i.b)("p",null,"If you want to run a mutation in response to input from a SwiftUI view, use the ",Object(i.b)("a",{parentName:"p",href:"/Relay.swift/docs/1.0.0/api/mutation"},"@Mutation")," property wrapper, which manages this for you and makes it easy to show progress state in your UI while the mutation is running."),Object(i.b)("p",null,"For more information about how to use the ",Object(i.b)("inlineCode",{parentName:"p"},"updater")," and ",Object(i.b)("inlineCode",{parentName:"p"},"optimisticUpdater")," parameters, see ",Object(i.b)("a",{parentName:"p",href:"/Relay.swift/docs/1.0.0/knowledge-base/updater-functions"},"Updater functions"),"."))}p.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);