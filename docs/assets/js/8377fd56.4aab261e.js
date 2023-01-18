"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=m(n),s=r,g=k["".concat(p,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"Setup"},i="Development Setup",o={unversionedId:"setup",id:"version-v1.0.0-beta.2/setup",title:"Setup",description:"This document describes the steps to get started with development.",source:"@site/versioned_docs/version-v1.0.0-beta.2/setup.md",sourceDirName:".",slug:"/setup",permalink:"/eraser/docs/v1.0.0-beta.2/setup",draft:!1,tags:[],version:"v1.0.0-beta.2",frontMatter:{title:"Setup"},sidebar:"sidebar",previous:{title:"Metrics",permalink:"/eraser/docs/v1.0.0-beta.2/metrics"},next:{title:"Releasing",permalink:"/eraser/docs/v1.0.0-beta.2/releasing"}},p={},m=[{value:"Local Setup",id:"local-setup",level:2},{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Get things running",id:"get-things-running",level:3},{value:"Making changes",id:"making-changes",level:3},{value:"Development Reference",id:"development-reference",level:2},{value:"Common Configuration",id:"common-configuration",level:3},{value:"Linting",id:"linting",level:3},{value:"Development",id:"development",level:3},{value:"Build",id:"build",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Release",id:"release",level:3}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-setup"},"Development Setup"),(0,r.kt)("p",null,"This document describes the steps to get started with development.\nYou can either utilize ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/codespaces/overview"},"Codespaces")," or setup a local environment."),(0,r.kt)("h2",{id:"local-setup"},"Local Setup"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/"},"go")," with version 1.17 or later."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make"))),(0,r.kt)("h3",{id:"get-things-running"},"Get things running"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get dependencies with ",(0,r.kt)("inlineCode",{parentName:"p"},"go get"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This project uses ",(0,r.kt)("inlineCode",{parentName:"p"},"make"),". You can utilize ",(0,r.kt)("inlineCode",{parentName:"p"},"make help")," to see available targets. For local deployment make targets help to build, test and deploy."))),(0,r.kt)("h3",{id:"making-changes"},"Making changes"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"#development-reference"},"Development Reference")," for more details on the specific commands."),(0,r.kt)("p",null,"To test your changes on a cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# generate necessary api files (optional - only needed if changes to api folder).\nmake generate\n\n# build applicable images\nmake docker-build-manager MANAGER_IMG=eraser-manager:dev\nmake docker-build-eraser ERASER_IMG=eraser:dev\nmake docker-build-collector COLLECTOR_IMG=collector:dev\nmake docker-build-trivy-scanner TRIVY_SCANNER_IMG=eraser-trivy-scanner:dev\n\n# make sure updated image is present on cluster (e.g., see kind example below)\nkind load docker-image \\\n        eraser-manager:dev \\\n        eraser-trivy-scanner:dev \\\n        eraser:dev \\\n        collector:dev\n\nmake manifests\nmake deploy\n\n# to remove the deployment\nmake undeploy\n")),(0,r.kt)("p",null,"To test your changes to manager locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make run\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'you@local:~/eraser$ make run\ndocker build . \\\n        -t eraser-tooling \\\n        -f build/tooling/Dockerfile\n[+] Building 7.8s (8/8) FINISHED\n => => naming to docker.io/library/eraser-tooling                           0.0s\ndocker run -v /home/eraser/config:/config -w /config/manager \\\n        k8s.gcr.io/kustomize/kustomize:v3.8.9 edit set image controller=eraser-manager:dev\ndocker run -v /home/eraser:/eraser eraser-tooling controller-gen \\\n        crd \\\n        rbac:roleName=manager-role \\\n        webhook \\\n        paths="./..." \\\n        output:crd:artifacts:config=config/crd/bases\nrm -rf manifest_staging\nmkdir -p manifest_staging/deploy\ndocker run --rm -v /home/eraser:/eraser \\\n        k8s.gcr.io/kustomize/kustomize:v3.8.9 build \\\n        /eraser/config/default -o /eraser/manifest_staging/deploy/eraser.yaml\ndocker run -v /home/eraser:/eraser eraser-tooling controller-gen object:headerFile="hack/boilerplate.go.txt" paths="./..."\ngo fmt ./...\ngo vet ./...\ngo run ./main.go\n{"level":"info","ts":1652985685.1663408,"logger":"controller-runtime.metrics","msg":"Metrics server is starting to listen","addr":":8080"}\n...\n')),(0,r.kt)("h2",{id:"development-reference"},"Development Reference"),(0,r.kt)("p",null,"Eraser is using tooling from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder"),". For Eraser this tooling is containerized into the ",(0,r.kt)("inlineCode",{parentName:"p"},"eraser-tooling")," image. The ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," targets can use this tooling and build the image when necessary."),(0,r.kt)("p",null,"You can override the default configuration using environment variables. Below you can find a reference of targets and configuration options."),(0,r.kt)("h3",{id:"common-configuration"},"Common Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the version (i.e., the image tag) of eraser to be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MANAGER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the image url for the Eraser manager. Used for tagging, pulling and pushing the image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ERASER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the image url for the Eraser. Used for tagging, pulling and pushing the image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLLECTOR_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the image url for the Collector. Used for tagging, pulling and pushing the image")))),(0,r.kt)("h3",{id:"linting"},"Linting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make lint"))),(0,r.kt)("p",null,"Lints the go code."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOLANGCI_LINT"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the go linting binary to be used for linting.")))),(0,r.kt)("h3",{id:"development"},"Development"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make generate"))),(0,r.kt)("p",null,"Generates necessary files for the k8s api stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"api/v1alpha1/zz_generated.deepcopy.go"),". See the ",(0,r.kt)("a",{parentName:"p",href:"https://book.kubebuilder.io/cronjob-tutorial/other-api-files.html"},"kubebuilder docs")," for details."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make manifests"))),(0,r.kt)("p",null,"Generates the eraser deployment yaml files under ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest_staging/deploy"),"."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ERASER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the image url for the Eraser.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MANAGER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the image url for the Eraser manager.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSTOMIZE_VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"Define Kustomize version for generating manifests.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make test"))),(0,r.kt)("p",null,"Runs the unit tests for the eraser project."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENVTEST"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the envtest setup binary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENVTEST_K8S_VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the Kubernetes version for envtest setup command.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make e2e-test"))),(0,r.kt)("p",null,"Runs e2e tests on a cluster."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ERASER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Eraser image to be used for e2e test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MANAGER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Eraser manager image to be used for e2e test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUBERNETES_VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes version for e2e test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TEST_COUNT"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets repetition for test. Please refer to ",(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/cmd/go#hdr-Testing_flags"},"go docs")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets timeout for test. Please refer to ",(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/cmd/go#hdr-Testing_flags"},"go docs")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TESTFLAGS"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets additional test flags")))),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make build"))),(0,r.kt)("p",null,"Builds the eraser manager binaries."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make run"))),(0,r.kt)("p",null,"Runs the eraser manager on your local machine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make docker-build-manager"))),(0,r.kt)("p",null,"Builds the docker image for the eraser manager."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CACHE_FROM"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the target of the buildx --cache-from flag ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#cache-from"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CACHE_TO"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the target of the buildx --cache-to flag ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#cache-to"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PLATFORM"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the target platform for buildx ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#platform"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OUTPUT_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the output for buildx ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#output"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MANAGER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the target repository, image name and tag for building image.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make docker-push-manager"))),(0,r.kt)("p",null,"Builds the docker image for the eraser manager."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MANAGER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the target repository, image name and tag for building image.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make docker-build-eraser"))),(0,r.kt)("p",null,"Builds the docker image for the eraser manager."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CACHE_FROM"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the target of the buildx --cache-from flag ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#cache-from"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CACHE_TO"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the target of the buildx --cache-to flag ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#cache-to"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PLATFORM"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the target platform for buildx ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#platform"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OUTPUT_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the output for buildx ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#output"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ERASER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the target repository, image name and tag for building image.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make docker-push-eraser"))),(0,r.kt)("p",null,"Builds the docker image for the eraser manager."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ERASER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the target repository, image name and tag for building image.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make docker-build-collector"))),(0,r.kt)("p",null,"Builds the docker image for the eraser collector."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CACHE_FROM"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the target of the buildx --cache-from flag ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#cache-from"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CACHE_TO"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the target of the buildx --cache-to flag ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#cache-to"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PLATFORM"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the target platform for buildx ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#platform"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OUTPUT_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the output for buildx ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/commandline/buildx_build/#output"},"see buildx reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLLECTOR_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the target repository, image name and tag for building image.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make docker-push-collector"))),(0,r.kt)("p",null,"Builds the docker image for the eraser collector."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLLECTOR_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the target repository, image name and tag for building image.")))),(0,r.kt)("h3",{id:"deployment"},"Deployment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make install"))),(0,r.kt)("p",null,"Install CRDs into the K8s cluster specified in ~/.kube/config."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSTOMIZE_VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"Kustomize version used to generate k8s resources for deployment.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make uninstall"))),(0,r.kt)("p",null,"Uninstall CRDs from the K8s cluster specified in ~/.kube/config."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSTOMIZE_VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"Kustomize version used to generate k8s resources for deployment.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make deploy"))),(0,r.kt)("p",null,"Deploys eraser to the cluster specified in ~/.kube/config."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSTOMIZE_VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"Kustomize version used to generate k8s resources for deployment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MANAGER_IMG"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the eraser manager image version to be used for deployment")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make undeploy"))),(0,r.kt)("p",null,"Undeploy controller from the K8s cluster specified in ~/.kube/config."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSTOMIZE_VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"Kustomize version used to generate k8s resources that need to be removed.")))),(0,r.kt)("h3",{id:"release"},"Release"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make release-manifest"))),(0,r.kt)("p",null,"Generates k8s manifests files for a release."),(0,r.kt)("p",null,"Configuration Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NEWVERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the new version in the Makefile")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make promote-staging-manifest"))),(0,r.kt)("p",null,"Promotes the k8s deployment yaml files to release."))}d.isMDXComponent=!0}}]);