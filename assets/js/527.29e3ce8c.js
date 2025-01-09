/*! For license information please see 527.29e3ce8c.js.LICENSE.txt */
(self.webpackChunkbirt_docs=self.webpackChunkbirt_docs||[]).push([[527],{7293:(e,t,n)=>{"use strict";n.d(t,{A:()=>H});var s=n(6540),a=n(4848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),i=n?.props.children;return{mdxAdmonitionTitle:i,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var i=n(4164),r=n(1312),l=n(7559);const c="admonition_xJq3",d="admonitionHeading_Gvgb",u="admonitionIcon_Rf37",m="admonitionContent_BuS1";function h(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,i.A)(l.G.common.admonition,l.G.common.admonitionType(t),c,n),children:s})}function p(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:d,children:[(0,a.jsx)("span",{className:u,children:t}),n]})}function f(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:m,children:t}):null}function x(e){const{type:t,icon:n,title:s,children:o,className:i}=e;return(0,a.jsxs)(h,{type:t,className:i,children:[s||n?(0,a.jsx)(p,{title:s,icon:n}):null,(0,a.jsx)(f,{children:o})]})}function b(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function v(e){return(0,a.jsx)(x,{...g,...e,className:(0,i.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const N={icon:(0,a.jsx)(j,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function A(e){return(0,a.jsx)(x,{...N,...e,className:(0,i.A)("alert alert--success",e.className),children:e.children})}function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const k={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,a.jsx)(x,{...k,...e,className:(0,i.A)("alert alert--info",e.className),children:e.children})}function L(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const _={icon:(0,a.jsx)(L,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function w(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,a.jsx)(w,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,a.jsx)(L,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const E={...{note:v,tip:A,info:y,warning:function(e){return(0,a.jsx)(x,{..._,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(x,{...B,...e,className:(0,i.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(v,{title:"secondary",...e}),important:e=>(0,a.jsx)(y,{title:"important",...e}),success:e=>(0,a.jsx)(A,{title:"success",...e}),caution:function(e){return(0,a.jsx)(x,{...T,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})}}};function H(e){const t=o(e),n=(s=t.type,E[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),E.info));var s;return(0,a.jsx)(n,{...t})}},7690:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ze});var s=n(6540),a=n(9024),o=n(9532),i=n(4848);const r=s.createContext(null);function l(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(r.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(r);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,i.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(4581),h=n(1312),p=n(8774);function f(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,i.jsxs)(p.A,{className:(0,u.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(f,{...t,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(f,{...n,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=c();return(0,i.jsx)(x,{previous:e.previous,next:e.next})}var g=n(4586),v=n(4070),j=n(7559),N=n(3886),A=n(3025);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){const t=C[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function y(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.A,{to:n,onClick:s,children:(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.A)(),{pluginId:a}=(0,v.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,N.g1)(a),{latestDocSuggestion:r,latestVersionSuggestion:l}=(0,v.HW)(a),c=r??(d=l).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(k,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(y,{versionLabel:l.label,to:c.path,onClick:()=>o(l.name)})})]})}function _(e){let{className:t}=e;const n=(0,A.r)();return n.banner?(0,i.jsx)(L,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,A.r)();return n.badge?(0,i.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const B={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function T(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,i.jsxs)(p.A,{href:t,title:a,className:(0,u.A)(B.tag,s?B.tagWithCount:B.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const E={tags:"tags_jXut",tag:"tag_QGVx"};function H(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.A)(E.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:E.tag,children:(0,i.jsx)(T,{...e})},e.permalink)))})]})}const M={iconEdit:"iconEdit_Z9Sw"};function I(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(M.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function S(e){let{editUrl:t}=e;return(0,i.jsxs)(p.A,{to:t,className:j.G.common.editThisPage,children:[(0,i.jsx)(I,{}),(0,i.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function U(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,g.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,g.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function V(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=U({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function R(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function z(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,i.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(V,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(R,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const O={lastUpdated:"lastUpdated_JAkA"};function G(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,i.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(S,{editUrl:n})}),(0,i.jsx)("div",{className:(0,u.A)("col",O.lastUpdated),children:(s||a)&&(0,i.jsx)(z,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}function P(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,o=a.length>0,r=!!(t||n||s);return o||r?(0,i.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,i.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(H,{tags:a})})}),r&&(0,i.jsx)(G,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var $=n(1422),D=n(6342);function W(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function F(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=F({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function Z(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>q(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function J(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,D.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){const t=(0,s.useRef)(void 0),n=J();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),l=Z(r,{anchorTopOffset:n.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}function K(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,i.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(p.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(K,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const Q=s.memo(K);function X(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:l,...c}=e;const d=(0,D.p)(),u=r??d.tableOfContents.minHeadingLevel,m=l??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>F({toc:W(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return Y((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,i.jsx)(Q,{toc:h,className:n,linkClassName:a,...c})}const ee={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function te(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:r}=(0,$.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.A)(ne.tocCollapsible,!o&&ne.tocCollapsibleExpanded,n),children:[(0,i.jsx)(te,{collapsed:o,onClick:r}),(0,i.jsx)($.N,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(X,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const ae={tocMobile:"tocMobile_ITEo"};function oe(){const{toc:e,frontMatter:t}=c();return(0,i.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,ae.tocMobile)})}const ie={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},re="table-of-contents__link toc-highlight",le="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.A)(ie.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(X,{...n,linkClassName:re,linkActiveClassName:le})})}function de(){const{toc:e,frontMatter:t}=c();return(0,i.jsx)(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var ue=n(1107),me=n(8453),he=n(4536);function pe(e){let{children:t}=e;return(0,i.jsx)(me.x,{components:he.A,children:t})}function fe(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(ue.A,{as:"h1",children:n})}),(0,i.jsx)(pe,{children:t})]})}var xe=n(6972),be=n(9169),ge=n(6025);function ve(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const je={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Ne(){const e=(0,ge.Ay)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(ve,{className:je.breadcrumbHomeIcon})})})}const Ae={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Ce(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(p.A,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function ke(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ye(){const e=(0,xe.OF)(),t=(0,be.Dt)();return e?(0,i.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,Ae.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(Ne,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(ke,{active:s,index:n,addMicrodata:!!a,children:(0,i.jsx)(Ce,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var Le=n(5260);function _e(){return(0,i.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function we(){return(0,i.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Be(){return(0,i.jsx)(Le.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Te(){return(0,i.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function Ee(){return(0,i.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var He=n(7293);function Me(e){let{className:t}=e;return(0,i.jsx)(He.A,{type:"caution",title:(0,i.jsx)(Te,{}),className:(0,u.A)(t,j.G.common.draftBanner),children:(0,i.jsx)(Ee,{})})}function Ie(e){let{className:t}=e;return(0,i.jsx)(He.A,{type:"caution",title:(0,i.jsx)(_e,{}),className:(0,u.A)(t,j.G.common.unlistedBanner),children:(0,i.jsx)(we,{})})}function Se(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Be,{}),(0,i.jsx)(Ie,{...e})]})}function Ue(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||s.unlisted)&&(0,i.jsx)(Se,{}),s.draft&&(0,i.jsx)(Me,{})]})}const Ve={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Re(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(oe,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(de,{})}}(),{metadata:s}=c();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&Ve.docItemCol),children:[(0,i.jsx)(Ue,{metadata:s}),(0,i.jsx)(_,{}),(0,i.jsxs)("div",{className:Ve.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(ye,{}),(0,i.jsx)(w,{}),n.mobile,(0,i.jsx)(fe,{children:t}),(0,i.jsx)(P,{})]}),(0,i.jsx)(b,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ze(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(l,{content:e.content,children:(0,i.jsxs)(a.e3,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(Re,{children:(0,i.jsx)(n,{})})]})})}},9068:(e,t,n)=>{"use strict";n.d(t,{A:()=>ce});var s=n(6540),a=n(5260),o=n(2303),i=n(4164),r=n(5293),l=n(6342);function c(){const{prism:e}=(0,l.p)(),{colorMode:t}=(0,r.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var d=n(7559),u=n(8426),m=n.n(u);const h=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},x={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(f);function g(e,t){const n=e.map((e=>{const{start:n,end:s}=x[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&p.test(o)){const e=o.match(p).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);case"vb":case"vba":case"visual-basic":return g(["vb","rem"],t);case"vbnet":return g(["vbnet","rem"],t);case"batch":return g(["rem"],t);case"basic":return g(["rem","f90"],t);case"fsharp":return g(["js","ml"],t);case"ocaml":case"sml":return g(["ml"],t);case"fortran":return g(["f90"],t);case"cobol":return g(["cobol"],t);default:return g(b,t)}}(s,a),r=n.split("\n"),l=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<r.length;){const e=r[m].match(i);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?l[c[t]].range+=`${m},`:d[t]?l[d[t]].start=m:u[t]&&(l[u[t]].range+=`${l[u[t]].start}-${m-1},`),r.splice(m,1)}n=r.join("\n");const h={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const j="codeBlockContainer_Ckt0";var N=n(4848);function A(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(c());return(0,N.jsx)(t,{...n,style:s,className:(0,i.A)(n.className,j,d.G.common.codeBlock)})}const C={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return(0,N.jsx)(A,{as:"pre",tabIndex:0,className:(0,i.A)(C.codeBlockStandalone,"thin-scrollbar",n),children:(0,N.jsx)("code",{className:C.codeBlockLines,children:t})})}var y=n(9532);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=L);const a=(0,y._q)(t),o=(0,y.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var w=n(1765);const B="codeLine_lJS_",T="codeLineNumber_Tfdd",E="codeLineContent_feaV";function H(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=a({line:t,className:(0,i.A)(n,s&&B)}),l=t.map(((e,t)=>(0,N.jsx)("span",{...o({token:e})},t)));return(0,N.jsxs)("span",{...r,children:[s?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{className:T}),(0,N.jsx)("span",{className:E,children:l})]}):l,(0,N.jsx)("br",{})]})}var M=n(1312);function I(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function S(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const U={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function V(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),r=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection(),o=a.rangeCount>0&&a.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),s&&s.focus()}(t),o(!0),r.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,N.jsx)("button",{type:"button","aria-label":a?(0,M.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.A)("clean-btn",n,U.copyButton,a&&U.copyButtonCopied),onClick:l,children:(0,N.jsxs)("span",{className:U.copyButtonIcons,"aria-hidden":"true",children:[(0,N.jsx)(I,{className:U.copyButtonIcon}),(0,N.jsx)(S,{className:U.copyButtonSuccessIcon})]})})}function R(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const z="wordWrapButtonIcon_Bwma",O="wordWrapButtonEnabled_EoeP";function G(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,M.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,N.jsx)("button",{type:"button",onClick:n,className:(0,i.A)("clean-btn",t,s&&O),"aria-label":a,title:a,children:(0,N.jsx)(R,{className:z,"aria-hidden":"true"})})}function P(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:r,language:d}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.p)(),p=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=c(),x=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return _(o,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),b=function(e){return e?.match(h)?.groups.title??""}(a)||o,{lineClassNames:g,code:j}=v(t,{metastring:a,language:p,magicComments:m}),k=r??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,N.jsxs)(A,{as:"div",className:(0,i.A)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[b&&(0,N.jsx)("div",{className:C.codeBlockTitle,children:b}),(0,N.jsxs)("div",{className:C.codeBlockContent,children:[(0,N.jsx)(w.f4,{theme:f,code:j,language:p??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,N.jsx)("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,i.A)(t,C.codeBlock,"thin-scrollbar"),style:n,children:(0,N.jsx)("code",{className:(0,i.A)(C.codeBlockLines,k&&C.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,N.jsx)(H,{line:e,getLineProps:a,getTokenProps:o,classNames:g[t],showLineNumbers:k},t)))})})}}),(0,N.jsxs)("div",{className:C.buttonGroup,children:[(x.isEnabled||x.isCodeScrollable)&&(0,N.jsx)(G,{className:C.codeButton,onClick:()=>x.toggle(),isEnabled:x.isEnabled}),(0,N.jsx)(V,{className:C.codeButton,code:j})]})]})]})}function $(e){let{children:t,...n}=e;const a=(0,o.A)(),i=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof i?P:k;return(0,N.jsx)(r,{...n,children:i},String(a))}function D(e){return(0,N.jsx)("code",{...e})}var W=n(8774);var F=n(3427),q=n(1422);const Z="details_lb9f",J="isBrowser_bmU9",Y="collapsibleContent_i85q";function K(e){return!!e&&("SUMMARY"===e.tagName||K(e.parentElement))}function Q(e,t){return!!e&&(e===t||Q(e.parentElement,t))}function X(e){let{summary:t,children:n,...a}=e;(0,F.A)().collectAnchor(a.id);const r=(0,o.A)(),l=(0,s.useRef)(null),{collapsed:c,setCollapsed:d}=(0,q.u)({initialState:!a.open}),[u,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,N.jsx)("summary",{children:t??"Details"});return(0,N.jsxs)("details",{...a,ref:l,open:u,"data-collapsed":c,className:(0,i.A)(Z,r&&J,a.className),onMouseDown:e=>{K(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;K(t)&&Q(t,l.current)&&(e.preventDefault(),c?(d(!1),m(!0)):d(!0))},children:[h,(0,N.jsx)(q.N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,N.jsx)("div",{className:Y,children:n})})]})}const ee="details_b_Ee";function te(e){let{...t}=e;return(0,N.jsx)(X,{...t,className:(0,i.A)("alert alert--info",ee,t.className)})}function ne(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,N.jsx)(N.Fragment,{children:t.filter((e=>e!==n))});return(0,N.jsx)(te,{...e,summary:n,children:a})}var se=n(1107);function ae(e){return(0,N.jsx)(se.A,{...e})}const oe="containsTaskList_mC6p";function ie(e){if(void 0!==e)return(0,i.A)(e,e?.includes("contains-task-list")&&oe)}const re="img_ev3q";var le=n(7293);const ce={Head:a.A,details:ne,Details:ne,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,N.jsx)(D,{...e}):(0,N.jsx)($,{...e})},a:function(e){return(0,N.jsx)(W.A,{...e})},pre:function(e){return(0,N.jsx)(N.Fragment,{children:e.children})},ul:function(e){return(0,N.jsx)("ul",{...e,className:ie(e.className)})},li:function(e){return(0,F.A)().collectAnchor(e.id),(0,N.jsx)("li",{...e})},img:function(e){return(0,N.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,i.A)(t,re))});var t},h1:e=>(0,N.jsx)(ae,{as:"h1",...e}),h2:e=>(0,N.jsx)(ae,{as:"h2",...e}),h3:e=>(0,N.jsx)(ae,{as:"h3",...e}),h4:e=>(0,N.jsx)(ae,{as:"h4",...e}),h5:e=>(0,N.jsx)(ae,{as:"h5",...e}),h6:e=>(0,N.jsx)(ae,{as:"h6",...e}),admonition:le.A,mermaid:()=>null}},4722:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var s=n(6540);const a=(...e)=>e.filter(((e,t,n)=>Boolean(e)&&n.indexOf(e)===t)).join(" ");var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=(0,s.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:l,iconNode:c,...d},u)=>(0,s.createElement)("svg",{ref:u,...o,width:t,height:t,stroke:e,strokeWidth:i?24*Number(n)/Number(t):n,className:a("lucide",r),...d},[...c.map((([e,t])=>(0,s.createElement)(e,t))),...Array.isArray(l)?l:[l]]))),r=(e,t)=>{const n=(0,s.forwardRef)((({className:n,...o},r)=>{return(0,s.createElement)(i,{ref:r,iconNode:t,className:a(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,n),...o});var l}));return n.displayName=`${e}`,n}},5773:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});const s=(0,n(4722).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);