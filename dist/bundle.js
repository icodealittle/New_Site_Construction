(()=>{"use strict";var e={913:(e,t,n)=>{n.r(t)},966:()=>{},84:()=>{},156:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(913);const r=o(n(896)),i=document.getElementById("corgi-gif");i&&(i.src=r.default);const s=["សូមស្វាគមន៍!","ยินดีต้อนรับ!","ສະບາຍດີ!","Bienvenue!","환영합니다!","欢迎!","Chào mừng!","ようこそ!"],a=document.getElementById("welcome-text");let c=0;function d(){a&&(a.textContent=s[c],a.style.animation="fade-in 2s ease-in-out",c=(c+1)%s.length,setTimeout((()=>{a.style.animation=""}),2e3))}setInterval(d,2500);const l=document.getElementById("progress-loading"),u=document.getElementById("loading-screen");let m,g=0;function f(e){g=Math.min(g+e,100),l&&(l.textContent=`${g}%`,l.classList.add("animated"),setTimeout((()=>{l.classList.remove("animated")}),300)),100===g&&(clearInterval(m),u&&(u.classList.add("fade-out"),setTimeout((()=>{window.location.href="homepage.html"}),1e3)))}window.addEventListener("load",(()=>{m=window.setInterval((()=>{f(10)}),1e3),u&&u.addEventListener("click",(()=>{f(25)}))})),d(),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href");if(n){const e=document.querySelector(n);if(e){const t=60,n=e.getBoundingClientRect().top+window.pageYOffset-t;window.scrollTo({top:n,behavior:"smooth"})}}}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("more-content"),t=document.getElementById("read-more-btn");e&&t&&t.addEventListener("click",(()=>{e.classList.contains("hidden")?(e.classList.remove("hidden"),t.textContent="Read Less"):(e.classList.add("hidden"),t.textContent="Read More")}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".ux-tab"),t=document.querySelectorAll(".ux-content");e.forEach((n=>{n.addEventListener("click",(n=>{const o=n.currentTarget;if(!o||!o.dataset.target)return void console.error("Button or target ID is missing.");const r=o.dataset.target,i=document.getElementById(r);i?(t.forEach((e=>e.classList.add("hidden"))),i.classList.remove("hidden"),e.forEach((e=>e.classList.remove("active"))),o.classList.add("active")):console.error(`No element found with ID: ${r}`)}))}))}))},896:(e,t,n)=>{e.exports=n.p+"assets/image/loading-corgi.gif"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n(156),n(913),n(966),n(84)})();