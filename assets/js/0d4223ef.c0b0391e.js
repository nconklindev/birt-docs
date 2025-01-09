"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[221],{2985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"data-dictionary/standard-reports/index","title":"Standard Reports","description":"","source":"@site/docs/data-dictionary/standard-reports/index.mdx","sourceDirName":"data-dictionary/standard-reports","slug":"/data-dictionary/standard-reports/","permalink":"/birt-docs/docs/data-dictionary/standard-reports/","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/data-dictionary/standard-reports/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"dataDictionarySidebar","previous":{"title":"Workload - Planned Count","permalink":"/birt-docs/docs/data-dictionary/workload-planned-count"},"next":{"title":"Employee Hours by Job","permalink":"/birt-docs/docs/data-dictionary/standard-reports/employee-hours-by-job"}}');var s=r(4848),o=r(8453),a=r(3514);const i={},c="Standard Reports",l={},d=[];function u(e){const t={h1:"h1",header:"header",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"standard-reports",children:"Standard Reports"})}),"\n",(0,s.jsx)(a.A,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>y});r(6540);var n=r(4164),s=r(6972),o=r(8774),a=r(5846),i=r(6654),c=r(1312),l=r(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(4848);function m(e){let{href:t,children:r}=e;return(0,u.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),o&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.$S)();return(0,u.jsx)(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(g,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},5846:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(6540),s=r(4586);const o=["zero","one","two","few","many","other"];function a(e){return o.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}}}]);