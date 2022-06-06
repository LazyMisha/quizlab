(()=>{"use strict";var n,e,r,t,o={447:(n,e,r)=>{r.d(e,{Z:()=>a});var t=r(537),o=r.n(t),A=r(645),i=r.n(A)()(o());i.push([n.id,'body{margin:0;font-family:"Open Sans",sans-serif;color:#3d3d46}#root{position:fixed;width:100%;height:100%;background:#ecf5ff linear-gradient(LightSkyBlue, #FCF7B9) no-repeat center;background-size:cover;background-blend-mode:darken}.header{position:fixed;align-items:center;height:10%;width:100%;font-size:16px}.header-buttons{display:flex;justify-content:flex-end;height:100%;align-items:center}.header-button{cursor:pointer}@media(min-width: 800px){.header-button{margin:10px;padding:15px}.header-button:hover{outline:1px solid #e7e7e7}}#main-page{position:absolute;top:13%;bottom:7%;overflow:scroll;overflow-x:hidden;width:100%}#main-page::-webkit-scrollbar{display:none}.container{display:flex;justify-content:center;align-items:center;max-width:80rem;margin:0 auto}.container>*{width:100%}.footer{position:fixed;display:flex;justify-content:center;align-items:center;height:7%;bottom:0;width:100%;border-top:1px solid #888;font-size:12px}@media(min-width: 800px){.footer{font-size:14px}}.flex-column{display:flex;flex-direction:column}.flex-center{justify-content:center;align-items:center}.justify-center{justify-content:center}.text-center{text-align:center}.hidden{display:none}.btn{font-size:1.8rem;padding:1rem 0;width:20rem;text-align:center;border:.1rem solid #56a5eb;margin-bottom:1rem;text-decoration:none;color:#56a5eb;background-color:#fff}.btn:hover{cursor:pointer;box-shadow:0 .4rem 1.4rem 0 rgba(86,185,235,.5);transform:translateY(-0.1rem);transition:transform 150ms}.btn[disabled]:hover{cursor:not-allowed;box-shadow:none;transform:none}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}#progressBar{height:6px;margin-left:50px;margin-right:50px;border-radius:5px;overflow:hidden;background:#a6a6a6}#progressBarFull{height:100%;background:linear-gradient(90deg, #3D9E74, #5AAC84 17%, #7BB78C 34%, #01feff 51%, #3D9E74 68%, #5AAC84 85%, #7BB78C);background-size:300% 100%;animation:progress-animation 5s linear infinite;width:100%}@keyframes progress-animation{0%{background-position:100%}100%{background-position:0}}#progressText{position:absolute;left:5%}@media(min-width: 800px){#progressText{left:50%}}#logo-container{display:flex;align-items:center;justify-content:center;padding:15px;cursor:pointer}#united-logo{width:85px}@media(min-width: 800px){#logo-container{margin:10px}#united-logo{width:100px}#logo-container:hover{outline:1px solid #e7e7e7}}#loadOverlay{display:none}',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA,KACI,QAAA,CACA,kCAAA,CACA,aAAA,CAGJ,MACI,cAAA,CACA,UAAA,CACA,WAAA,CACA,0EAAA,CACA,qBAAA,CACA,4BAAA,CAGJ,QACI,cAAA,CACA,kBAAA,CACA,UAAA,CACA,UAAA,CACA,cAAA,CAGJ,gBACI,YAAA,CACA,wBAAA,CACA,WAAA,CACA,kBAAA,CAGJ,eACI,cAAA,CAIJ,yBACI,eACI,WAAA,CACA,YAAA,CAGJ,qBACI,yBAAA,CAAA,CAIR,WACI,iBAAA,CACA,OAAA,CACA,SAAA,CACA,eAAA,CACA,iBAAA,CACA,UAAA,CAGJ,8BACI,YAAA,CAGJ,WACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,aAAA,CAGJ,aACI,UAAA,CAGJ,QACI,cAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,SAAA,CACA,QAAA,CACA,UAAA,CACA,yBAAA,CACA,cAAA,CAIJ,yBACI,QACI,cAAA,CAAA,CAIR,aACI,YAAA,CACA,qBAAA,CAGJ,aACI,sBAAA,CACA,kBAAA,CAGJ,gBACI,sBAAA,CAGJ,aACI,iBAAA,CAGJ,QACI,YAAA,CAGJ,KACI,gBAAA,CACA,cAAA,CACA,WAAA,CACA,iBAAA,CACA,0BAAA,CACA,kBAAA,CACA,oBAAA,CACA,aAAA,CACA,qBAAA,CAGJ,WACI,cAAA,CACA,+CAAA,CACA,6BAAA,CACA,0BAAA,CAGJ,qBACI,kBAAA,CACA,eAAA,CACA,cAAA,CAGJ,gBACI,GACI,sBAAA,CAEJ,KACI,wBAAA,CAAA,CAIR,aACI,UAAA,CACA,gBAAA,CACA,iBAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CAGJ,iBACI,WAAA,CACA,oHAAA,CACA,yBAAA,CACA,+CAAA,CACA,UAAA,CAGJ,8BACI,GACI,wBAAA,CAEJ,KACI,qBAAA,CAAA,CAIR,cACI,iBAAA,CACA,OAAA,CAIJ,yBACI,cACI,QAAA,CAAA,CAIR,gBACI,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CACA,cAAA,CAGJ,aACI,UAAA,CAIJ,yBACI,gBACI,WAAA,CAGJ,aACI,WAAA,CAGJ,sBACI,yBAAA,CAAA,CAIR,aACI,YAAA",sourcesContent:['body {\r\n    margin: 0;\r\n    font-family: "Open Sans", sans-serif;\r\n    color: #3D3D46;\r\n}\r\n\r\n#root {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #ecf5ff linear-gradient(LightSkyBlue, #FCF7B9) no-repeat center;\r\n    background-size: cover;\r\n    background-blend-mode: darken;\r\n}\r\n\r\n.header {\r\n    position: fixed;\r\n    align-items: center;\r\n    height: 10%;\r\n    width: 100%;\r\n    font-size: 16px;\r\n}\r\n\r\n.header-buttons {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.header-button {\r\n    cursor: pointer;\r\n}\r\n\r\n/* big screen */\r\n@media (min-width: 800px) {\r\n    .header-button {\r\n        margin: 10px;\r\n        padding: 15px;\r\n    }\r\n\r\n    .header-button:hover {\r\n        outline: 1px solid #e7e7e7;\r\n    }\r\n}\r\n\r\n#main-page {\r\n    position: absolute;\r\n    top: 13%;\r\n    bottom: 7%;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    width: 100%;\r\n}\r\n\r\n#main-page::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 80rem;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container > * {\r\n    width: 100%;\r\n}\r\n\r\n.footer {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 7%;\r\n    bottom: 0;\r\n    width: 100%;\r\n    border-top: 1px solid #888;\r\n    font-size: 12px;\r\n}\r\n\r\n/* big screen */\r\n@media (min-width: 800px) {\r\n    .footer {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n.flex-column {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.flex-center {\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.justify-center {\r\n    justify-content: center;\r\n}\r\n\r\n.text-center {\r\n    text-align: center;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.btn {\r\n    font-size: 1.8rem;\r\n    padding: 1rem 0;\r\n    width: 20rem;\r\n    text-align: center;\r\n    border: 0.1rem solid #56a5eb;\r\n    margin-bottom: 1rem;\r\n    text-decoration: none;\r\n    color: #56a5eb;\r\n    background-color: white;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);\r\n    transform: translateY(-0.1rem);\r\n    transition: transform 150ms;\r\n}\r\n\r\n.btn[disabled]:hover {\r\n    cursor: not-allowed;\r\n    box-shadow: none;\r\n    transform: none;\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n#progressBar {\r\n    height: 6px;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    background: #A6A6A6;\r\n}\r\n\r\n#progressBarFull {\r\n    height: 100%;\r\n    background: linear-gradient(90deg,#3D9E74,#5AAC84 17%,#7BB78C 34%,#01feff 51%,#3D9E74 68%,#5AAC84 85%,#7BB78C);\r\n    background-size: 300% 100%;\r\n    animation: progress-animation 5s linear infinite;\r\n    width: 100%;\r\n}\r\n\r\n@keyframes progress-animation {\r\n    0% {\r\n        background-position: 100%\r\n    }\r\n    100% {\r\n        background-position: 0\r\n    }\r\n}\r\n\r\n#progressText {\r\n    position: absolute;\r\n    left: 5%;\r\n}\r\n\r\n/*big screen*/\r\n@media (min-width: 800px) {\r\n    #progressText {\r\n        left: 50%;\r\n    }\r\n}\r\n\r\n#logo-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n#united-logo {\r\n    width: 85px;\r\n}\r\n\r\n/* big screen */\r\n@media (min-width: 800px) {\r\n    #logo-container {\r\n        margin: 10px;\r\n    }\r\n\r\n    #united-logo {\r\n        width: 100px;\r\n    }\r\n\r\n    #logo-container:hover {\r\n        outline: 1px solid #e7e7e7;\r\n    }\r\n}\r\n\r\n#loadOverlay{\r\n    display: none;\r\n}\r\n'],sourceRoot:""}]);const a=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&i[d[0]]||(void 0!==A&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=A),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),A="/*# ".concat(o," */"),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([A]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var A={},i=[],a=0;a<n.length;a++){var s=n[a],c=t.base?s[0]+t.base:s[0],d=A[c]||0,l="".concat(c," ").concat(d);A[c]=d+1;var u=r(l),C={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(C);else{var p=o(C,t);t.byIndex=a,e.splice(a,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var A=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=r(A[i]);e[a].references--}for(var s=t(n,o),c=0;c<A.length;c++){var d=r(A[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}A=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var A=r.sourceMap;A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},582:(n,e,r)=>{n.exports=r.p+"e5c2c03eb1a9225ebdf5.svg"}},A={};function i(n){var e=A[n];if(void 0!==e)return e.exports;var r=A[n]={id:n,exports:{}};return o[n](r,r.exports,i),r.exports}i.m=o,i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},e=Object.getPrototypeOf?n=>Object.getPrototypeOf(n):n=>n.__proto__,i.t=function(r,t){if(1&t&&(r=this(r)),8&t)return r;if("object"==typeof r&&r){if(4&t&&r.__esModule)return r;if(16&t&&"function"==typeof r.then)return r}var o=Object.create(null);i.r(o);var A={};n=n||[null,e({}),e([]),e(e)];for(var a=2&t&&r;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((n=>A[n]=()=>r[n]));return A.default=()=>r,i.d(o,A),o},i.d=(n,e)=>{for(var r in e)i.o(e,r)&&!i.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},i.f={},i.e=n=>Promise.all(Object.keys(i.f).reduce(((e,r)=>(i.f[r](n,e),e)),[])),i.u=n=>n+".bundle.js",i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r={},t="quizlab:",i.l=(n,e,o,A)=>{if(r[n])r[n].push(e);else{var a,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+o){a=l;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+o),a.src=n),r[n]=[e];var u=(e,t)=>{a.onerror=a.onload=null,clearTimeout(C);var o=r[n];if(delete r[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((n=>n(t))),e)return e(t)},C=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),s&&document.head.appendChild(a)}},i.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.p="/quizlab",(()=>{var n={296:0};i.f.j=(e,r)=>{var t=i.o(n,e)?n[e]:void 0;if(0!==t)if(t)r.push(t[2]);else{var o=new Promise(((r,o)=>t=n[e]=[r,o]));r.push(t[2]=o);var A=i.p+i.u(e),a=new Error;i.l(A,(r=>{if(i.o(n,e)&&(0!==(t=n[e])&&(n[e]=void 0),t)){var o=r&&("load"===r.type?"missing":r.type),A=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+A+")",a.name="ChunkLoadError",a.type=o,a.request=A,t[1](a)}}),"chunk-"+e,e)}};var e=(e,r)=>{var t,o,[A,a,s]=r,c=0;if(A.some((e=>0!==n[e]))){for(t in a)i.o(a,t)&&(i.m[t]=a[t]);s&&s(i)}for(e&&e(r);c<A.length;c++)o=A[c],i.o(n,o)&&n[o]&&n[o][0](),n[o]=0},r=self.webpackChunkquizlab=self.webpackChunkquizlab||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),i.nc=void 0,(()=>{var n=i(379),e=i.n(n),r=i(795),t=i.n(r),o=i(569),A=i.n(o),a=i(565),s=i.n(a),c=i(216),d=i.n(c),l=i(589),u=i.n(l),C=i(447),p={};function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},t=new MutationObserver((function(){document.contains(n)?e():(r(),t.disconnect())}));t.observe(document,{attributes:!1,childList:!0,characterData:!1,subtree:!0})}p.styleTagTransform=u(),p.setAttributes=s(),p.insert=A().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=d(),e()(C.Z,p),C.Z&&C.Z.locals&&C.Z.locals;var m={404:i.e(13).then(i.bind(i,13)),"/":i.e(47).then(i.bind(i,47)),"/game":i.e(255).then(i.bind(i,255)),"/united24":i.e(902).then(i.bind(i,902)),"/end":i.e(754).then(i.bind(i,754))},g=function(){var n=window.location.pathname,e=m[n]||m[404];"function"!=typeof e?e.then((function(n){return n.default(f).render()})):e().render()};window.onpopstate=g,window.onhashchange=g,window.routeByPath=function(n){window.history.pushState({},"",n),g(),document.getElementById("main-page").scrollTop=0},g();var h=i(582),b=document.getElementById("united-logo"),y=document.getElementById("logo-container"),v=document.getElementById("home-btn");b.src=h,y.addEventListener("click",(function(){window.routeByPath("/united24")})),v.addEventListener("click",(function(){window.routeByPath("/")}))})()})();
//# sourceMappingURL=bundle.js.map