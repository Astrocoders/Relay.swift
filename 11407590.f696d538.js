(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(154)),i={title:"1.0.0",slug:"1.0.0"},c={permalink:"/Relay.swift/releases/1.0.0",source:"@site/release-notes/2020-12-29-1.0.0.md",description:"Changed",date:"2020-12-29T00:00:00.000Z",tags:[],title:"1.0.0",truncated:!1,nextItem:{title:"0.5.0",permalink:"/Relay.swift/releases/0.5.0"}},p=[{value:"Changed",id:"changed",children:[]},{value:"Removed",id:"removed",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"changed"},"Changed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/query"},"@Query"),", ",Object(o.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/fragment"},"@Fragment"),", ",Object(o.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/pagination-fragment"},"@PaginationFragment"),", and ",Object(o.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/mutation"},"@Mutation")," property wrappers have been replaced with the experimental new versions that used to be called ",Object(o.b)("inlineCode",{parentName:"p"},"QueryNext")," and so on. These property wrappers use ",Object(o.b)("inlineCode",{parentName:"p"},"@StateObject")," under the hood, which means they are better at keeping track of their underlying state."),Object(o.b)("p",{parentName:"li"},"See the API docs for each property wrapper linked above for how to use the new versions, as the API for them has changed, especially for ",Object(o.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/query"},"@Query"),". The ",Object(o.b)("a",{parentName:"p",href:"/Relay.swift/docs/getting-started/installation"},"Getting Started")," guide has also been updated to use the new APIs.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"RecordProxy")," is now a class-constrained protocol, so methods like ",Object(o.b)("inlineCode",{parentName:"p"},"setLinkedRecord")," are no longer ",Object(o.b)("inlineCode",{parentName:"p"},"mutating")," and can be used even when the record proxy is stored somewhere read-only like a ",Object(o.b)("inlineCode",{parentName:"p"},"let")," variable. This may cause warnings in your code if you storing record proxies in ",Object(o.b)("inlineCode",{parentName:"p"},"var"),"s and not reassigning them, which can be fixed by changing it to a ",Object(o.b)("inlineCode",{parentName:"p"},"let"),"."))),Object(o.b)("h3",{id:"removed"},"Removed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Xcode 11 and its corresponding SDK/OS versions (iOS 13, macOS 10.15, etc.) are no longer supported by Relay.swift. If you need to support these OS versions, you'll want to stick with Relay.swift 0.5. There are known bugs in the ",Object(o.b)("inlineCode",{parentName:"p"},"@Query")," property wrapper in particular that stem from not having ",Object(o.b)("inlineCode",{parentName:"p"},"@StateObject")," available in these older OS versions, which is why this support is being removed."),Object(o.b)("p",{parentName:"li"},"The release notes for version ",Object(o.b)("a",{parentName:"p",href:"/Relay.swift/releases/0.3.0"},"0.3.0")," have some more information about why this changed."))))}l.isMDXComponent=!0}}]);