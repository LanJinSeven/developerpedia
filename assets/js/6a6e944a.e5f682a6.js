"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[4336],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},i="6. \u606d\u559c\u4f60\uff01",l={unversionedId:"explore/tutorials/stream/event/go/congrats",id:"explore/tutorials/stream/event/go/congrats",title:"6. \u606d\u559c\u4f60\uff01",description:"\u81f3\u6b64\uff0c\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u4ece\u96f6\u5f00\u59cb\u521b\u5efa\u3001\u5f00\u53d1\u548c\u90e8\u7f72\u4e00\u4e2a\u5e94\u7528\uff0c\u5e76\u6210\u529f\u5b8c\u6210\u53d8\u66f4\u901a\u77e5\u63a5\u6536\u80fd\u529b\u3002",source:"@site/docs/explore/tutorials/stream/event/go/congrats.md",sourceDirName:"explore/tutorials/stream/event/go",slug:"/explore/tutorials/stream/event/go/congrats",permalink:"/developerpedia/docs/explore/tutorials/stream/event/go/congrats",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/stream/event/go/congrats.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. \u4f53\u9a8c\u4e8b\u4ef6\u901a\u77e5",permalink:"/developerpedia/docs/explore/tutorials/stream/event/go/test-event"},next:{title:"Node.js",permalink:"/developerpedia/docs/explore/tutorials/stream/event/nodejs"}},p={},s=[{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"6-\u606d\u559c\u4f60"},"6. \u606d\u559c\u4f60\uff01"),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u4ece\u96f6\u5f00\u59cb\u521b\u5efa\u3001\u5f00\u53d1\u548c\u90e8\u7f72\u4e00\u4e2a\u5e94\u7528\uff0c\u5e76\u6210\u529f\u5b8c\u6210\u53d8\u66f4\u901a\u77e5\u63a5\u6536\u80fd\u529b\u3002"),(0,o.kt)("p",null,"\u9664\u4e86 Go \u4e4b\u5916\uff0c\u9489\u9489 Stream \u6a21\u5f0f\u7684\u673a\u5668\u4eba\u7684 SDK \u8fd8\u652f\u6301\u5176\u4ed6\u4e3b\u6d41\u7f16\u7a0b\u8bed\u8a00\uff0c\u53ef\u4ee5\u79fb\u6b65",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/overview"},"\u9489\u9489 SDK \u6982\u8ff0"),"\u67e5\u770b\u6240\u6709\u7684 SDK\u3002"),(0,o.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-dingtalk/dingtalk-stream-sdk-go"},"GitHub \u4e0a\u5b8c\u6574\u6559\u7a0b\u4ee3\u7801"))))}d.isMDXComponent=!0}}]);