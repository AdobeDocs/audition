"use strict";(self.webpackChunkaudition=self.webpackChunkaudition||[]).push([[141],{62545:function(e,t,s){s.d(t,{i:function(){return k}});var a=s(15785),i=s(64572),r=s(15007),n=s(95223),l=s(63184),c=s(18870),o=s(46085),d=s(40590),m=s(158);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}const p=[{title:"Last updated",value:"last_updated",filter:e=>e.sort(((e,t)=>{let{lastUpdated:s}=e,{lastUpdated:a}=t;return new Date(a)>new Date(s)?1:new Date(a)<new Date(s)?-1:0}))},{title:"Name",value:"name",filter:e=>e.sort(((e,t)=>{let{name:s}=e,{name:a}=t;return s.localeCompare(a)}))},{title:"Custom",value:"id",filter:function(e,t){void 0===t&&(t=[]);const s=[];return t.forEach((t=>{const a=e.find((e=>{let{id:s}=e;return s===t}));a&&s.push(a)})),s}}];var v={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},g={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},f={name:"jfisvt",styles:"height:auto;margin-bottom:0!important"},y={name:"lb9ais",styles:"font-size:var(--spectrum-global-dimension-size-200)"},b={name:"18q6r0i",styles:"margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-100)!important"},h={name:"4iuuc6",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-bottom:var(--spectrum-global-dimension-size-200)"},w={name:"1b40y0w",styles:"height:var(--spectrum-global-dimension-size-3000);overflow:auto;text-align:left"},x={name:"82a6rk",styles:"flex:1"},Z={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},z={name:"16hp6jg",styles:"margin-top:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column"},j={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},O={name:"1e17bzi",styles:"display:flex;align-items:flex-start;flex-direction:column"},C={name:"wyj2j9",styles:"display:flex;align-items:flex-end;width:var(--spectrum-global-dimension-size-3000);flex-direction:column"},N={name:"1xl5zih",styles:"display:flex;align-items:center;height:var(--spectrum-global-dimension-size-800);justify-content:flex-end;margin-right:var(--spectrum-global-dimension-size-400)"};const k=e=>{let{clouds:t=[],products:s=[],interaction:k=!1,orderBy:D="last_updated",filterByCloud:P=[],filterByIds:S=[]}=e;S.length&&(D="id");const A=p.find((e=>{let{value:t}=e;return t===D}));A.ids=S;const{0:B,1:E}=(0,r.useState)(A.value),{0:H,1:X}=(0,r.useState)(A.filter(s,A.ids)),{0:q,1:F}=(0,r.useState)(P);(0,r.useEffect)((()=>{((e,t,s,a)=>{const i=e.filter((e=>{let{cloud:s}=e;return t.some((e=>s===e))})),r=p.find((e=>{let{value:t}=e;return t===s}));a(r.filter(i,r.ids))})(s,q.length?q:t,B,X)}),[q,B]);const I="calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-500))",L="calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-800))";return(0,n.tZ)("section",{className:"spectrum--light",css:(0,n.iv)("max-width:",m.Av,";margin:var(--spectrum-global-dimension-size-400) auto;","")},k&&(0,n.tZ)("div",{css:N},(0,n.tZ)(o.c,{isQuiet:!0,items:p.slice(0,2).map((e=>e.value===D?function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){(0,i.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({selected:!0},e):e)),"aria-label":"Filter by name or last updated product",onChange:e=>{E(p[e].value)}})),(0,n.tZ)("div",{css:(0,n.iv)("display:flex;@media screen and (max-width: ",m.Av,"){align-items:flex-start;flex-wrap:wrap;}","")},k&&(0,n.tZ)("div",{css:C},(0,n.tZ)("div",{css:O},(0,n.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:j},"Filter by"),(0,n.tZ)("div",{css:z},t.map(((e,t)=>(0,n.tZ)(c.X,{key:t,value:e,onChange:t=>{F(t?[].concat((0,a.Z)(q),[e]):q.filter((t=>t!==e)))},css:Z},e)))))),(0,n.tZ)("div",{css:x},(0,n.tZ)("div",{css:(0,n.iv)("display:grid;grid-template-columns:repeat(auto-fit, ",L,");grid-auto-rows:",I,";justify-content:center;gap:var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",m.Av,"){margin-top:var(--spectrum-global-dimension-size-400);display:flex;flex-wrap:wrap;}","")},H.map((e=>(0,n.tZ)("div",{key:e.id,role:"figure",tabIndex:"0",className:"spectrum-Card spectrum-Card--sizeM",css:(0,n.iv)("width:",L,";height:",I,";&:hover{border-color:var(--spectrum-global-color-gray-200);}@media screen and (max-width: ",m.Av,"){width:0;}","")},(0,n.tZ)("div",{className:"spectrum-Card-body",css:w},(0,n.tZ)("div",null,e.icon&&(0,n.tZ)("div",{css:h},(0,n.tZ)(d.E,{src:e.icon,"aria-hidden":"true",alt:""}))),(0,n.tZ)("div",{className:"spectrum-Card-header spectrum-Heading spectrum-Heading--sizeXXS",css:b},(0,n.tZ)("div",{className:"spectrum-Card-title",css:y},(0,n.tZ)("strong",null,e.name))),(0,n.tZ)("div",{className:"spectrum-Card-content spectrum-Body spectrum-Body--sizeS",css:f},e.description)),(0,n.tZ)("div",{className:"spectrum-Card-footer"},(0,n.tZ)("div",{css:(0,n.iv)("display:flex;justify-content:flex-end;flex-wrap:wrap;--gap:var(--spectrum-global-dimension-size-200);margin:calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));width:calc(100% + var(--gap));@media screen and (max-width: ",m.Av,"){justify-content:center;}","")},e.discover&&(0,n.tZ)("div",{css:g},(0,n.tZ)(l.A,{href:e.discover,variant:"secondary",style:"outline"},(0,n.tZ)("span",{class:"spectrum-Button-label"},"Learn more"))),e.docs&&(0,n.tZ)("div",{css:v},(0,n.tZ)(l.A,{href:e.docs,variant:"accent",style:"outline"},(0,n.tZ)("span",{class:"spectrum-Button-label"},"View docs"))))))))))))}}}]);
//# sourceMappingURL=490477d6-847bee068eef7ec23ecc.js.map