(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=async(n,o,s=null)=>{try{const t=await fetch(n);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.text();document.getElementById(o).innerHTML=e,s&&await import(s)}catch(t){console.error(`Error loading ${n}:`,t)}};c("./1-gallery.html","gallery","./js/1-gallery.js");c("./2-form.html","form","./js/2-form.js");
//# sourceMappingURL=index.js.map