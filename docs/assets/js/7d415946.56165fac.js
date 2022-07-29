"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Releasing"},l=void 0,o={unversionedId:"releasing",id:"releasing",title:"Releasing",description:"Overview",source:"@site/docs/releasing.md",sourceDirName:".",slug:"/releasing",permalink:"/eraser/docs/releasing",draft:!1,tags:[],version:"current",frontMatter:{title:"Releasing"},sidebar:"sidebar",previous:{title:"Setup",permalink:"/eraser/docs/setup"},next:{title:"Contributing",permalink:"/eraser/docs/contributing"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Building and releasing",id:"building-and-releasing",level:2},{value:"Publishing",id:"publishing",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The release process consists of three phases: versioning, building, and publishing."),(0,a.kt)("p",null,"Versioning involves maintaining the following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Makefile")," - the Makefile contains a VERSION variable that defines the version of the project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"manager.yaml")," - the controller-manager deployment yaml contains the latest release tag image of the project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"eraser.yaml")," - the eraser.yaml contains all eraser resources to be deployed to a cluster including the latest release tag image of the project.")),(0,a.kt)("p",null,"The steps below explain how to update these files. In addition, the repository should be tagged with the semantic version identifying the release."),(0,a.kt)("p",null,"Building involves obtaining a copy of the repository and triggering a build as part of the GitHub Actions CI pipeline."),(0,a.kt)("p",null,"Publishing involves creating a release tag and creating a new ",(0,a.kt)("em",{parentName:"p"},"Release")," on GitHub."),(0,a.kt)("h2",{id:"versioning"},"Versioning"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Obtain a copy of the repository."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git clone git@github.com:Azure/eraser.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If this is a patch release for a release branch, check out applicable branch, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"release-0.1"),". If not, branch should be ",(0,a.kt)("inlineCode",{parentName:"p"},"main"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute the release-patch target to generate patch. Give the semantic version of the release:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"make release-manifest NEWVERSION=vX.Y.Z\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Promote staging manifest to release."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"make promote-staging-manifest\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Preview the changes:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git status\ngit diff\n")))),(0,a.kt)("h2",{id:"building-and-releasing"},"Building and releasing"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit the changes and push to remote repository to create a pull request."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'git checkout -b release-<NEW VERSION>\ngit commit -a -s -m "Prepare <NEW VERSION> release"\ngit push <YOUR FORK>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the PR is merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"release")," branch (",(0,a.kt)("inlineCode",{parentName:"p"},"<BRANCH NAME>")," below), tag that commit with release version and push tags to remote repository."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git checkout <BRANCH NAME>\ngit pull origin <BRANCH NAME>\ngit tag -a <NEW VERSION> -m '<NEW VERSION>'\ngit push origin <NEW VERSION>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pushing the release tag will trigger GitHub Actions to trigger ",(0,a.kt)("inlineCode",{parentName:"p"},"release")," job.\nThis will build the ",(0,a.kt)("inlineCode",{parentName:"p"},"ghcr.io/azure/eraser")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ghcr.io/azure/eraser-manager")," images automatically, then publish the new release tag."))),(0,a.kt)("h2",{id:"publishing"},"Publishing"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"GitHub Action will create a new release, review and edit it at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Azure/eraser/releases"},"https://github.com/Azure/eraser/releases"))))}u.isMDXComponent=!0}}]);