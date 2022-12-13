(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap);"]),i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Martian+Mono&display=swap);"]),i.push([e.id,":root{\n --primary : #F4ECD4;\n --black1 : rgb(56,53,44);\n --black2 :rgb(107,104,93);\n --orange: rgb(217,116,52);\n}\n\nbody {\n    color: var(--black1);\n    background-color: var(--primary);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin:0;\n    padding: 30px;\n    font-family: 'Inconsolata', monospace;\n  }\n\n.header{\n font-size: 28pt;\n margin-bottom: 5%;\n}\n\n.title{\n  font-weight: 300;\n  font-family: 'Martian Mono', monospace;\n  animation-name: float;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes float{\n  0%{\n    \n  }\n  50%{\n    transform: translateY(5px);\n  }\n  100%{\n   \n  }\n}\n.main{\n  display: flex;\n  gap: 200px;\n  }\n\n.grid-containerP{\nfont-weight: 700;\n}\n\n.grid-containerC{\nfont-weight: 700;\n}\n\n.player-title, .enemy-title{\n  padding-top: 20px;\n}\n\n.enemy-dec {\n  font-weight: 700;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 14pt;\n}\n.player-dec{\n  font-size: 14pt;\n  font-weight: 700;\n}\n\n\n\n#alert-box{\n  background-color: var(--black2);\n  padding: 20px 30px;\n  color:var(--orange);\n  position: absolute;\n  top: 30px;\n  left: 30px;\n  font-size: 16pt;\n  opacity: 0.9;\n  animation-name: fade-in;\n  animation-duration: 1s;\n  animation-iteration-count: 1;\n}\n\n@keyframes fade-in{\n  from{\n    left: -150px;\n  }\n  to{\n    left: 30px;\n  }\n}",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],s=o.base?c[0]+o.base:c[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=l,t.splice(l,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var c=o(e,r),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),l=n(565),c=n.n(l),s=n(216),d=n.n(s),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const y=document.querySelector(".main"),g=document.querySelector(".footer");let h=[],v=0;const x=function(e){if(e.target!==e.currentTarget){let t=e.target.id.substring(1,2),n=e.target.id.substring(2,3);" . "===h[t][n]&&v<17?(e.target.style.backgroundColor="white",h[t][n]=" s ",v++,document.querySelector("#alert-box").textContent="Place all your 17 ship to start!",17===v&&(document.querySelector("#alert-box").textContent="Game Start!")):" s "===h[t][n]&&(document.querySelector("#alert-box").textContent="You already hit the same spot!")}e.stopPropagation(),k()};let b=document.createElement("div");b.classList.add("player-dec");let C=document.createElement("div");C.classList.add("enemy-dec");let S=17;const k=function(){b.textContent=`Player Ship count: ${v}`,g.appendChild(b)},E=function(){let e=0,t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());" s "===h[t][n]?(e++,v--,document.querySelector(".player-dec").textContent="Player Ship left: "+v,h[t][n]=" x ",document.getElementById(`p${t}${n}`).style.backgroundColor="var(--orange)",(17===e||0===v)&&(document.querySelector("#alert-box").textContent=" all your ship is sunk , you Lose!")):" . "===h[t][n]?(h[t][n]=" x ",document.getElementById(`p${t}${n}`).style.backgroundColor="var(--black1)"):" x "===h[t][n]&&E()};let w=[],M=0;const T=function(e){if(e.target!==e.currentTarget){let t=e.target.id.substring(1,2),n=e.target.id.substring(2,3);" . "===w[t][n]?(e.target.style.backgroundColor="white",w[t][n]=" o ",document.querySelector("#alert-box").textContent="Game on!"):" o "===w[t][n]||" x "===w[t][n]?(document.querySelector("#alert-box").textContent="You already hit the same spot!",T()):(w[t][n]=" s ")&&(e.target.style.backgroundColor="var(--orange)",w[t][n]=" x ",M++,document.querySelector("#alert-box").textContent="You hit enemy ship!",S--,document.querySelector(".enemy-dec").textContent="Enemy Ship left:"+S,17===M&&(e.target.style.backgroundColor="red",w[t][n]=" x ",document.querySelector("#alert-box").textContent="You win! All enemy ship sink")),console.log(w),console.log("hit count: "+M)}e.stopPropagation(),setTimeout(E,1e3)};console.log("hello world212121"),function(e){const t=document.createElement("div");t.classList.add("grid-containerP"),t.style.display="grid",t.style.gridTemplateColumns="repeat(10,40px)",t.style.gridTemplateRows="repeat(10,40px)",y.appendChild(t);for(let e=0;e<10;e++)for(let n=0;n<10;n++){const o=document.createElement("div");o.id="p"+e+n,o.style.border="2px solid var(--primary)",o.style.backgroundColor="var(--black2)",t.appendChild(o)}const n=document.createElement("div");n.classList.add("player-title"),n.textContent="Player Board",t.appendChild(n)}(),function(e){for(let e=0;e<10;e++){h[e]=[" . "];for(let t=0;t<10;t++)h[e][t]=" . "}document.querySelector(".grid-containerP").addEventListener("click",x,!1),console.log(h)}(),function(e){const t=document.createElement("div");t.classList.add("grid-containerC"),t.style.display="grid",t.style.gridTemplateColumns="repeat(10,40px)",t.style.gridTemplateRows="repeat(10,40px)",y.appendChild(t);for(let e=0;e<10;e++)for(let n=0;n<10;n++){const o=document.createElement("div");o.id="g"+e+n,o.style.border="2px solid var(--primary)",o.style.backgroundColor="var(--black2)",t.appendChild(o)}const n=document.createElement("div");n.classList.add("enemy-title"),n.textContent="Enemy Board",t.appendChild(n)}(),function(e){for(let e=0;e<10;e++){w[e]=[" . "];for(let t=0;t<10;t++)w[e][t]=" . "}(function(){const e=function(e,t,n){for(let o=0;o<e;o++){let e=Math.floor(Math.random()*t),o=Math.floor(Math.random()*t);if(e>t-n)for(let t=0;t<n;t++)w[e-t][o]=" s ";else if(o>t-n)for(let t=0;t<n;t++)w[e][o-t]=" s ";else if(o<t-n)for(let t=0;t<n;t++)w[e][o+t]=" s ";else for(let t=0;t<n;t++)w[e+t][o]=" s "}};e(1,10,5),e(1,10,4),e(2,10,3),e(1,10,2),C.textContent=`Enemy Ship count: ${S}`,g.appendChild(C)})(),console.log(w),document.querySelector(".grid-containerC").addEventListener("click",T,!1)}()})()})();