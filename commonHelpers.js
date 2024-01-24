import{f as l,i as f}from"./assets/vendor-651d7991.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const n={btnStart:document.querySelector("[data-start]"),timerDays:document.querySelector("[data-days]"),timerHours:document.querySelector("[data-hours]"),timerMinutes:document.querySelector("[data-minutes]"),timerSeconds:document.querySelector("[data-seconds]")};n.btnStart.disabled=!0;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const r=new Date;t[0]-r>0?n.btnStart.disabled=!1:(n.btnStart.disabled=!0,f.error({message:"Please choose a date in the future",backgroundColor:"red",messageColor:"white",position:"topRight",maxWidth:"400px",iconUrl:"../img/cancel-circle.svg",iconColor:"grey",close:!1}))}};function y(t){const o=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:c,minutes:u,seconds:d}}function a(t){return String(t).padStart(2,0)}function h(){const t=g.selectedDates[0];timer=setInterval(()=>{const r=new Date,s=t-r;n.btnStart.disabled=!0,!(s<0)&&p(y(s))},1e3)}function p({days:t,hours:r,minutes:s,seconds:i}){n.timerDays.textContent=a(t),n.timerHours.textContent=a(r),n.timerMinutes.textContent=a(s),n.timerSeconds.textContent=a(i)}const g=l("#datetime-picker",m);n.btnStart.addEventListener("click",h);
//# sourceMappingURL=commonHelpers.js.map
