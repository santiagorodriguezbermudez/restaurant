!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("hero-container"),t.classList.add("restaurant-picture");const n=document.createElement("h1");n.innerHTML="Mono's pizza";const r=document.createElement("h3");r.innerHTML="The best pizza in town. Come on in and grab a slice";const o=document.createElement("button");o.innerHTML="Book your table",o.classList.add("cta"),e.appendChild(t),t.appendChild(n),t.appendChild(r),t.appendChild(o)};var o=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("hero-container"),t.classList.add("menu-picture"),e.appendChild(t);const n=(e,t)=>{const n=document.createElement("div");return n.classList.add(e),t.appendChild(n),n},r=n("menu-section",t),o=n("menu-pizza",r),c=n("wrapper",r),a=n("menu-wine",c),i=n("menu-desert",c),d=(e,t,n,r)=>{document.createElement("h6").innerHTML=e;[...Array(n)].map(()=>`${r}....$${Math.floor(100*Math.random())}`).forEach(e=>{const n=document.createElement("p");n.innerHTML=e,t.appendChild(n)})};d("Our Pizza's",o,15,"Surprise Pizza Flavour"),d("Wines",a,13,"Surprise Wine"),d("Deserts",i,5,"Surprise Desert")};var c=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("hero-container"),t.classList.add("contact-picture");const n=document.createElement("h1");n.classList.add("contact-info"),n.innerHTML="Get in touch! Send us an email at mono@pizza.co",e.appendChild(t),t.appendChild(n)};(()=>{const e=document.querySelector("#navbar"),t=document.querySelector("#content"),n=document.createElement("ul");n.classList.add("list"),e.appendChild(n);const a=(e,r)=>{const o=document.createElement("li");o.classList.add("list-item"),n.appendChild(o);const c=document.createElement("a");c.innerHTML=e,o.appendChild(c),c.addEventListener("click",()=>{t.innerHTML="",r()})};a("Home",r),a("Menu",o),a("Contact",c)})(),r()}]);