/*! For license information please see 8ede9b3c.6abfdcf1.js.LICENSE.txt */
"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[3932],{2993:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"birt-studio/customizing-reports/sorting-data","title":"Sorting","description":"How to sort data in a custom report in BIRT Studio.","source":"@site/docs/birt-studio/02-customizing-reports/sorting-data.mdx","sourceDirName":"birt-studio/02-customizing-reports","slug":"/birt-studio/customizing-reports/sorting-data","permalink":"/birt-docs/docs/birt-studio/customizing-reports/sorting-data","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/birt-studio/02-customizing-reports/sorting-data.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Sorting","description":"How to sort data in a custom report in BIRT Studio.","sidebar_position":2},"sidebar":"birtStudioSidebar","previous":{"title":"Editing and Formatting","permalink":"/birt-docs/docs/birt-studio/customizing-reports/formatting-reports"},"next":{"title":"Grouping","permalink":"/birt-docs/docs/birt-studio/customizing-reports/grouping-data"}}');var r=t(4848),i=t(8453);const s=(0,t(4722).A)("MoveVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m8 18 4 4 4-4",key:"bh5tu3"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}]]),a={title:"Sorting",description:"How to sort data in a custom report in BIRT Studio.",sidebar_position:2},d=void 0,l={},c=[{value:"About Sorting Data",id:"about-sorting-data",level:2},{value:"Sorting on a Single Column",id:"sorting-on-a-single-column",level:2},{value:"Sorting on Multiple Columns",id:"sorting-on-multiple-columns",level:2},{value:"Advanced Sort",id:"advanced-sort",level:3}];function u(e){const o={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"about-sorting-data",children:"About Sorting Data"}),"\n",(0,r.jsx)(o.p,{children:"The data in a report can be sorted by any column and even multiple columns (up to 3). Read through this article for how\r\nto apply sorting to your report."}),"\n",(0,r.jsx)(o.h2,{id:"sorting-on-a-single-column",children:"Sorting on a Single Column"}),"\n",(0,r.jsxs)(o.p,{children:["To sort on a single ungrouped column, select the column and either right click and select ",(0,r.jsx)(o.em,{children:"Sort > Sort Ascending"})," or\r\n",(0,r.jsx)(o.em,{children:"Sort Descending"})," or hover over the ",(0,r.jsx)(s,{className:"icon"})," sort icon in the column header and select either\r\n",(0,r.jsx)(o.em,{children:"Sort Ascending"})," or ",(0,r.jsx)(o.em,{children:"Sort Descending"}),"."]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsxs)(o.p,{children:["If there are no groups, only one column can be sorted at a time. See\r\n",(0,r.jsx)(o.a,{href:"/docs/birt-studio/customizing-reports/grouping-data",children:"Grouping Data"})," for more information on how to create groups."]})}),"\n",(0,r.jsx)(o.h2,{id:"sorting-on-multiple-columns",children:"Sorting on Multiple Columns"}),"\n",(0,r.jsx)(o.p,{children:"A lot of times, you will want to sort on multiple columns. To sort on multiple columns, you need to either:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Have a single or multiple grouped columns and and at least one ungrouped column and apply the sort using the method\r\ndescribed in ",(0,r.jsx)(o.a,{href:"#sorting-on-a-single-column",children:"Sorting on a Single Column"})]}),"\n",(0,r.jsx)(o.li,{children:"Apply an Advanced Sort"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Grouped columns are treated separately from ungrouped columns. This means that if you have a grouped column and an\r\nungrouped column, you can sort on both of them. If you have multiple grouped columns, you can sort on all of them."}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsx)(o.p,{children:"Multiple grouped columns can be sorted, but they will be sorted in the order that they were grouped. For example, if you\r\nhave a Paycode Name and Employee Name group, and they appear in that order in the report, the sort applied to the\r\nPaycode Name takes precedence."})}),"\n",(0,r.jsx)(o.h3,{id:"advanced-sort",children:"Advanced Sort"}),"\n",(0,r.jsxs)(o.p,{children:["An Advanced Sort allows you to sort on multiple columns, even if you have no grouped columns. To apply an Advanced Sort,\r\nright click on a column and select ",(0,r.jsx)(o.em,{children:"Sort > Advanced Sort"}),". This will open the Advanced Sort dialog."]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsx)(o.p,{children:"The Advanced Sort dialog dropdown options will only show columns that are not grouped. If you have a grouped column, you\r\nwill need to remove the grouping to sort on that column."})}),"\n",(0,r.jsxs)(o.p,{children:["Start by selecting a ",(0,r.jsx)(o.em,{children:"Sort By"})," column and either ",(0,r.jsx)(o.em,{children:"Ascending"})," or ",(0,r.jsx)(o.em,{children:"Descending"})," order. To add multiple sorts, select one or\r\nmore ",(0,r.jsx)(o.em,{children:"Then By"})," sorts."]})]})}function m(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4722:(e,o,t)=>{t.d(o,{A:()=>a});var n=t(6540);const r=(...e)=>e.filter(((e,o,t)=>Boolean(e)&&t.indexOf(e)===o)).join(" ");var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,n.forwardRef)((({color:e="currentColor",size:o=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:d,iconNode:l,...c},u)=>(0,n.createElement)("svg",{ref:u,...i,width:o,height:o,stroke:e,strokeWidth:s?24*Number(t)/Number(o):t,className:r("lucide",a),...c},[...l.map((([e,o])=>(0,n.createElement)(e,o))),...Array.isArray(d)?d:[d]]))),a=(e,o)=>{const t=(0,n.forwardRef)((({className:t,...i},a)=>{return(0,n.createElement)(s,{ref:a,iconNode:o,className:r(`lucide-${d=e,d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,t),...i});var d}));return t.displayName=`${e}`,t}}}]);