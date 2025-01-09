/*! For license information please see 66f468d0.e8590197.js.LICENSE.txt */
"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[7391],{1378:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"birt-studio/advanced/relative-time-period-reports","title":"Creating Relative Time Period Reports","description":"How to utilize the \\"Relative Time Period\\" RDO feature and create a report using this RDO type","source":"@site/docs/birt-studio/03-advanced/relative-time-period-reports.mdx","sourceDirName":"birt-studio/03-advanced","slug":"/birt-studio/advanced/relative-time-period-reports","permalink":"/birt-docs/docs/birt-studio/advanced/relative-time-period-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/birt-studio/03-advanced/relative-time-period-reports.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Creating Relative Time Period Reports","description":"How to utilize the \\"Relative Time Period\\" RDO feature and create a report using this RDO type","sidebar_position":6},"sidebar":"birtStudioSidebar","previous":{"title":"Creating Crosstab Reports","permalink":"/birt-docs/docs/birt-studio/advanced/creating-crosstab-reports"},"next":{"title":"Creating Time Series Reports","permalink":"/birt-docs/docs/birt-studio/advanced/time-series-reports"}}');var o=i(4848),a=i(8453),n=i(590);const s={title:"Creating Relative Time Period Reports",description:'How to utilize the "Relative Time Period" RDO feature and create a report using this RDO type',sidebar_position:6},d=void 0,l={},c=[{value:"What is a Relative Time Period Report?",id:"what-is-a-relative-time-period-report",level:2},{value:"Creating the RDO",id:"creating-the-rdo",level:2},{value:"Configuring the RDO",id:"configuring-the-rdo",level:2},{value:"Example",id:"example",level:2}];function h(e){const t={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"what-is-a-relative-time-period-report",children:"What is a Relative Time Period Report?"}),"\n",(0,o.jsx)(t.p,{children:"The Relative time period support feature allows you to view and compare the data across multiple time periods within a\r\nsingle report. You can configure the relative time period options at the time of creating report data object. It allows\r\nusers to view and compare the data across different time periods within a single report."}),"\n",(0,o.jsx)(t.p,{children:"The \u201cRelative Time Period Support\u201d feature allows users to do following:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"View data for time period with reference to any symbolic time period or date range within a report. (E.g., View data\r\nfor 7 days before \u201cToday\u201d)"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Compare data across multiple time periods within a single report (e.g., compare current forecast week sales with last\r\nyear sales.)"}),"\n",(0,o.jsx)(t.h2,{id:"creating-the-rdo",children:"Creating the RDO"}),"\n",(0,o.jsxs)(t.p,{children:["Creating a Relative Time Period RDO starts the same way as the rest. Navigate to ",(0,o.jsx)(t.strong,{children:"Application Setup > Common Setup >\r\nReport Data Object Management"})," to start. Click the ",(0,o.jsx)(n.A,{className:"icon"})," Add button and select your desired\r\ntype."]}),"\n",(0,o.jsx)(t.p,{children:'On the "Create Report Data Objects" page, enter the following details:'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Report Data Object Key"}),"\n",(0,o.jsx)(t.li,{children:"Description (optional)"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'For the "Timeframe" option, select "Relative Time Period". Selecting this option will display additional fields for\r\nconfiguration.'}),"\n",(0,o.jsx)(t.h2,{id:"configuring-the-rdo",children:"Configuring the RDO"}),"\n",(0,o.jsx)(t.p,{children:'After selecting the "Relative Time Period" option, the following fields will be displayed for configuration:'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Relative Time Period Start Date Reference"}),": This is the reference date that is relative to the start date of the\r\nselected timeframe."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Relative Time Period End Date Reference"}),": This is the reference date that is relative to the end date of the\r\nselected timeframe."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'The following options are available for the "Relative Time Period Start Date Reference" and "Relative Time Period End\r\nDate Reference" fields:'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Week to Date Reference"}),"\n",(0,o.jsx)(t.li,{children:"Number of Days Before Selected Date"}),"\n",(0,o.jsx)(t.li,{children:"Number of Days After Selected Date"}),"\n",(0,o.jsx)(t.li,{children:"Number of Weeks Before Selected Date"}),"\n",(0,o.jsx)(t.li,{children:"Number of Weeks After Selected Date"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'After selecting one of these options for the "Relative Time Period Start Date Reference" and/or the "Relative Time\r\nPeriod End Date Reference" fields, you can enter the number of days or weeks to reference.'}),"\n",(0,o.jsx)(t.p,{children:'Once you have configured the RDO and added your desired columns, click the "Save" button to save the RDO.'}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"Let's say you want to create a report that shows employee hours for the last 7 days. You would configure the RDO as\r\nfollows:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Relative Time Period Start Date Reference"}),": Number of Days Before Selected Date = 7."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"You would leave the Relative Time Period End Date Reference blank, as you want to show the data for the last 7 days and\r\nin this case do not care about time before or after the end date."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4722:(e,t,i)=>{i.d(t,{A:()=>s});var r=i(6540);const o=(...e)=>e.filter(((e,t,i)=>Boolean(e)&&i.indexOf(e)===t)).join(" ");var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n=(0,r.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:s="",children:d,iconNode:l,...c},h)=>(0,r.createElement)("svg",{ref:h,...a,width:t,height:t,stroke:e,strokeWidth:n?24*Number(i)/Number(t):i,className:o("lucide",s),...c},[...l.map((([e,t])=>(0,r.createElement)(e,t))),...Array.isArray(d)?d:[d]]))),s=(e,t)=>{const i=(0,r.forwardRef)((({className:i,...a},s)=>{return(0,r.createElement)(n,{ref:s,iconNode:t,className:o(`lucide-${d=e,d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,i),...a});var d}));return i.displayName=`${e}`,i}},590:(e,t,i)=>{i.d(t,{A:()=>r});const r=(0,i(4722).A)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]])}}]);