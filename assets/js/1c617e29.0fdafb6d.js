"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[7265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:5},o="\u5f00\u53d1\u8005\u8c03\u7528OpenAPI\u8d85\u65f6",p={unversionedId:"develop/best-practices/retry",id:"develop/best-practices/retry",title:"\u5f00\u53d1\u8005\u8c03\u7528OpenAPI\u8d85\u65f6",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u9489\u9489\u670d\u52a1\u7aefOpenAPI\u8d85\u65f6\u7684\u5224\u5b9a\u6761\u4ef6\u3001\u89e3\u51b3\u529e\u6cd5\u548c\u6700\u4f73\u5b9e\u8df5\u3002",source:"@site/docs/develop/best-practices/retry.md",sourceDirName:"develop/best-practices",slug:"/develop/best-practices/retry",permalink:"/developerpedia/docs/develop/best-practices/retry",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/develop/best-practices/retry.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u9694\u79bb\u6d4b\u8bd5\u548c\u751f\u4ea7\u73af\u5883",permalink:"/developerpedia/docs/develop/best-practices/testing"},next:{title:"\u7f51\u7edc\u8fde\u63a5\u95ee\u9898\u9519\u8bef\u8bca\u65ad\u4e0e\u89e3\u51b3",permalink:"/developerpedia/docs/develop/best-practices/socket-timeout"}},s={},i=[{value:"\u89e6\u53d1\u6761\u4ef6",id:"\u89e6\u53d1\u6761\u4ef6",level:2},{value:"\u5224\u5b9a\u6761\u4ef6",id:"\u5224\u5b9a\u6761\u4ef6",level:2},{value:"\u89e3\u51b3\u529e\u6cd5",id:"\u89e3\u51b3\u529e\u6cd5",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f00\u53d1\u8005\u8c03\u7528openapi\u8d85\u65f6"},"\u5f00\u53d1\u8005\u8c03\u7528OpenAPI\u8d85\u65f6"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u9489\u9489\u670d\u52a1\u7aefOpenAPI\u8d85\u65f6\u7684\u5224\u5b9a\u6761\u4ef6\u3001\u89e3\u51b3\u529e\u6cd5\u548c\u6700\u4f73\u5b9e\u8df5\u3002"),(0,a.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u8005\u8c03\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0\u7684OpenAPI\u4f1a\u51fa\u73b0\u8c03\u7528\u8d85\u65f6\u7684\u60c5\u51b5\uff0c\u76ee\u524d\u9489\u9489\u5f00\u653e\u5e73\u53f0\u7684OpenAPI\u8c03\u7528\u6210\u529f\u7387\u80fd\u4fdd\u8bc1\u572899.95%\uff0c\u4f46\u662f\u4ecd\u6709\u4e00\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u51fa\u73b0\u5f02\u5e38\uff0c\u7136\u540e\u8c03\u7528API\u8d85\u65f6\u4e5f\u662f\u4e00\u79cd\u5f02\u5e38\u60c5\u51b5\uff0c\u51fa\u73b0\u8be5\u5f02\u5e38\u662f\u6b63\u5e38\u73b0\u8c61\uff0c\u4f46\u662f\u9488\u5bf9\u8fd9\u4e00\u73b0\u8c61\u76ee\u524d\u6709\u6bd4\u8f83\u591a\u7684\u5f00\u53d1\u8005\u8fdb\u884c\u54a8\u8be2\u89e3\u51b3\u65b9\u6848\uff0c\u73b0\u9489\u9489\u63d0\u4f9b\u6574\u4e00\u5957\u7684\u89e3\u51b3\u65b9\u6848\u548c\u6700\u4f73\u5b9e\u8df5\u6848\u4f8b\uff0c\u4f9b\u5404\u4f4d\u5f00\u53d1\u8005\u8fdb\u884c\u53c2\u8003\u3002"),(0,a.kt)("p",null,"\u73b0\u8c61\u4e00\uff1a\u8c03\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0API\u5c0f\u9762\u79ef\u51fa\u73b0\u8d85\u65f6\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u8005\u53c8\u60f3\u62ff\u5230\u6b63\u786e\u7684\u54cd\u5e94\u7ed3\u679c\uff0c\u5efa\u8bae\u5f00\u53d1\u8005\u53ef\u4ee5\u6309\u7167\u672c\u6587\u4e0b\u5217\u6240\u8ff0\u7684\u89e3\u51b3\u65b9\u6848\u8fdb\u884c\u6392\u67e5\u548c\u89e3\u51b3\u3002"),(0,a.kt)("p",null,"\u73b0\u8c61\u4e8c\uff1a\u8c03\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0API\u5927\u9762\u79ef\u51fa\u73b0\u8d85\u65f6\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u9489\u9489\u7684\u670d\u52a1\u7aef\u6709\u8d1f\u8f7d\u8fc7\u9ad8\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u8054\u7cfb",(0,a.kt)("a",{parentName:"p",href:"/docs/explore/support"},"\u6280\u672f\u652f\u6301"),"\u63d0\u4ea4\u53cd\u9988\u5bfb\u6c42\u5e2e\u52a9\u3002"),(0,a.kt)("h2",{id:"\u89e6\u53d1\u6761\u4ef6"},"\u89e6\u53d1\u6761\u4ef6"),(0,a.kt)("p",null,"\u5728\u5f00\u53d1\u8005\u8c03\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0\u7684\u63a5\u53e3\u65f6\uff0c\u5982\u679c\u57283s\u5185\u9489\u9489\u670d\u52a1\u7aef\u672a\u505a\u51fa\u54cd\u5e94\u5c31\u4f1a\u54cd\u5e94\u8d85\u65f6\uff0c\u6b64\u65f6\u8c03\u7528\u8005\u4f1a\u83b7\u53d6\u5230\u5bf9\u5e94\u7684\u8d85\u65f6\u9519\u8bef\u8bf7\u6c42\u3002"),(0,a.kt)("h2",{id:"\u5224\u5b9a\u6761\u4ef6"},"\u5224\u5b9a\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e7\u7248OpenAPI\u8fd4\u56de\u4ee5\u4e0b\u9519\u8bef\u7801\u8868\u793a\u8c03\u7528\u8d85\u65f6\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u7801"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8\u3010\u5b50\u9519\u8bef\u7801\u3011"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u8d85\u65f6"),(0,a.kt)("td",{parentName:"tr",align:null},"isp.top-remote-connection-timeout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"88"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9274\u6743\u5f02\u5e38"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5b50\u9519\u8bef\u7801\u4e3a\u7a7a\uff0c\u5219\u9274\u6743\u670d\u52a1\u8d85\u65f6\u3002")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u7248OpenAPI\u8fd4\u56de\u4ee5\u4e0b\u9519\u8bef\u7801\u8868\u793a\u8c03\u7528\u8d85\u65f6\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u7801\u3010http\u72b6\u6001\u7801\u3011"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"504"),(0,a.kt)("td",{parentName:"tr",align:null},"Gateway Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u7f51\u5173\u8d85\u65f6")))),(0,a.kt)("h2",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5"),(0,a.kt)("p",null,"\u8c03\u7528\u9489\u9489\u7684\u5f00\u653e\u63a5\u53e3\u7684api\u51fa\u73b0\u4e0a\u8ff0\u6240\u793a\u7684\u9519\u8bef\u7801\u4e4b\u540e\uff0c\u8868\u793a\u5f53\u524d\u8bf7\u6c42\u54cd\u5e94\u8d85\u65f6\uff0c\u6b64\u65f6\u5f00\u53d1\u8005\u53ef\u4ee5\u5bf9\u63a5\u53e3\u8c03\u7528\u505a\u8d85\u65f6\u91cd\u8bd5\u5904\u7406\u673a\u5236\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u7acb\u5373\u91cd\u8bd5\u80fd\u83b7\u53d6\u6210\u529f\u54cd\u5e94\u7684\u7ed3\u679c\uff0c\u4f46\u5bf9\u4e8e\u4e00\u4e9b\u6682\u65f6\u6027\u7684\u9519\u8bef\uff0c\u5982\u7f51\u7edc\u6296\u52a8\u7b49\uff0c\u53ef\u80fd\u7acb\u5373\u91cd\u8bd5\u8fd8\u662f\u4f1a\u5931\u8d25\uff0c\u901a\u5e38\u7b49\u5f85\u4e00\u5c0f\u4f1a\u513f\u518d\u91cd\u8bd5\u7684\u8bdd\u6210\u529f\u7387\u4f1a\u8f83\u9ad8\uff0c\u5e76\u4e14\u4e5f\u53ef\u80fd\u6253\u6563\u4e0a\u6e38\u91cd\u8bd5\u7684\u65f6\u95f4\uff0c\u8f83\u5c11\u56e0\u4e3a\u540c\u65f6\u90fd\u91cd\u8bd5\u800c\u5bfc\u81f4\u7684\u4e0b\u6e38\u77ac\u95f4\u6d41\u91cf\u9ad8\u5cf0\u3002\u51b3\u5b9a\u7b49\u5f85\u591a\u4e45\u4e4b\u540e\u518d\u91cd\u8bd5\u7684\u65b9\u6cd5\u53eb\u505a\u9000\u907f\u7b56\u7565\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5e38\u89c1\u7684\u9000\u907f\u7b56\u7565\u65b9\u6848\uff0c\u5982\uff1a\u3010\u5177\u4f53\u89c1\u6700\u4f73\u5b9e\u8df5\u3011"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7acb\u5373\u91cd\u8bd5\uff1a\u8c03\u7528\u62a5\u9519\u7acb\u5373\u53d1\u8d77\u91cd\u8bd5\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u6027\u9000\u907f\uff1a\u6bcf\u6b21\u7b49\u5f85\u56fa\u5b9a\u65f6\u95f4\u540e\u91cd\u8bd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u968f\u673a\u9000\u907f\uff1a\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u968f\u673a\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u540e\u91cd\u8bd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6307\u6570\u9000\u907f\uff1a\u8fde\u7eed\u91cd\u8bd5\u65f6\uff0c\u6bcf\u6b21\u7b49\u5f85\u65f6\u95f4\u90fd\u662f\u524d\u4e00\u6b21\u7684\u500d\u6570\u3002")),(0,a.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("p",null,"\u5982\u679c\u63a5\u53e3\u8d85\u65f6\u7684\u51e0\u7387\u6bd4\u8f83\u5927\uff0c\u5efa\u8bae\u5f00\u53d1\u8005\u6309\u7167\u6307\u6570\u9000\u907f\u7b56\u7565\u8fdb\u884c\u63a5\u5165\uff0c\u5982\u679c\u51fa\u73b0\u7684\u51e0\u7387\u8f83\u5c0f\uff0c\u53ef\u4ee5\u7acb\u5373\u91cd\u8bd5\u6216\u91c7\u7528\u7ebf\u6027\u9000\u907f\u7b56\u7565\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u8bf7\u6c42\u4f2a\u4ee3\u7801\u793a\u4f8b\uff0c\u4ec5\u4f9b\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7acb\u5373\u91cd\u8bd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class Retry {\n    public TaobaoResponse retryCall() {\n        TaobaoResponse response = client.execute(req,"accessKey","accessSecret","suiteTicket");\n        if (("15".equals(response.getErrorCode()) && "isp.top-remote-connection-timeout".equals(response.getSubCode()))\n                || ("88".equals(response.getErrorCode()) && StringUtils.isEmpty(response.getSubCode()))) {\n            // \u5224\u65ad\u4e3a\u8d85\u65f6\u8bf7\u6c42\uff0c\u7acb\u5373\u53d1\u8d77\u91cd\u8bd5\n            response = client.execute(req,"accessKey","accessSecret","suiteTicket");\n        }\n        return response;\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u6027\u9000\u907f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class Retry {\n    public TaobaoResponse linearRetry() {\n        int maxRetryTimes = 3;\n        TaobaoResponse response;\n        for (int retry = 1; retry <= maxRetryTimes; retry++) {\n            response = client.execute(req,"accessKey","accessSecret","suiteTicket");\n            if (("15".equals(response.getErrorCode()) && "isp.top-remote-connection-timeout".equals(response.getSubCode()))\n                    || ("88".equals(response.getErrorCode()) && StringUtils.isEmpty(response.getSubCode()))) {\n                Thread.sleep(1000); // \u56fa\u5b9a\u7ebf\u6027\u7b49\u5f85\u65f6\u95f4\u53d1\u8d77\u91cd\u8bd5\n            } else {\n                // \u6253\u5370\u8bf7\u6c42\u7ed3\u679c\uff0c\u6b64\u5904\u6709\u53ef\u80fd\u6210\u529f\u6216\u5931\u8d25\uff0c\u4f46\u4e0d\u662f\u8d85\u65f6\u5f02\u5e38\uff0c\u6240\u4ee5\u4e0d\u7ee7\u7eed\u4e0b\u6b21\u91cd\u8bd5\u3002\n                break;\n            }\n        }\n        return response;\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u968f\u673a\u9000\u907f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class Retry {\n    public TaobaoResponse randomRetry() {\n        Retryer<TaobaoResponse> retry = RetryerBuilder.<TaobaoResponse>newBuilder() // \u6b64\u5904\u793a\u4f8b\u662f\u501f\u52a9\u5f00\u6e90guava-retrying\u5de5\u5177\n                .retryIfResult( response -> ("15".equals(response.getErrorCode()) && "isp.top-remote-connection-timeout".equals(response.getSubCode()))\n                        || ("88".equals(response.getErrorCode()) && isEmpty(response.getSubCode())))\n                .withWaitStrategy(WaitStrategies.randomWait(3, TimeUnit.SECONDS)) // \u968f\u673a\u7b49\u5f85\uff0c\u6700\u5927\u65f6\u957f3s\n                .withStopStrategy(StopStrategies.stopAfterAttempt(3)) // \u91cd\u8bd5\u6700\u5927\u6b21\u6570\n                .build();\n        try {\n            return retry.call(() -> client.execute(req,"accessKey","accessSecret","suiteTicket"));\n        } catch (Exception e){\n            e.printStackTrace();\n        }\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u6570\u9000\u907f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class Retry {\n    public TaobaoResponse indexRetry() {\n        Retryer<TaobaoResponse> retry = RetryerBuilder.<TaobaoResponse>newBuilder()\n                .retryIfResult( response -> ("15".equals(response.getErrorCode()) && "isp.top-remote-connection-timeout".equals(response.getSubCode()))\n                        || ("88".equals(response.getErrorCode()) && isEmpty(response.getSubCode())))\n                .withWaitStrategy(WaitStrategies.exponentialWait(500, 10, TimeUnit.SECONDS)) // \u7b49\u5f85\u7b56\u7565\uff1a\u6307\u6570\u7b49\u5f85\n                .withStopStrategy(StopStrategies.stopAfterAttempt(3)) // \u91cd\u8bd5\u6700\u5927\u6b21\u6570\n                .build();\n        try {\n            return retry.call(() -> client.execute(req,"accessKey","accessSecret","suiteTicket"));\n        } catch (Exception e){\n            e.printStackTrace();\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);