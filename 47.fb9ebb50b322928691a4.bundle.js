"use strict";(self.webpackChunkquizlab=self.webpackChunkquizlab||[]).push([[47],{344:(t,n,e)=>{e.d(n,{Z:()=>i});var r=document.getElementById("main-page");function i(t){r.innerHTML=t}},47:(t,n,e)=>{e.r(n),e.d(n,{default:()=>S});var r=e(344),i=e(379),a=e.n(i),s=e(795),A=e.n(s),o=e(569),c=e.n(o),l=e(565),d=e.n(l),h=e(216),u=e.n(h),p=e(589),C=e.n(p),f=e(929),m={};function b(t,n,e){if(!n.has(t))throw new TypeError("attempted to get private field on non-instance");return e}function g(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function x(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,n,e){return n&&x(t.prototype,n),e&&x(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}m.styleTagTransform=C(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=A(),m.insertStyleElement=u(),a()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var w=function(){function t(){var n,e,r=this;g(this,t),e=function(t){var n=t-r.lastTime;r.lastTime=t,r.timer>r.nextFrame?(r.ctx.fillStyle="rgba(137, 196, 244, 0.09)",r.ctx.textAlign="center",r.ctx.fillRect(0,0,r.canvas.width,r.canvas.height),r.ctx.fillStyle="black",r.ctx.font="20px monospace",r.effect.symbols.forEach((function(t){return t.draw(r.ctx)})),r.timer=0):r.timer+=n,requestAnimationFrame(r.setMatrix)},(n="setMatrix")in this?Object.defineProperty(this,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):this[n]=e,this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.nextFrame=1e3/30,this.lastTime=0,this.timer=0}return v(t,[{key:"render",value:function(){var t=this;this.effect=new B(this.canvas.width,this.canvas.height),this.setMatrix(0),window.addEventListener("resize",(function(){t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight,t.effect.resize(t.canvas.width,t.canvas.height)}))}}]),t}(),y=function(){function t(n,e,r,i){g(this,t),this.characters="01",this.x=n,this.y=e,this.fontSize=r,this.canvasHeight=i,this.text=""}return v(t,[{key:"draw",value:function(t){this.text=this.characters.charAt(Math.floor(Math.random()*this.characters.length)),t.fillText(this.text,this.x*this.fontSize,this.y*this.fontSize),this.y*this.fontSize>this.canvasHeight&&Math.random()>.98?this.y=0:this.y+=1}}]),t}(),k=new WeakSet,B=function(){function t(n,e){var r,i;g(this,t),function(t,n){if(n.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(r=this,i=k),i.add(r),this.canvasWidth=n,this.canvasHeight=e,this.columns=this.canvasWidth/20,this.symbols=[],b(this,k,z).call(this)}return v(t,[{key:"resize",value:function(t,n){this.canvasWidth=t,this.canvasHeight=n,this.columns=this.canvasWidth/20,this.symbols=[],b(this,k,z).call(this)}}]),t}();function z(){for(var t=0;t<this.columns;t++)this.symbols[t]=new y(t,0,20,this.canvasHeight)}function E(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var I=function(){function t(){var n,e,r=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),e=function(t){var n=t.target,e=n.textContent;localStorage.setItem("maxQuestions",e.substring(1)),r.cardsEls.forEach((function(t){t.firstChild.classList.add("hidden")})),n.firstChild.classList.remove("hidden")},(n="setMarkSign")in this?Object.defineProperty(this,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):this[n]=e,localStorage.removeItem("maxQuestions")}var n,e;return n=t,(e=[{key:"render",value:function(){var t=this;(0,r.Z)('<div id="quiz" class="flex-center flex-column"> <canvas id="canvas"></canvas> <div class="title-wrapper"> The ISTQB® Certified Tester Foundation Level (CTFL) </div> <div class="title-wrapper"> Select a card with the number of questions </div> <div class="select-number-cards-container"> <div class="select-number-card" data-number="1"><span class="mark-sign hidden">&#10003;</span>8</div> <div class="select-number-card" data-number="2"><span class="mark-sign hidden">&#10003;</span>16</div> <div class="select-number-card" data-number="3"><span class="mark-sign hidden">&#10003;</span>24</div> <div class="select-number-card" data-number="4"><span class="mark-sign hidden">&#10003;</span>32</div> <div class="select-number-card" data-number="6"><span class="mark-sign hidden">&#10003;</span>40</div> </div> <div id="start-game-button">Start Quiz</div> </div> '),this.startGameBtnEl=document.getElementById("start-game-button"),this.cardsEls=Array.from(document.getElementsByClassName("select-number-card")),this.cardsEls.forEach((function(n){n.addEventListener("click",t.setMarkSign)})),this.startGameBtnEl.addEventListener("click",(function(){window.routeByPath("/game")})),(new w).render()}}])&&E(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function S(){return new I}},929:(t,n,e)=>{e.d(n,{Z:()=>A});var r=e(537),i=e.n(r),a=e(645),s=e.n(a)()(i());s.push([t.id,"#quiz{height:100%}.title-wrapper{width:90%;text-align:center;z-index:1;margin:10px}.select-number-cards-container{display:flex;flex-wrap:wrap;align-content:center;justify-content:center;height:50%;width:90%;padding:10px}.select-number-card{display:flex;align-items:center;justify-content:space-around;flex-basis:30%;flex-grow:1;position:relative;height:30%;margin:5px;text-align:center;background:#4e5180;border-radius:10px;cursor:pointer;color:#fff;font-size:14px;box-shadow:5px 5px 15px #3b3e79;max-width:60px}.select-number-card:hover{background:#3b3e79}.mark-sign{position:absolute;top:10%;left:5%;color:#28a745;font-weight:bolder}#start-game-button{align-items:center;background-color:#4e5180;border-radius:8px;box-shadow:rgba(151,65,252,.2) 0 15px 30px -5px;font-size:14px;padding:13px 24px;cursor:pointer;color:#fff;z-index:1;margin:10px}#start-game-button:hover{background:#3b3e79}#canvas{opacity:.1;position:absolute;height:100%;width:100%}@media(min-width: 800px){.title-wrapper{font-size:2vmax}#start-game-button{font-size:20px}.select-number-card{font-size:25px}}","",{version:3,sources:["webpack://./src/pages/home/styles.css"],names:[],mappings:"AAAA,MACI,WAAA,CAGJ,eACI,SAAA,CACA,iBAAA,CACA,SAAA,CACA,WAAA,CAGJ,+BACI,YAAA,CACA,cAAA,CACA,oBAAA,CACA,sBAAA,CACA,UAAA,CACA,SAAA,CACA,YAAA,CAGJ,oBACI,YAAA,CACA,kBAAA,CACA,4BAAA,CACA,cAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,UAAA,CACA,iBAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,UAAA,CACA,cAAA,CACA,+BAAA,CACA,cAAA,CAGJ,0BACI,kBAAA,CAGJ,WACI,iBAAA,CACA,OAAA,CACA,OAAA,CACA,aAAA,CACA,kBAAA,CAGJ,mBACI,kBAAA,CACA,wBAAA,CACA,iBAAA,CACA,+CAAA,CACA,cAAA,CACA,iBAAA,CACA,cAAA,CACA,UAAA,CACA,SAAA,CACA,WAAA,CAGJ,yBACI,kBAAA,CAGJ,QACI,UAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CAIJ,yBACI,eACI,eAAA,CAGJ,mBACI,cAAA,CAGJ,oBACI,cAAA,CAAA",sourcesContent:["#quiz {\r\n    height: 100%;\r\n}\r\n\r\n.title-wrapper {\r\n    width: 90%;\r\n    text-align: center;\r\n    z-index: 1;\r\n    margin: 10px;\r\n}\r\n\r\n.select-number-cards-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    height: 50%;\r\n    width: 90%;\r\n    padding: 10px;\r\n}\r\n\r\n.select-number-card {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    flex-basis: 30%;\r\n    flex-grow: 1;\r\n    position: relative;\r\n    height: 30%;\r\n    margin: 5px;\r\n    text-align: center;\r\n    background: #4E5180;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    color: white;\r\n    font-size: 14px;\r\n    box-shadow: 5px 5px 15px #3B3E79;\r\n    max-width: 60px;\r\n}\r\n\r\n.select-number-card:hover {\r\n    background: #3B3E79;\r\n}\r\n\r\n.mark-sign {\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 5%;\r\n    color: #28a745;\r\n    font-weight: bolder;\r\n}\r\n\r\n#start-game-button {\r\n    align-items: center;\r\n    background-color: #4E5180;\r\n    border-radius: 8px;\r\n    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;\r\n    font-size: 14px;\r\n    padding: 13px 24px;\r\n    cursor: pointer;\r\n    color: white;\r\n    z-index: 1;\r\n    margin: 10px;\r\n}\r\n\r\n#start-game-button:hover {\r\n    background: #3B3E79;\r\n}\r\n\r\n#canvas {\r\n    opacity: 0.1;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/*big screen*/\r\n@media (min-width: 800px) {\r\n    .title-wrapper {\r\n        font-size: 2vmax;\r\n    }\r\n\r\n    #start-game-button {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .select-number-card {\r\n        font-size: 25px;\r\n    }\r\n}\r\n"],sourceRoot:""}]);const A=s}}]);
//# sourceMappingURL=47.fb9ebb50b322928691a4.bundle.js.map