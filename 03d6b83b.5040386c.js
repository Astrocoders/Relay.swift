(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{188:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,b=s["".concat(i,".").concat(d)]||s[d]||f[d]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(188)),i={title:"1.1.0",slug:"1.1.0"},c={permalink:"/Relay.swift/releases/1.1.0",source:"@site/release-notes/2021-05-23-1.1.0.md",description:"Added",date:"2021-05-23T00:00:00.000Z",tags:[],title:"1.1.0",truncated:!1,nextItem:{title:"1.0.0",permalink:"/Relay.swift/releases/1.0.0"}},l=[{value:"Added",id:"added",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"added"},"Added"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Support for ",Object(o.b)("a",{parentName:"li",href:"/Relay.swift/docs/knowledge-base/declarative-mutation-directives"},"declarative mutation directives"),", preventing the need to write ",Object(o.b)("a",{parentName:"li",href:"/Relay.swift/docs/knowledge-base/updater-functions"},"updater functions")," for several common mutation patterns. Using these requires at least version 10.1.0 of ",Object(o.b)("inlineCode",{parentName:"li"},"relay-compiler"),"."),Object(o.b)("li",{parentName:"ul"},"Support for client-local schema extensions, which allow you to use Relay to store and manage data that only exists in your app, not on your server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/Relay.swift/docs/api/pagination-fragment"},"@PaginationFragment")," now includes a ",Object(o.b)("inlineCode",{parentName:"li"},"refetch")," method just like ",Object(o.b)("a",{parentName:"li",href:"/Relay.swift/docs/api/refetchable-fragment"},"@RefetchableFragment"),".")))}p.isMDXComponent=!0}}]);