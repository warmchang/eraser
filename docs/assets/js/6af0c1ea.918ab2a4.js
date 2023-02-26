"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5954],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=l(t),f=i,y=v["".concat(s,".").concat(f)]||v[f]||u[f]||o;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=v;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},1336:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const o={},a=void 0,c={unversionedId:"trivy",id:"version-v1.0.x/trivy",title:"trivy",description:"--",source:"@site/versioned_docs/version-v1.0.x/trivy.md",sourceDirName:".",slug:"/trivy",permalink:"/eraser/docs/trivy",draft:!1,tags:[],version:"v1.0.x",frontMatter:{},sidebar:"sidebar",previous:{title:"Custom Scanner",permalink:"/eraser/docs/custom-scanner"},next:{title:"FAQ",permalink:"/eraser/docs/faq"}},s={},l=[{value:"title: Trivy",id:"title-trivy",level:2},{value:"Trivy Provider Options",id:"trivy-provider-options",level:2}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"--"),(0,i.kt)("h2",{id:"title-trivy"},"title: Trivy"),(0,i.kt)("h2",{id:"trivy-provider-options"},"Trivy Provider Options"),(0,i.kt)("p",null,"The trivy provider is used in Eraser for image scanning and detecting vulnerabilities. See ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/eraser/docs/customization#scanner-options"},"Customization")," for more details on configuring the scanner."))}u.isMDXComponent=!0}}]);