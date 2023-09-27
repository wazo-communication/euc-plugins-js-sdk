"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,g=c["".concat(u,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={displayed_sidebar:"pluginsSidebar"},l="Deploying your Plugin",a={unversionedId:"plugins/deploy",id:"plugins/deploy",title:"Deploying your Plugin",description:"As previously mentioned, plugins must be hosted on your own infrastructure. This gives you full control over the technologies you use and when to update your plugin(s).",source:"@site/docs/plugins/deploy.md",sourceDirName:"plugins",slug:"/plugins/deploy",permalink:"/euc-plugins-js-sdk/docs/plugins/deploy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/deploy.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"pluginsSidebar"},sidebar:"pluginsSidebar"},u={},p=[{value:"Where to Deploy",id:"where-to-deploy",level:2},{value:"CORS Enabled",id:"cors-enabled",level:2},{value:"Distributing your Plugin",id:"distributing-your-plugin",level:2},{value:"For E-UC App",id:"for-e-uc-app",level:3},{value:"Enable plugins for specific users",id:"enable-plugins-for-specific-users",level:4},{value:"For E-UC Portal",id:"for-e-uc-portal",level:3}],s={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-your-plugin"},"Deploying your Plugin"),(0,o.kt)("p",null,"As previously mentioned, plugins must be hosted on your own infrastructure. This gives you full control over the technologies you use and when to update your plugin(s)."),(0,o.kt)("h2",{id:"where-to-deploy"},"Where to Deploy"),(0,o.kt)("p",null,"You can deploy your plugin/app anywhere. But it's important to make the plugin accessible publicly from the web. Otherwise, the features of your plugin will not be visible to users."),(0,o.kt)("h2",{id:"cors-enabled"},"CORS Enabled"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," of your application should be served using a CORS-enabled HTTP server. This must be enabled on your infrastructure to allow Wazo Product to fetch the file's content and enable related features."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If not well configured, it will be impossible to install the plugin.")),(0,o.kt)("h2",{id:"distributing-your-plugin"},"Distributing your Plugin"),(0,o.kt)("h3",{id:"for-e-uc-app"},"For E-UC App"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to ",(0,o.kt)("a",{parentName:"li",href:"https://portal.wazo.io"},"E-UC Portal")),(0,o.kt)("li",{parentName:"ul"},"Connect to a stack or location"),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings > Applications > App Configuration"),"."),(0,o.kt)("li",{parentName:"ul"},"If no application is configured, create a new configuration for your application."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("em",{parentName:"li"},"Plugins")," section, insert the URL to your ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json")),(0,o.kt)("li",{parentName:"ul"},"Enjoy!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App configuration",src:n(11744).Z,width:"1300",height:"765"})),(0,o.kt)("h4",{id:"enable-plugins-for-specific-users"},"Enable plugins for specific users"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to a stack or location"),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings > Debugging Tools > Auth. Users"),"."),(0,o.kt)("li",{parentName:"ul"},"Choose your user and then click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Application Configuration")),(0,o.kt)("li",{parentName:"ul"},"If no application is configured, create a new configuration for your application."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("em",{parentName:"li"},"Plugins")," section, insert the URL to your ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json")),(0,o.kt)("li",{parentName:"ul"},"Enjoy!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App configuration for a single user",src:n(52638).Z,width:"1905",height:"934"})),(0,o.kt)("h3",{id:"for-e-uc-portal"},"For E-UC Portal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must be connected to ",(0,o.kt)("a",{parentName:"li",href:"https://portal.wazo.io"},"E-UC Portal")),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Plugins")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Create")," and insert the URL to your ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json")),(0,o.kt)("li",{parentName:"ul"},"Enable the plugin for a customer or globally\n",(0,o.kt)("img",{alt:"Portal Plugin Manifest",src:n(34374).Z,width:"1300",height:"536"})),(0,o.kt)("li",{parentName:"ul"},"Enjoy!")))}c.isMDXComponent=!0},52638:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app-config-portal-user-57ff836540cb04ecedf5a320d6568917.jpg"},11744:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app-config-portal-3b7946c13cc095879119f818f1da6c93.png"},34374:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/plugin-portal-enable-beecadcdd69005749f63f904c33da3c5.png"}}]);