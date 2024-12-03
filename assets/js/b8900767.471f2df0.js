/*! For license information please see b8900767.471f2df0.js.LICENSE.txt */
"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[8900],{2493:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"birt-studio/customizing-reports/filtering","title":"Filtering","description":"How to apply filters to reports in BIRT Studio.","source":"@site/docs/birt-studio/02-customizing-reports/filtering.mdx","sourceDirName":"birt-studio/02-customizing-reports","slug":"/birt-studio/customizing-reports/filtering","permalink":"/birt-docs/docs/birt-studio/customizing-reports/filtering","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/birt-studio/02-customizing-reports/filtering.mdx","tags":[],"version":"current","frontMatter":{"title":"Filtering","description":"How to apply filters to reports in BIRT Studio."},"sidebar":"birtStudioSidebar","previous":{"title":"Aggregating","permalink":"/birt-docs/docs/birt-studio/customizing-reports/aggregating"},"next":{"title":"Modifying Standard Reports","permalink":"/birt-docs/docs/birt-studio/customizing-reports/modifying-standard-reports"}}');var n=i(4848),s=i(8453),l=i(5627);const o={title:"Filtering",description:"How to apply filters to reports in BIRT Studio."},d=void 0,a={},h=[{value:"About Report Filtering",id:"about-report-filtering",level:2},{value:"Filter Conditions",id:"filter-conditions",level:2},{value:"Adding Filters to a Report",id:"adding-filters-to-a-report",level:2},{value:"Single Filter",id:"single-filter",level:3},{value:"Multiple Filters",id:"multiple-filters",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"about-report-filtering",children:"About Report Filtering"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes the report you create needs only specific data to appear. This is where adding report filters comes in. In BIRT Studio, you have the ability to apply a filter to any column using a variety of conditions and even apply multiple conditions to a single column and multiple filters to a single report. For example, let's say you make a report that returns the hours worked by employee by paycode by date. It looks good but you'd like to only see a specific Pay Code or Pay Codes. That can easily be done by applying a filter to the Paycode column."}),"\n",(0,n.jsx)(t.p,{children:"Applying filters to reports not only helps you get the data that you want but it also increases performance and can increase processing speed when run. Limiting the number of data rows that are returned to the report can help reduce the amount of time it takes to run the report."}),"\n",(0,n.jsx)(t.h2,{id:"filter-conditions",children:"Filter Conditions"}),"\n",(0,n.jsx)(t.p,{children:"When applying a filter to a column, there are numerous conditions to choose from. The condition you apply will depend on what you are wanting to do. The available conditions are available in the table below."}),"\n",(0,n.jsx)("div",{children:(0,n.jsxs)("table",{className:"hover-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Condition"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{children:"Notes"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Between"}),(0,n.jsx)("td",{children:"Applies the filter to what is between two values"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Typically used with numerical data but can be used for dates and times\r\nas well"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Equal to"}),(0,n.jsx)("td",{children:"Applies the filter that is equal to what is set"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Greater than"}),(0,n.jsx)("td",{children:"Applies the filter that is greater than the specified value"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Greater than or Equal"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Applies the filter that is greater than or equal to the specified\r\nvalue"})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"In"}),(0,n.jsx)("td",{children:"Applies the filter that is in the specified list"}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Enter values in the ",(0,n.jsx)("em",{children:"Enter value(s)"})," field and click ",(0,n.jsx)("em",{children:"Add Value(s)"})," when done"]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Is Not Null"}),(0,n.jsx)("td",{children:"Applies the filter that is not null"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Is Null"}),(0,n.jsx)("td",{children:"Applies the filter that is null"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Less than"}),(0,n.jsx)("td",{children:"Applies the filter that is less than the specified value"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Less than or Equal"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Applies the filter that is less than or equal to the specified value"})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Like"}),(0,n.jsx)("td",{children:"Applies the filter that is like the specified value"}),(0,n.jsxs)("td",{children:["Use the Wildcard character ",(0,n.jsx)(t.code,{children:"%"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Match"}),(0,n.jsx)("td",{children:"Applies the filter that matches the value"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Not Between"}),(0,n.jsx)("td",{children:"Applies the filter that is not between the specified values"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Typically used with numerical data but can be used for dates and times\r\nas well"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Not Equal to"}),(0,n.jsx)("td",{children:"Applies the filter that is not equal to the specified value"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Not In"}),(0,n.jsx)("td",{children:"Applies the filter that is not in the specified list"}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Enter values in the ",(0,n.jsx)("em",{children:"Enter value(s)"})," field and click"," ","\r\n",(0,n.jsx)("em",{children:"Add Value(s)"})," when done"]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Not Like"}),(0,n.jsx)("td",{children:"Applies the filter that is not like the specified value"}),(0,n.jsxs)("td",{children:["Use the Wildcard character ",(0,n.jsx)(t.code,{children:"%"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Not Match"}),(0,n.jsx)("td",{children:"Applies the filter that does not match the specified value"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Is False"}),(0,n.jsx)("td",{children:"Applies the filter for when the value is false"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Is True"}),(0,n.jsx)("td",{children:"Applies the filter for when the value is true"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Top Percent"}),(0,n.jsx)("td",{children:"Applies the filter for the specified top percent specified."}),(0,n.jsx)("td",{children:"Can be filtered on the entire table, or a specific group"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Top n"}),(0,n.jsx)("td",{children:"Applies the filter for the top number of items specified (n)"}),(0,n.jsx)("td",{children:"Can be filtered on the entire table, or a specific group"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Bottom Percent"}),(0,n.jsx)("td",{children:"Applies the filter for the specified bottom percent specified."}),(0,n.jsx)("td",{children:"Can be filtered on the entire table, or a specific group"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Bottom n"}),(0,n.jsx)("td",{children:"Applies the filter for the bottom number of items specified (n)"}),(0,n.jsx)("td",{children:"Can be filtered on the entire table, or a specific group"})]})]})]})}),"\n",(0,n.jsx)(t.p,{children:"When applying any of the above conditions, there are three options to pick from:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Specify literal value"}),"\n",(0,n.jsx)(t.li,{children:"Use value from data field"}),"\n",(0,n.jsx)(t.li,{children:"Link to parameter"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Link to parameter"})," option is covered in a different article. See ",(0,n.jsx)(t.a,{href:"/docs/birt-studio/advanced/custom-report-parameters",children:"Custom Report Parameters"})," for more information."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Specify literal value"})," - This option allows you to specify a value that will be used in the filter. For example, if you want to filter the Pay Code column to only show the value of ",(0,n.jsx)(t.strong,{children:"REG"}),", you would select this option and then type ",(0,n.jsx)(t.strong,{children:"REG"})," in the text box."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Use value from data field"})," - This option allows you to compare the data from each row with the value from a specified data field."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Use value from data field"})," option may not work for all conditions or columns. If an error is encountered after trying to apply a filter using this option, try using the ",(0,n.jsx)(t.em,{children:"Specify literal value"})," option instead."]})}),"\n",(0,n.jsx)(t.h2,{id:"adding-filters-to-a-report",children:"Adding Filters to a Report"}),"\n",(0,n.jsxs)(t.p,{children:["To add a filter to a report, start by clicking a column header to select it. You will know it is selected when the column has a dark blue border around the entire column. Once selected, the ",(0,n.jsx)(l.A,{className:"icon"})," ",(0,n.jsx)(t.strong,{children:"Filter"})," icon will appear in the table toolbar above the report. Click it to begin adding a filter and open the ",(0,n.jsx)(t.strong,{children:"Filter"})," window."]}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Advanced Filter"})," link to be taken to the ",(0,n.jsx)(t.strong,{children:"Advanced Filter"})," window. This window allows you to apply multiple filters to a single column. See ",(0,n.jsx)(t.a,{href:"#multiple-filters",children:"Multiple Filters"})," for more information."]}),"\n",(0,n.jsx)(t.h3,{id:"single-filter",children:"Single Filter"}),"\n",(0,n.jsxs)(t.p,{children:["To add a single filter to the report, select your ",(0,n.jsx)(t.em,{children:"Filter By"})," column in the ",(0,n.jsx)(t.strong,{children:"Advanced Filter"})," window and your desired ",(0,n.jsx)(t.em,{children:"Condition"})," from above. If using ",(0,n.jsx)(t.em,{children:"Specify literal condition"}),", enter the condition into the ",(0,n.jsx)(t.em,{children:"Default value"})," field. If using ",(0,n.jsx)(t.em,{children:"Use value from data field"}),", select the data field from the ",(0,n.jsx)(t.em,{children:"Data field"})," dropdown. Click the ",(0,n.jsx)(t.em,{children:"Add Condition"})," link to add the condition, then the ",(0,n.jsx)(t.em,{children:"Add Filter"})," link to add the filter to the report. Click ",(0,n.jsx)(t.strong,{children:"OK"})," when done making changes to add the filter."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:['After saving changes to your filter, the report may update and display no data with a dialog box that states "The sample data does not meet the filter conditions. To design the report, increase max rows setting or remove the filters. Then recreate filters or move filters on data set before publishing the report design". If the filter you applied is correct, then this can be ignored. The default timeframe when designing a report is Today-Today with a Hyperfind of All Home Locations. If you are sure that there should be data showing in view, then preview the report by clicking the ',(0,n.jsx)("div",{className:"youtube-icon"})," ",(0,n.jsx)(t.strong,{children:"Preview"})," icon in the navigation menu at the top of the window."]})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["When using ",(0,n.jsx)(t.em,{children:"Use value from data field"}),", depending on the condition you select, you may have additional options to choose from. For example, if you select ",(0,n.jsx)(t.em,{children:"Between"}),", you will have two additional fields to enter values into."]})}),"\n",(0,n.jsx)(t.h3,{id:"multiple-filters",children:"Multiple Filters"}),"\n",(0,n.jsxs)(t.p,{children:["Multiple filters on one column can also be applied through one condition. To apply two or more filters as a condition, perform the steps to apply the first filter and click the ",(0,n.jsx)(t.em,{children:"Add Condition"})," link."]}),"\n",(0,n.jsxs)(t.p,{children:["Before clicking ",(0,n.jsx)(t.em,{children:"Add Filter"}),", select the same or another column from the ",(0,n.jsx)(t.em,{children:"Filter By"})," dropdown and select a ",(0,n.jsx)(t.em,{children:"Condition"})," from the dropdown. Enter the literal value or use values from data fields and click ",(0,n.jsx)(t.em,{children:"Add Condition"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, the ",(0,n.jsx)(t.em,{children:"Conditions"})," text area will display the two conditions together, joined with an ",(0,n.jsx)(t.strong,{children:"AND"}),". This follows standard computer logic where ",(0,n.jsx)(t.em,{children:"both"})," conditions must be met for the filter to be applied. If you want to change the logic to an ",(0,n.jsx)(t.strong,{children:"OR"}),", click the ",(0,n.jsx)(t.strong,{children:"OR"})," button on the right side. Click ",(0,n.jsx)(t.em,{children:"Add Filter"})," and ",(0,n.jsx)(t.strong,{children:"OK"})," to finalize the changes."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4722:(e,t,i)=>{i.d(t,{A:()=>o});var r=i(6540);const n=(...e)=>e.filter(((e,t,i)=>Boolean(e)&&i.indexOf(e)===t)).join(" ");var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,r.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:o="",children:d,iconNode:a,...h},c)=>(0,r.createElement)("svg",{ref:c,...s,width:t,height:t,stroke:e,strokeWidth:l?24*Number(i)/Number(t):i,className:n("lucide",o),...h},[...a.map((([e,t])=>(0,r.createElement)(e,t))),...Array.isArray(d)?d:[d]]))),o=(e,t)=>{const i=(0,r.forwardRef)((({className:i,...s},o)=>{return(0,r.createElement)(l,{ref:o,iconNode:t,className:n(`lucide-${d=e,d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,i),...s});var d}));return i.displayName=`${e}`,i}},5627:(e,t,i)=>{i.d(t,{A:()=>r});const r=(0,i(4722).A)("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]])}}]);