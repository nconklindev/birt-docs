"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[4402],{7821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"birt-studio/troubleshooting/index","title":"Troubleshooting","description":"The troubleshooting articles provided here are possible solutions to common problems that arise when building custom reports. We have provided an article for all of the different parts of report building.","source":"@site/docs/birt-studio/04-troubleshooting/index.mdx","sourceDirName":"birt-studio/04-troubleshooting","slug":"/birt-studio/troubleshooting/","permalink":"/birt-docs/docs/birt-studio/troubleshooting/","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/birt-studio/04-troubleshooting/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"birtStudioSidebar","previous":{"title":"Creating Healthcare Analytics Reports","permalink":"/birt-docs/docs/birt-studio/advanced/creating-hca-reports"},"next":{"title":"Reporting","permalink":"/birt-docs/docs/birt-studio/troubleshooting/report-failures"}}');var n=r(4848),i=r(8453),s=r(3514);const l={},c="Troubleshooting",a={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,n.jsx)(t.p,{children:"The troubleshooting articles provided here are possible solutions to common problems that arise when building custom reports. We have provided an article for all of the different parts of report building."}),"\n",(0,n.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>x});r(6540);var o=r(4164),n=r(4718),i=r(8774),s=r(5846),l=r(6654),c=r(1312),a=r(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(4848);function h(e){let{href:t,children:r}=e;return(0,d.jsx)(i.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:n,description:i}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:n,children:[r," ",n]}),i&&(0,d.jsx)("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const r=(0,n.Nr)(t),o=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,n.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,n.$S)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(b,{...e});const i=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,o.A)("row",r),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},5846:(e,t,r)=>{r.d(t,{W:()=>a});var o=r(6540),n=r(4586);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const o=e.split("|");if(1===o.length)return o[0];o.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const n=r.select(t),i=r.pluralForms.indexOf(n);return o[Math.min(i,o.length-1)]}(r,t,e)}}}}]);