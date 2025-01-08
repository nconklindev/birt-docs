"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[8],{7110:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"birt-studio/customizing-reports/grouping-data","title":"Grouping","description":"How to apply grouping and add sections to reports in BIRT Studio.","source":"@site/docs/birt-studio/02-customizing-reports/grouping-data.mdx","sourceDirName":"birt-studio/02-customizing-reports","slug":"/birt-studio/customizing-reports/grouping-data","permalink":"/birt-docs/docs/birt-studio/customizing-reports/grouping-data","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/birt-studio/02-customizing-reports/grouping-data.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Grouping","description":"How to apply grouping and add sections to reports in BIRT Studio.","sidebar_position":3},"sidebar":"birtStudioSidebar","previous":{"title":"Sorting","permalink":"/birt-docs/docs/birt-studio/customizing-reports/sorting-data"},"next":{"title":"Aggregating","permalink":"/birt-docs/docs/birt-studio/customizing-reports/aggregating"}}');var o=i(4848),r=i(8453);const s={title:"Grouping",description:"How to apply grouping and add sections to reports in BIRT Studio.",sidebar_position:3},a=void 0,l={},d=[{value:"Benefits of Grouping Data",id:"benefits-of-grouping-data",level:2},{value:"How to Create a Group",id:"how-to-create-a-group",level:2},{value:"Grouping on Date and Time Columns",id:"grouping-on-date-and-time-columns",level:3},{value:"Changing the Order of Groups",id:"changing-the-order-of-groups",level:2},{value:"Creating Sections",id:"creating-sections",level:2},{value:"Hiding Details",id:"hiding-details",level:2},{value:"Unhiding/Show Details",id:"unhidingshow-details",level:3}];function c(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"benefits-of-grouping-data",children:"Benefits of Grouping Data"}),"\n",(0,o.jsx)(n.p,{children:"Sorting data is only one way to organize data in a report. But, in report development, it is common to present data that\r\nis organized into meaningful groups, especially reports with a large number of columns. With groups, you can:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add ",(0,o.jsx)(n.a,{href:"./aggregating",children:"Aggregations"})," to summarize data within each group."]}),"\n",(0,o.jsx)(n.li,{children:"Insert page breaks before or after each group to start each group of data on a new page."}),"\n",(0,o.jsxs)(n.li,{children:["Hide the details of each group to view a summary report\r\n",(0,o.jsx)(n.a,{href:"/docs/birt-studio/advanced/creating-summary-tables",children:"Creating Summary Tables"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Upon creating a group, BIRT Studio performs the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Removes duplicate values"}),"\n",(0,o.jsxs)(n.li,{children:["Sorts the values of each group (though this can be changed - ",(0,o.jsx)(n.a,{href:"./sorting-data",children:"Sorting Data"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-create-a-group",children:"How to Create a Group"}),"\n",(0,o.jsxs)(n.p,{children:["Creating groups is very easy to do in BIRT Studio. To create a group, select a column and click the group icon in the\r\ntable toolbar. This will create a group with the selected column as the group key. You can also right-click on a column\r\nand select ",(0,o.jsx)(n.strong,{children:"Group > Add Group"})," from the context menu. Multiple groups can be created by performing the same steps on\r\nother columns."]}),"\n",(0,o.jsxs)(n.p,{children:['To remove a group, select the column and click the "Delete Group" icon (it will look like and be in the same position on\r\nthe table toolbar as the "Add Group" icon but will have an "X" in the bottom right corner of the icon). You can also\r\nright-click on the group header and select ',(0,o.jsx)(n.strong,{children:"Group > Delete Group"})," from the context menu."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"The first two groups created will have a light grey background color applied to the entire group row. After the second\r\ngroup, this formatting stops being applied and the group row is harder to distinguish from the other data rows. This is\r\nnormal and cannot be changed. It's generally recommended to try to keep the number of groups at two or use formatting\r\nfor anything beyond two."})}),"\n",(0,o.jsx)(n.h3,{id:"grouping-on-date-and-time-columns",children:"Grouping on Date and Time Columns"}),"\n",(0,o.jsx)(n.p,{children:"When grouping on date and time columns, BIRT Studio will present two options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Group using individual values"}),"\n",(0,o.jsx)(n.li,{children:"Group every X time units"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Grouping using individual values will group the data by the individual values in the column. For example, if you have a\r\ndatetime column that has the value Dec 22, 2023 7:30 AM, then the group will be Dec 22, 2023 7:30 AM. This is not\r\nusually the most useful and you will more often than not want to group using the second option."}),"\n",(0,o.jsx)(n.p,{children:"Grouping every X time units will group the data by the time unit you select. For example, using the same values as\r\nabove, then the group will be Dec 22, 2023. This is much more useful in most cases."}),"\n",(0,o.jsx)(n.p,{children:"The values that are available for the time units are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Years"}),"\n",(0,o.jsx)(n.li,{children:"Quarters"}),"\n",(0,o.jsx)(n.li,{children:"Months"}),"\n",(0,o.jsx)(n.li,{children:"Weeks"}),"\n",(0,o.jsx)(n.li,{children:"Days"}),"\n",(0,o.jsx)(n.li,{children:"Hours"}),"\n",(0,o.jsx)(n.li,{children:"Minutes"}),"\n",(0,o.jsx)(n.li,{children:"Seconds"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"changing-the-order-of-groups",children:"Changing the Order of Groups"}),"\n",(0,o.jsxs)(n.p,{children:["Groups can be reordered by right clicking on a grouped column and selecting ",(0,o.jsx)(n.strong,{children:"Column > Reorder Columns"}),". Groups can be\r\nreordered by clicking the up and down arrows in the ",(0,o.jsx)(n.em,{children:"Grouped Columns"})," section."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This window also allows you to reorder the columns in the table. This is useful if you want to change the order of the\r\ncolumns in the table but don't want to delete and re-add the columns. Reordering columns is also discussed in\r\n",(0,o.jsx)(n.a,{href:"./sorting-data",children:"Sorting Data"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"creating-sections",children:"Creating Sections"}),"\n",(0,o.jsx)(n.p,{children:"A section is functionally equivalent to a group. When you create a section, you are also grouping data. Similar to\r\ngroups, you can create multiple sections, calculate aggregate data for each section, start each section on a new page,\r\nand hide the details of each section."}),"\n",(0,o.jsx)(n.p,{children:"However, one of the differences between a section and a group is how the information is arranged. See the below images\r\nfor an example of a group and a section."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For other examples of how sections can be used, review some of the existing Timekeeping reports in the Report Library\r\nsuch as the ",(0,o.jsx)(n.strong,{children:"Time Detail"})," report and the ",(0,o.jsx)(n.strong,{children:"Condensed Employee Time Detail"})," report. Other reports in the Report\r\nLibrary also use sections but these are good examples of the types of data that work well with sections since these two\r\nreports were created by UKG."]})}),"\n",(0,o.jsxs)(n.p,{children:["To create a section in an existing report, select the columns that you want to be added as a section by left clicking on\r\nthe first column and ",(0,o.jsx)("kbd",{children:"Ctrl"})," clicking on any other column. Right click and select ",(0,o.jsx)(n.em,{children:"Group > Add Section"}),". This\r\nwill add the columns as sections."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"For most report designs built using BIRT Studio, sections are not typically needed. You can create very nice and simple\r\nreports without sections and using groups instead."})}),"\n",(0,o.jsx)(n.h2,{id:"hiding-details",children:"Hiding Details"}),"\n",(0,o.jsxs)(n.p,{children:["Hiding details is useful to create things like ",(0,o.jsx)(n.a,{href:"/docs/birt-studio/advanced/creating-summary-tables",children:"summary tables"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Hiding details requires at least one group be present before it is visible."})}),"\n",(0,o.jsxs)(n.p,{children:["To hide details in a design that has a group applied, select the grouped column, then right click to open the column\r\ncontext menu. Select ",(0,o.jsx)(n.strong,{children:"Group > Hide Detail"}),". Once that is selected, anything that is not in the grouped header row will\r\nbe hidden."]}),"\n",(0,o.jsx)(n.h3,{id:"unhidingshow-details",children:"Unhiding/Show Details"}),"\n",(0,o.jsxs)(n.p,{children:["To unhide the previously hidden details rows, select the grouped column again, right click to open the context menu, and\r\nselect ",(0,o.jsx)(n.strong,{children:"Group > Show Detail"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If there are multiple groupings applied, then the details must be shown from the deepest group first."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);