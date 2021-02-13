(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(154)),o={title:"0.2.0",slug:"0.2.0"},l={permalink:"/Relay.swift/releases/0.2.0",source:"@site/release-notes/2020-05-20-0.2.0.md",description:"Added",date:"2020-05-20T00:00:00.000Z",tags:[],title:"0.2.0",truncated:!1,prevItem:{title:"0.3.0",permalink:"/Relay.swift/releases/0.3.0"},nextItem:{title:"0.1.0",permalink:"/Relay.swift/releases/0.1.0"}},c=[{value:"Added",id:"added",children:[]},{value:"Changed",id:"changed",children:[]},{value:"Fixed",id:"fixed",children:[]},{value:"Removed",id:"removed",children:[]}],u={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"added"},"Added"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"environment.fetchQuery")," method for loading query data without presenting it in a view"),Object(i.b)("li",{parentName:"ul"},"ToDo list example app")),Object(i.b)("h3",{id:"changed"},"Changed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Changed generic type in ",Object(i.b)("inlineCode",{parentName:"li"},"Mutator")," from ",Object(i.b)("inlineCode",{parentName:"li"},"O")," to ",Object(i.b)("inlineCode",{parentName:"li"},"Operation")," to make extensions clearer"),Object(i.b)("li",{parentName:"ul"},"Generated ",Object(i.b)("inlineCode",{parentName:"li"},"Operation")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Fragment")," types now keep variables or keys on instances of the types"),Object(i.b)("li",{parentName:"ul"},"Cleaned up generating request identifiers")),Object(i.b)("h3",{id:"fixed"},"Fixed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updated the Pokedex and Star Wars example apps to work with the current APIs")),Object(i.b)("h3",{id:"removed"},"Removed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Removed unused ",Object(i.b)("inlineCode",{parentName:"li"},"AnyEncodable")," struct")))}d.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,m=p["".concat(o,".").concat(s)]||p[s]||b[s]||i;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);