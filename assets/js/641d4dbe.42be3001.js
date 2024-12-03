/*! For license information please see 641d4dbe.42be3001.js.LICENSE.txt */
"use strict";(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[8445],{7740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"birt-studio/customizing-reports/formatting-reports","title":"Editing and Formatting","description":"How to edit and format everything in a custom report in BIRT Studio.","source":"@site/docs/birt-studio/02-customizing-reports/formatting-reports.mdx","sourceDirName":"birt-studio/02-customizing-reports","slug":"/birt-studio/customizing-reports/formatting-reports","permalink":"/birt-docs/docs/birt-studio/customizing-reports/formatting-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/nconklindev/birt-docs/edit/main/docs/birt-studio/02-customizing-reports/formatting-reports.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Editing and Formatting","description":"How to edit and format everything in a custom report in BIRT Studio.","sidebar_position":1},"sidebar":"birtStudioSidebar","previous":{"title":"Customizing Report","permalink":"/birt-docs/docs/birt-studio/customizing-reports/"},"next":{"title":"Grouping","permalink":"/birt-docs/docs/birt-studio/customizing-reports/grouping-data"}}');var i=n(4848),a=n(8453),r=n(5892);const l={title:"Editing and Formatting",description:"How to edit and format everything in a custom report in BIRT Studio.",sidebar_position:1},s=void 0,d={},h=[{value:"Editing Column Labels",id:"editing-column-labels",level:2},{value:"Formatting Data",id:"formatting-data",level:2},{value:"Formatting Numbers",id:"formatting-numbers",level:3},{value:"Formatting Dates",id:"formatting-dates",level:3},{value:"Formatting Date and Time",id:"formatting-date-and-time",level:3},{value:"Formatting Time",id:"formatting-time",level:3},{value:"Formatting Text",id:"formatting-text",level:3},{value:"Formatting Currency",id:"formatting-currency",level:3},{value:"Formatting Booleans",id:"formatting-booleans",level:3},{value:"Conditional Formatting",id:"conditional-formatting",level:2},{value:"Changing Font Properties",id:"changing-font-properties",level:2},{value:"Changing the Alignment of Text",id:"changing-the-alignment-of-text",level:2},{value:"Changing the Order of Columns",id:"changing-the-order-of-columns",level:2},{value:"Merging Data into One Column",id:"merging-data-into-one-column",level:2},{value:"How To Merge Column Headers",id:"how-to-merge-column-headers",level:3},{value:"Adding a New Column Header Row",id:"adding-a-new-column-header-row",level:2},{value:"How To Add a New Column Header Row",id:"how-to-add-a-new-column-header-row",level:3},{value:"How To Merge Column Headers to Type Text that Spans Multiple Columns",id:"how-to-merge-column-headers-to-type-text-that-spans-multiple-columns",level:3},{value:"Changing Column Width",id:"changing-column-width",level:2},{value:"Changing Page Layout",id:"changing-page-layout",level:2},{value:"Changing the Report Title",id:"changing-the-report-title",level:2}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"editing-column-labels",children:"Editing Column Labels"}),"\n",(0,i.jsxs)(t.p,{children:["To edit a column label, quickly double click on the column header label. This will put a dark blue box around the label indicating that it is selected. Right click and select ",(0,i.jsx)(t.em,{children:"Edit Text"})," to edit the column label."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["For CSV Reports, editing the column header label does not affect the underlying data binding. It is only a visual change. For more information on creating CSV reports, see the ",(0,i.jsx)(t.a,{href:"/docs/birt-studio/advanced/creating-csv-reports",children:"Creating CSV Reports"})," article."]})}),"\n",(0,i.jsx)(t.h2,{id:"formatting-data",children:"Formatting Data"}),"\n",(0,i.jsxs)(t.p,{children:["There are a wide variety of formatting options available for custom reports. To access the formatting options for a given column, right click on the column header and select ",(0,i.jsx)(t.em,{children:"Format > Format Data"}),". This will open the ",(0,i.jsx)(t.em,{children:"Format Data"})," dialog. To determine the type of data fields that are in your report, right click on any column and select the ",(0,i.jsx)(t.em,{children:"Data Fields"})," option. The ",(0,i.jsx)(t.em,{children:"Field Name"})," column will be the column key name and the ",(0,i.jsx)(t.em,{children:"Type"}),' column will indicate the type of data that is in the column. If the type says "string", then it is considered "text" for the purposes of this article.']}),"\n",(0,i.jsxs)(t.p,{children:["Formatting any of the available types is done in the same way. The ",(0,i.jsx)(t.em,{children:"Format Data"})," dialog will look different depending on the type of data that is being formatted. The following sections will go over the different types of data that can be formatted."]}),"\n",(0,i.jsx)(t.p,{children:'Each type provides a "Custom" option that provides a text box where a custom format can be entered. When selecting the Custom option, examples will be proivded of allowed characters.'}),"\n",(0,i.jsx)(t.h3,{id:"formatting-numbers",children:"Formatting Numbers"}),"\n",(0,i.jsxs)(t.p,{children:["To format a number, select the column that contains the data you want to format, such as ",(0,i.jsx)(t.strong,{children:"Actual Hours"})," from the ",(0,i.jsx)(t.strong,{children:"Timecard Transactions"})," Entity. Open the Format Data dialog following the steps in ",(0,i.jsx)(t.a,{href:"#formatting-data",children:"Formatting Data"}),". The dialog that opens may look like this:"]}),"\n",(0,i.jsx)(t.p,{children:"The options for formatting numbers are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Unformatted"}),"\n",(0,i.jsx)(t.li,{children:"General Number"}),"\n",(0,i.jsx)(t.li,{children:"Currency"}),"\n",(0,i.jsx)(t.li,{children:"Fixed (default for most)"}),"\n",(0,i.jsx)(t.li,{children:"Percent"}),"\n",(0,i.jsx)(t.li,{children:"Scientific"}),"\n",(0,i.jsx)(t.li,{children:"Custom"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The Unformatted and General Number formats drop any trailing zeros after the decimal point. Fixed format will be the default for most numbers that are coming out of Pro WFM and will display two decimal places by default. This number can be increased by changing the ",(0,i.jsx)(t.em,{children:"Decimal Places"})," value from the dropdown. The max is 10. The other options can be changed according to personal preference."]}),"\n",(0,i.jsx)(t.h3,{id:"formatting-dates",children:"Formatting Dates"}),"\n",(0,i.jsx)(t.p,{children:"The options for formatting dates are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"mmm dd, yyyy (e.g. Jan 1, 2023)"}),"\n",(0,i.jsx)(t.li,{children:"MMM dd, yyyy (e.g. January 1, 2023)"}),"\n",(0,i.jsx)(t.li,{children:"mm/dd/yyyy (e.g. 01/01/2023)"}),"\n",(0,i.jsx)(t.li,{children:"Custom"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"formatting-date-and-time",children:"Formatting Date and Time"}),"\n",(0,i.jsx)(t.p,{children:"The options for formatting date and time are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Unformatted (default)"}),"\n",(0,i.jsx)(t.li,{children:"MMM dd, yyyy"}),"\n",(0,i.jsx)(t.li,{children:"mm dd, yyyy"}),"\n",(0,i.jsx)(t.li,{children:"mm/dd/yyyy"}),"\n",(0,i.jsxs)(t.li,{children:["hh:mm",":ss"," a Z (e.g. 12:00:00 PM UTC)"]}),"\n",(0,i.jsxs)(t.li,{children:["hh:mm",":ss"," a (e.g. 12:00:00 PM)"]}),"\n",(0,i.jsxs)(t.li,{children:["HH",":mm"," (e.g. 16:30)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'The Unformatted option will be selected by default but it will not show as an option. The top option would be considered the "Unformatted" option since it is the same as the default.'}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Dates and Times are unaffected by the Locale Policy of the user running the report ",(0,i.jsx)("strong",{class:"not-prose",children:"and"})," the Tenant Default. They will always display in American English format. Use the Custom option to format dates and times to another locale. Any format is applied for ",(0,i.jsx)(t.em,{children:"all"})," users running the report and are not individual."]})}),"\n",(0,i.jsx)(t.h3,{id:"formatting-time",children:"Formatting Time"}),"\n",(0,i.jsxs)(t.p,{children:["The time options are the same as the last 3 options for ",(0,i.jsx)(t.a,{href:"#formatting-date-and-time",children:"Formatting Date and Time"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"formatting-text",children:"Formatting Text"}),"\n",(0,i.jsx)(t.p,{children:"The options for formatting text are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Unformatted"}),"\n",(0,i.jsx)(t.li,{children:"Uppercase"}),"\n",(0,i.jsx)(t.li,{children:"Lowercase"}),"\n",(0,i.jsx)(t.li,{children:"Custom"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"formatting-currency",children:"Formatting Currency"}),"\n",(0,i.jsxs)(t.p,{children:["Formatting Currency is the same as ",(0,i.jsx)(t.a,{href:"#formatting-numbers",children:"Formatting Numbers"}),". Select the ",(0,i.jsx)(t.em,{children:"Currency"})," option from the dropdown when formatting a number. The available options to format the currency are:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Symbol"}),"\n",(0,i.jsx)(t.li,{children:"Symbol Position"}),"\n",(0,i.jsx)(t.li,{children:"Decimal Places"}),"\n",(0,i.jsx)(t.li,{children:"Use 1000s Separator"}),"\n",(0,i.jsx)(t.li,{children:"Negative Numbers"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Change these options according to personal preference."}),"\n",(0,i.jsx)(t.h3,{id:"formatting-booleans",children:"Formatting Booleans"}),"\n",(0,i.jsx)(t.p,{children:"Formatting a boolean only allows you to change the display text for the boolean value."}),"\n",(0,i.jsx)(t.h2,{id:"conditional-formatting",children:"Conditional Formatting"}),"\n",(0,i.jsxs)(t.p,{children:["BIRT Studio allows you to format columns based on a specified condition. To open the ",(0,i.jsx)(t.strong,{children:"Conditional Formatting"})," window, right click on the column you want to apply conditional formatting to and select ",(0,i.jsx)(t.em,{children:"Format > Conditional Formatting"}),". This will open the ",(0,i.jsx)(t.strong,{children:"Conditional Formatting"})," window. Your window may look different depending on the type of data you are formatting."]}),"\n",(0,i.jsxs)(t.p,{children:["The top is a preview of the selected format. Click the ",(0,i.jsx)(t.em,{children:"Format"})," link to open the formatting options. These are straight forward and can change things such as the Font, Font Size, Color, Background Color, and more."]}),"\n",(0,i.jsxs)(t.p,{children:["In the next row, the first field determines when conditional formatting takes effect. It does not need to be the same one as the one selected. The second field is the condition such as Equal To, Between, Greater Than, etc. These are all explained in ",(0,i.jsx)(t.a,{href:"/docs/birt-studio/customizing-reports/filtering#filter-conditions",children:"Applying Filters"}),". Lastly, the text field is the value that must be met by the condition for the format to apply. For example, using the above screenshot as an example, if you want to format all values that are greater than 4, you would select the ",(0,i.jsx)(t.em,{children:"Greater Than"})," condition and enter 4 in the text field."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The column that is selected is the column that the formatting is being applied ",(0,i.jsx)(t.em,{children:"to"}),". Make sure that the column you want to format is the correct one listed next to the ",(0,i.jsx)(t.em,{children:"Selected Column"})," label."]})}),"\n",(0,i.jsx)(t.h2,{id:"changing-font-properties",children:"Changing Font Properties"}),"\n",(0,i.jsxs)(t.p,{children:["The font of the data in a column can be changed by right clicking on the column header and selecting ",(0,i.jsx)(t.em,{children:"Format > Font"}),". This will open the ",(0,i.jsx)(t.strong,{children:"Font"})," dialog. The options are straight forward and can be changed according to personal preference."]}),"\n",(0,i.jsx)(t.h2,{id:"changing-the-alignment-of-text",children:"Changing the Alignment of Text"}),"\n",(0,i.jsxs)(t.p,{children:["The alignment of text in a column can be changed by right clicking on the column header and selecting ",(0,i.jsx)(t.em,{children:"Alignment"}),". This will open the ",(0,i.jsx)(t.strong,{children:"Alignment"})," dialog. Choose one of the alignment options: Align Left, Align Center, or Align Right. Click ",(0,i.jsx)(t.strong,{children:"OK"})," to save the changes."]}),"\n",(0,i.jsx)(t.h2,{id:"changing-the-order-of-columns",children:"Changing the Order of Columns"}),"\n",(0,i.jsx)(t.p,{children:"To change the order of columns, select a column by clicking on anywhere inside the column. Make sure the column is selected, indicated by a dark blue border around the column. Left click and hold and drag the column to the desired location in the report design. A blue line will appear indicating where the column will be placed when the mouse button is released."}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, the entire table can be selected by selecting a column and then clicking the table handle above the column headers. Click the ",(0,i.jsx)(r.A,{className:"icon"})," ",(0,i.jsx)(t.strong,{children:"Edit"})," icon to open the ",(0,i.jsx)(t.strong,{children:"Table Builder"})," window. The columns can be rearranged by selecting a column on the right side under ",(0,i.jsx)(t.em,{children:"Current Column Selections"})," and clicking the up or down arrows to move the column up or down in the list. Click ",(0,i.jsx)(t.strong,{children:"OK"})," to save the changes."]}),"\n",(0,i.jsx)(t.p,{children:"The last option to change the order of the columns in the report is to preview the report in preview mode, and drag the column(s) to the desired location. You will need to save the report after making the changes."}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"If there are computed columns in the report design, they will not appear\r\nin this list."})}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"As of 09.08.00 (2024.R1), the drag and drop functionality in reports is not working as expected. The column will not be placed where the blue line is indicating. The only way to change the order of the columns are the ways above."})}),"\n",(0,i.jsx)(t.h2,{id:"merging-data-into-one-column",children:"Merging Data into One Column"}),"\n",(0,i.jsx)(t.p,{children:"You can merge the data from two or more columns into one column. When you merge data, the data appears on multiple lines. It also enables you to include more columns without exceeding the width of the page. This is ideal for some types of data but might not be ideal for others. Be sure to try it out in your own report to see if it works for you."}),"\n",(0,i.jsxs)(t.p,{children:["To merge data from a column, select all the columns that contain data to merge. Press ",(0,i.jsx)("kbd",{class:"kbd text-neutral-content",children:"Ctrl"})," and click each column header to select multiple columns. Right click on any of the selected columns and select ",(0,i.jsx)(t.em,{children:"Column > Merge Columns"}),". This will merge the data from the selected columns into one column."]}),"\n",(0,i.jsx)(t.h3,{id:"how-to-merge-column-headers",children:"How To Merge Column Headers"}),"\n",(0,i.jsxs)(t.p,{children:["To merge the column headers, select the column header in the bottom row of the merged column by double clicking in the column header cell. This will put a border around the header label to indicate that it has been selected. Right click the selected column header and select ",(0,i.jsx)(t.em,{children:"Cell > Merge Up"}),". This will merge the column header with the column header above it. Repeat this process until one column header remains."]}),"\n",(0,i.jsx)(t.h2,{id:"adding-a-new-column-header-row",children:"Adding a New Column Header Row"}),"\n",(0,i.jsx)(t.p,{children:"If you need to add more text or space in the header area, you can add multiple column header rows. When you insert a new column header row, the row is added above the selected row and spans the entire width of the table. Formatting and borders are copied from the row below and can be changed later."}),"\n",(0,i.jsx)(t.h3,{id:"how-to-add-a-new-column-header-row",children:"How To Add a New Column Header Row"}),"\n",(0,i.jsxs)(t.p,{children:["To add a new column header row, double click inside the column header area. This will place a border around the column label to indicate the header is selected. Right click and select ",(0,i.jsx)(t.em,{children:"Cell > Insert Row Above"})," to insert a new column header row. Choose ",(0,i.jsx)(t.em,{children:"Insert Row Below"})," to insert a new column header row below the selected row."]}),"\n",(0,i.jsx)(t.h3,{id:"how-to-merge-column-headers-to-type-text-that-spans-multiple-columns",children:"How To Merge Column Headers to Type Text that Spans Multiple Columns"}),"\n",(0,i.jsxs)(t.p,{children:["Double click on the column header row that you want to merge. This will place a border around the column header row to indicate the row is selected. Right click and select ",(0,i.jsx)(t.em,{children:"Cell > Merge Right"})," to merge the selected column header to the right. Repeat this process across the entire row to merge all the columns in the row."]}),"\n",(0,i.jsx)(t.h2,{id:"changing-column-width",children:"Changing Column Width"}),"\n",(0,i.jsx)(t.p,{children:"The column width of any column can be changed by selecting the column, moving the mouse over the right side of the column header until the cursor changes to the resize cursor and then clicking and dragging the column to the desired width."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Resizing column width does not appear to function as it does in other programs such as Excel where you can drag the column to an infinite width. Depending on the number of column in the table, there appears to be a maximum width that a column can be resized to. Resizing one column may shrink the others around it. If there are so many columns in a report that a single column needs to be resized, it may be best to consider changing the page orientation to landscape or setting the Page Layout to Auto Expand Width. See the ",(0,i.jsx)(t.a,{href:"#changing-page-layout",children:"Changing the Page Layout"})," section for more information."]})}),"\n",(0,i.jsx)(t.h2,{id:"changing-page-layout",children:"Changing Page Layout"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes it is helpful to change the page layout if the report design contains many columns and the columns in the design are so squished that it is hard to read the column header label or the data itself."}),"\n",(0,i.jsxs)(t.p,{children:["To change the page layout, click the menu bar at the top and select ",(0,i.jsx)(t.em,{children:"File > Page Setup..."}),' . From here, you can change the Orientation from "Auto" to "Landscape" and the Page Layout from "Fixed" to "Auto Expand Width". Click ',(0,i.jsx)(t.strong,{children:"OK"})," to save the changes."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"Master Page"})," can also be changed to use a different paper size in the ",(0,i.jsx)(t.em,{children:"Size"})," dropdown. The options are A4, US Legal, US Letter, and Custom which allows you to enter a custom paper size."]}),"\n",(0,i.jsxs)(t.p,{children:["Margins of the report can be adjusted under the ",(0,i.jsx)(t.em,{children:"Margin"})," label."]}),"\n",(0,i.jsx)(t.h2,{id:"changing-the-report-title",children:"Changing the Report Title"}),"\n",(0,i.jsxs)(t.p,{children:["To change the report title, double click the default ",(0,i.jsx)(t.strong,{children:"Report Title"})," text at the top of the report in the report header. This will place a cursor inside a text box to edit the report title. Click outside the text box to save the changes."]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4722:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(6540);const i=(...e)=>e.filter(((e,t,n)=>Boolean(e)&&n.indexOf(e)===t)).join(" ");var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const r=(0,o.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:s,iconNode:d,...h},c)=>(0,o.createElement)("svg",{ref:c,...a,width:t,height:t,stroke:e,strokeWidth:r?24*Number(n)/Number(t):n,className:i("lucide",l),...h},[...d.map((([e,t])=>(0,o.createElement)(e,t))),...Array.isArray(s)?s:[s]]))),l=(e,t)=>{const n=(0,o.forwardRef)((({className:n,...a},l)=>{return(0,o.createElement)(r,{ref:l,iconNode:t,className:i(`lucide-${s=e,s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,n),...a});var s}));return n.displayName=`${e}`,n}},5892:(e,t,n)=>{n.d(t,{A:()=>o});const o=(0,n(4722).A)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]])}}]);