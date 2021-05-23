(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(188)),a={title:"@RelayEnvironment"},p={unversionedId:"api/relay-environment-wrapper",id:"version-1.1.0/api/relay-environment-wrapper",isDocsHomePage:!1,title:"@RelayEnvironment",description:"The @RelayEnvironment property wrapper provides direct access to the current Relay.swift Environment.",source:"@site/versioned_docs/version-1.1.0/api/relay-environment-wrapper.md",slug:"/api/relay-environment-wrapper",permalink:"/Relay.swift/docs/api/relay-environment-wrapper",editUrl:"https://github.com/relay-tools/Relay.swift/edit/main/website/versioned_docs/version-1.1.0/api/relay-environment-wrapper.md",version:"1.1.0",sidebar:"version-1.1.0/docs",previous:{title:"relayEnvironment()",permalink:"/Relay.swift/docs/api/relay-environment-modifier"},next:{title:"@Query",permalink:"/Relay.swift/docs/api/query"}},c=[],s={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@RelayEnvironment")," property wrapper provides direct access to the current Relay.swift ",Object(i.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/environment"},"Environment"),"."),Object(i.b)("p",null,"Most of the time, you won't need to use this: the other property wrappers access the the current environment in the same way internally."),Object(i.b)("p",null,"You may need this in order to pass on the correct environment to a view that won't inherit it normally. A common way this can happen is when presenting a sheet:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'import SwiftUI\nimport RelaySwiftUI\n\nstruct ContentView: View {\n    @RelayEnvironment var environment: Relay.Environment\n\n    @State var isPresented: Bool\n\n    var body: some View {\n        Text("Some text")\n            .sheet(isPresented: $isPresented) {\n                MySheet()\n                    .relayEnvironment(environment)\n            }\n    }\n}\n')),Object(i.b)("p",null,"Using this property wrapper requires that another view higher in the tree has used ",Object(i.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/relay-environment-modifier"},"relayEnvironment()")," to set the current environment for the tree. Otherwise, your app will crash."))}l.isMDXComponent=!0},188:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},y=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),y=r,f=u["".concat(a,".").concat(y)]||u[y]||m[y]||i;return t?o.a.createElement(f,p(p({ref:n},s),{},{components:t})):o.a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=y;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);