/*! For license information please see 77b6a600.17a6e045.js.LICENSE.txt */
"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[5884],{4637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"birt-studio/advanced/time-series-reports","title":"Time Series Reports","description":"How to create time series reports in BIRT Studio.","source":"@site/docs/birt-studio/03-advanced/time-series-reports.mdx","sourceDirName":"birt-studio/03-advanced","slug":"/birt-studio/advanced/time-series-reports","permalink":"/birt-docs/docs/birt-studio/advanced/time-series-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/birt-studio/03-advanced/time-series-reports.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Time Series Reports","description":"How to create time series reports in BIRT Studio.","sidebar_position":6},"sidebar":"birtStudioSidebar","previous":{"title":"Creating Relative Time Period Reports","permalink":"/birt-docs/docs/birt-studio/advanced/relative-time-period-reports"},"next":{"title":"Creating Healthcare Analytics Reports","permalink":"/birt-docs/docs/birt-studio/advanced/creating-hca-reports"}}');var s=r(4848),n=r(8453);const a=(0,r(4722).A)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),o={title:"Time Series Reports",description:"How to create time series reports in BIRT Studio.",sidebar_position:6},d=void 0,c={},l=[{value:"What Are Time Series Reports?",id:"what-are-time-series-reports",level:2},{value:"Creating a Time Series Report",id:"creating-a-time-series-report",level:2},{value:"Creating the Report Data Object",id:"creating-the-report-data-object",level:3},{value:"Creating the Report",id:"creating-the-report",level:3}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"what-are-time-series-reports",children:"What Are Time Series Reports?"}),"\n",(0,s.jsx)(t.p,{children:"Time Series reports allow managers to create reports that summarize Analytics data over a period of time. This can be useful for tracking trends, identifying patterns, and making predictions based on historical data. Data can be summarized by day, week, month, or quarter. Time Series reports are supported in for both employee based and business structure based reports."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"The only entity that can be used to provide data for a Time Series report is the Analytics entity. It can be used with Employee Details and Employee Skill Assignment, but no other entities will appear when adding columns."})}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-time-series-report",children:"Creating a Time Series Report"}),"\n",(0,s.jsx)(t.h3,{id:"creating-the-report-data-object",children:"Creating the Report Data Object"}),"\n",(0,s.jsxs)(t.p,{children:["Creating a Time Series RDO starts the same way as the rest. Navigate to ",(0,s.jsx)(t.strong,{children:"Application Setup > Common Setup > Report Data Object Management"})," to start. Click the ",(0,s.jsx)(a,{className:"icon"}),' Add button and select your desired type, either "Employee - Time Series" or "Business Structure - Time Series".']}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Work Unit/HCA reports are beyond the scope of what is provided in this article. They are a little more complicated than an employee or business structure time series report. For more information on creating HCA reports, please see ",(0,s.jsx)(t.a,{href:"/docs/birt-studio/advanced/creating-hca-reports",children:"here"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:'The only difference in the new opened page compared to a standard RDO is that a Time Series RDO contains two additional dropdowns; "Time Increment" and "Time Increment Format". Both of these dropdowns are required and by default are set to "Calendar Day" and "Day of Week".'}),"\n",(0,s.jsx)(t.p,{children:"Each Time Increment has different available options for the format."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Calendar Day"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Date"}),"\n",(0,s.jsx)(t.li,{children:"Day of Week"}),"\n",(0,s.jsx)(t.li,{children:"Day of Week + Date (e.g. Wednesday 12/04/2024)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Calendar Month"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Date Range"}),"\n",(0,s.jsx)(t.li,{children:"Month + Date Range"}),"\n",(0,s.jsx)(t.li,{children:"Month Name"}),"\n",(0,s.jsx)(t.li,{children:"Month Short Name"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Calendar Quarter"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Date Range"}),"\n",(0,s.jsx)(t.li,{children:"Quarter Number"}),"\n",(0,s.jsx)(t.li,{children:"Quarter Number + Date Range"}),"\n",(0,s.jsx)(t.li,{children:"Quarter Short Number"}),"\n",(0,s.jsx)(t.li,{children:"Quarter Short Number + Date Range"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Calendar Week"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Date Range"}),"\n",(0,s.jsx)(t.li,{children:"Week Number"}),"\n",(0,s.jsx)(t.li,{children:"Week Number + Date Range"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"creating-the-report",children:"Creating the Report"}),"\n",(0,s.jsxs)(t.p,{children:["To create the report that uses the newly created Time Series RDO, the steps are the same as other custom reports. If you need the steps to do this, please see ",(0,s.jsx)(t.a,{href:"/docs/birt-studio/getting-started#creating-report-design",children:"this"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4722:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(6540);const s=(...e)=>e.filter(((e,t,r)=>Boolean(e)&&r.indexOf(e)===t)).join(" ");var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const a=(0,i.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:o="",children:d,iconNode:c,...l},h)=>(0,i.createElement)("svg",{ref:h,...n,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:s("lucide",o),...l},[...c.map((([e,t])=>(0,i.createElement)(e,t))),...Array.isArray(d)?d:[d]]))),o=(e,t)=>{const r=(0,i.forwardRef)((({className:r,...n},o)=>{return(0,i.createElement)(a,{ref:o,iconNode:t,className:s(`lucide-${d=e,d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...n});var d}));return r.displayName=`${e}`,r}}}]);