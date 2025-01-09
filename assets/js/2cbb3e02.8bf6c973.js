"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[2504],{8581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>q,contentTitle:()=>W,default:()=>B,frontMatter:()=>N,metadata:()=>n,toc:()=>P});const n=JSON.parse('{"id":"birt-studio/creating-cases","title":"Creating a Support Case","description":"Recommended information on how to create a Support case regarding creating a custom report or troubleshooting a custom report","source":"@site/docs/birt-studio/08-creating-cases.mdx","sourceDirName":"birt-studio","slug":"/birt-studio/creating-cases","permalink":"/birt-docs/docs/birt-studio/creating-cases","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/birt-studio/08-creating-cases.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Creating a Support Case","description":"Recommended information on how to create a Support case regarding creating a custom report or troubleshooting a custom report"},"sidebar":"birtStudioSidebar","previous":{"title":"Report Cookbook","permalink":"/birt-docs/docs/birt-studio/report-cookbook"},"next":{"title":"FAQ","permalink":"/birt-docs/docs/birt-studio/faq"}}');var s=r(4848),o=r(8453),i=r(6540),a=r(4164),l=r(3104),u=r(6347),c=r(205),d=r(7485),p=r(1682),h=r(679);function m(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,p.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=b(e),[o,a]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,u]=g({queryString:r,groupId:n}),[d,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,h.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),m=(()=>{const e=l??d;return f({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{m&&a(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var j=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),s=i[r].value;s!==n&&(c(t),o(s))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:p,onClick:d,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function I(e){const t=x(e);return(0,s.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,s.jsx)(y,{...t,...e}),(0,s.jsx)(w,{...t,...e})]})}function S(e){const t=(0,j.A)();return(0,s.jsx)(I,{...e,children:m(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function R(e){let{children:t,hidden:r,className:n}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(k.tabItem,n),hidden:r,children:t})}function T(e){const t={a:"a",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"If you are in need of a new custom report and would like to see if Support can build it for you, use this template."}),"\n",(0,s.jsx)(t.p,{children:"Please note that not every report request will be possible within BIRT Studio. Support will do the best they can"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Description:"})," What is the report supposed to do? A detailed description here can often make up for not knowing\r\nexactly what columns you need included."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Desired Columns"}),": What columns from the ",(0,s.jsx)(t.a,{href:"/docs/data-dictionary/getting-started",children:"Data Dictionary"})," do you need? If you\r\ndo not know, a bulleted list or description of the data that needs to be returned helps."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Additional Information"}),": Anything else you'd like to include that will help Support work with you on this report."]})]})}function C(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(T,{...e})}):T(e)}function V(e){const t={p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"If you are experiencing issues while building a custom report inside BIRT Studio, use this template."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Description"}),": What is the issue?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Environment"}),": Which environment is the issue occurring in (PRD, UAT, TST)?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Report Name"}),": What is the report name?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Published/Unpublished"}),": Is the report published or unpublished?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Who Can Reproduce?"}),": Can anyone reproduce the issue? Provide an Employee ID or two if multiple users can reproduce."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Steps to Reproduce"}),": What are the full steps to reproduce the issue?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Parameters"}),": What timeframe and Hyperfind (or other options) are being selected and the issue occurs for? If the\r\nissue occurs for multiple, please state that but also provide a set of parameters that can be used to test the issue."]})]})}function A(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(V,{...e})}):V(e)}function E(e){const t={li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"If you are experiencing other issues related to reporting that you need assistance with and the other templates do not\r\nprovide all the necessary information, please use this template."}),"\n",(0,s.jsx)(t.p,{children:"This template could cover:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Report errors (generic)"}),"\n",(0,s.jsx)(t.li,{children:"Issues with a Custom Read-Only report"}),"\n",(0,s.jsx)(t.li,{children:"Issues with scheduled reporting jobs"}),"\n",(0,s.jsx)(t.li,{children:"Issues with adhoc reporting jobs (errors, failures, etc.)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Issue Description"}),": What is happening? Be as descriptive as possible"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Environment"}),": Which environment is the issue occurring in?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Report Name"}),": What is the report name?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Custom Read-Only?"}),": yes/no"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Who Can Reproduce?"}),": Can anyone reproduce the issue? Provide an Employee ID or two if multiple users can reproduce."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Steps to Reproduce"}),": What are the full steps to reproduce the issue?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Parameters"}),": What timeframe and Hyperfind (or other options) are being selected and the issue occurs for? If the\r\nissue occurs for multiple, please state that but also provide a set of parameters that can be used to test the issue."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Example Employee(s)"}),": Please provide an example employee or two that can be used for review of your issue."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Expected Behavior"}),": What do you expect the report to do? This helps us identify potential discrepancies between\r\nexpectations and report behavior."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Additional Information"}),": Please provide anything else you can think of that would assist Support with this case."]})]})}function D(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(E,{...e})}):E(e)}const N={title:"Creating a Support Case",description:"Recommended information on how to create a Support case regarding creating a custom report or troubleshooting a custom report"},W=void 0,q={},P=[{value:"Introduction",id:"introduction",level:2},{value:"Template",id:"template",level:2}];function _(e){const t={admonition:"admonition",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"This article will review the recommended information to provide to Support when creating a Support case regarding BIRT\r\nStudio or troubleshooting a report. The information will be provided in a template style that will be easy to copy from\r\nthis site or the page source and into a new case. Tabs are provided to switch between the provided templates for your\r\nspecific situation and can be linked to share with others."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"When copying the information from the provided template, Support only needs your responses to the bolded item. Please\r\ndelete the provided description of the item when submitting a case. If something is not applicable to your case, please\r\nput N/A."})}),"\n",(0,s.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,s.jsxs)(S,{defaultValue:"new-report",groupId:"support-template",queryString:!0,children:[(0,s.jsx)(R,{value:"new-report",label:"New Report Request",children:(0,s.jsx)(C,{})}),(0,s.jsx)(R,{value:"birt-studio",label:"BIRT Studio",children:(0,s.jsx)(A,{})}),(0,s.jsx)(R,{value:"troubleshooting",label:"Troubleshooting",children:(0,s.jsx)(D,{})})]})]})}function B(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}}}]);