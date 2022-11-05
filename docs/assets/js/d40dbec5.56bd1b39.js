"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7677],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2646:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const a={title:"Exclusion"},l=void 0,o={unversionedId:"exclusion",id:"version-v0.4.x/exclusion",title:"Exclusion",description:"Excluding registries, repositories, and images",source:"@site/versioned_docs/version-v0.4.x/exclusion.md",sourceDirName:".",slug:"/exclusion",permalink:"/eraser/docs/v0.4.x/exclusion",draft:!1,tags:[],version:"v0.4.x",frontMatter:{title:"Exclusion"},sidebar:"sidebar",previous:{title:"Manual Removal",permalink:"/eraser/docs/v0.4.x/manual-removal"},next:{title:"Customization",permalink:"/eraser/docs/v0.4.x/customization"}},s={},p=[{value:"Excluding registries, repositories, and images",id:"excluding-registries-repositories-and-images",level:2},{value:"Exempting Nodes from the Eraser Pipeline",id:"exempting-nodes-from-the-eraser-pipeline",level:2}],c={toc:p};function d(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"excluding-registries-repositories-and-images"},"Excluding registries, repositories, and images"),(0,i.kt)("p",null,"Eraser can exclude registries (example, ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io/library/*"),") and also specific images with a tag (example, ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io/library/ubuntu:18.04"),") or digest (example, ",(0,i.kt)("inlineCode",{parentName:"p"},"sha256:80f31da1ac7b312ba29d65080fd..."),") from its removal process."),(0,i.kt)("p",null,"To exclude any images or registries from the removal, create configmap(s) with the label ",(0,i.kt)("inlineCode",{parentName:"p"},"eraser.sh/exclude.list=true")," in the eraser-system namespace with a JSON file holding the excluded images."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat > sample.json <<EOF\n{"excluded": ["docker.io/library/*", "ghcr.io/azure/test:latest"]}\nEOF\n\n$ kubectl create configmap excluded --from-file=excluded=sample.json --namespace=eraser-system\n$ kubectl label configmap excluded eraser.sh/exclude.list=true -n eraser-system\n')),(0,i.kt)("h2",{id:"exempting-nodes-from-the-eraser-pipeline"},"Exempting Nodes from the Eraser Pipeline"),(0,i.kt)("p",null,"Exempting nodes with ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter-nodes")," is added in v0.3.0. When deploying Eraser, you can specify whether there is a list of nodes you would like to ",(0,i.kt)("inlineCode",{parentName:"p"},"include")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude")," from the cleanup process using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter-nodes")," argument. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"See ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/Azure/eraser/blob/main/charts/eraser/README.md"},"Eraser Helm Chart")," for more information on deployment.")),(0,i.kt)("p",null,"Nodes with the selector ",(0,i.kt)("inlineCode",{parentName:"p"},"eraser.sh/cleanup.filter")," will be filtered accordingly. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"include")," is provided, eraser and collector pods will only be scheduled on nodes with the selector ",(0,i.kt)("inlineCode",{parentName:"li"},"eraser.sh/cleanup.filter"),". "),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"exclude")," is provided, eraser and collector pods will be scheduled on all nodes besides those with the selector ",(0,i.kt)("inlineCode",{parentName:"li"},"eraser.sh/cleanup.filter"),".")),(0,i.kt)("p",null,"Unless specified, the default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter-nodes")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude"),". Because Windows nodes are not supported, they will always be excluded regardless of the ",(0,i.kt)("inlineCode",{parentName:"p"},"eraser.sh/cleanup.filter")," label or the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter-nodes"),"."),(0,i.kt)("p",null,"Additional node selectors can be provided through the ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter-nodes-selector")," flag."))}d.isMDXComponent=!0}}]);