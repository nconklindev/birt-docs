"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[7521],{4058:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"birt-studio/best-practices","title":"Best Practices","description":"A list of best practices that have been developed by report SMEs within Support and will help when building custom reports.","source":"@site/docs/birt-studio/06-best-practices.md","sourceDirName":"birt-studio","slug":"/birt-studio/best-practices","permalink":"/birt-docs/docs/birt-studio/best-practices","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/birt-studio/06-best-practices.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Best Practices","description":"A list of best practices that have been developed by report SMEs within Support and will help when building custom reports."},"sidebar":"birtStudioSidebar","previous":{"title":"Report Cookbook","permalink":"/birt-docs/docs/birt-studio/report-cookbook"},"next":{"title":"FAQ","permalink":"/birt-docs/docs/birt-studio/faq"}}');var o=s(4848),n=s(8453);const r={title:"Best Practices",description:"A list of best practices that have been developed by report SMEs within Support and will help when building custom reports."},a="Best Practices",l={},c=[{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Each Report Data Object Has a Purpose",id:"each-report-data-object-has-a-purpose",level:2},{value:"Think of the Employees!",id:"think-of-the-employees",level:2}];function d(e){const t={admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"best-practices",children:"Best Practices"})}),"\n",(0,o.jsx)(t.p,{children:"These are a list of best practices that have been developed by report SMEs within Support and will help when building custom reports."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"None of these are a must, but not following some of these have been known to cause issues with reports or add to report development time due to confusion, unclear namings or other reason."})}),"\n",(0,o.jsx)(t.h2,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,o.jsxs)(t.p,{children:["When naming your report, it is best to follow a standard naming convention. Typically we recommend naming reports in ",(0,o.jsx)(t.strong,{children:"PascalCase"})," or ",(0,o.jsx)(t.strong,{children:"camelCase"}),". This will help you and others understand what the report is for and what it does. Here are some examples of what would be considered good naming conventions:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"EmployeeHoursByJob"}),"\n",(0,o.jsx)(t.li,{children:"EmployeeHoursByJobAndDate"}),"\n",(0,o.jsx)(t.li,{children:"PunchDetailReport"}),"\n",(0,o.jsx)(t.li,{children:"TimecardAudit"}),"\n",(0,o.jsx)(t.li,{children:"EmployeeActivityHours"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"each-report-data-object-has-a-purpose",children:"Each Report Data Object Has a Purpose"}),"\n",(0,o.jsxs)(t.p,{children:["A Report Data Object (RDO) should be used in at most one report and only one report. The idea is that an RDO should contain ",(0,o.jsx)(t.em,{children:"only"})," the exact number of columns that a single report needs. This helps prevent any future issues or conflicts that may come up if the RDO was to be used in multiple reports. This also helps keep runtimes down in reports that do not make use of all of the columns. This is because even when a column is added into an RDO but not used in the report design, the data is still requested when the report is run, which can increase the runtime of the report."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"This rule can be broken in cases where multiple reports make use of all (or most) of the columns in the RDO, but we don't suggest using the RDO in reports where this is not the case."})}),"\n",(0,o.jsx)(t.h2,{id:"think-of-the-employees",children:"Think of the Employees!"}),"\n",(0,o.jsxs)(t.p,{children:["When creating an Employee based RDO, it is best practice to add ",(0,o.jsx)(t.em,{children:"at least"})," one column from the ",(0,o.jsx)(t.strong,{children:"Employee Details"})," entity first. This will set the relationship rules so that only those entities that relate to ",(0,o.jsx)(t.strong,{children:"Employee Details"})," can be added. This keeps the RDO conforming to column relationship rules and ensures your report will not have any issues due to the configuration of the RDO."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);