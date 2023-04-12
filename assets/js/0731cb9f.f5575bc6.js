"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:8,sidebar_label:"Plugins Examples"},s="Web and Desktop application examples",r={unversionedId:"plugin-examples",id:"plugin-examples",title:"Web and Desktop application examples",description:"Changing the sidebar color when entering the module, and resetting the color when leaving it",source:"@site/docs/plugin-examples.md",sourceDirName:".",slug:"/plugin-examples",permalink:"/euc-plugins-js-sdk/docs/plugin-examples",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugin-examples.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Plugins Examples"},sidebar:"tutorialSidebar",previous:{title:"EUC Plugins SDK",permalink:"/euc-plugins-js-sdk/docs/sdk"},next:{title:"Softphone Examples",permalink:"/euc-plugins-js-sdk/docs/softphone-examples"}},l={},p=[{value:"Changing the sidebar color when entering the module, and resetting the color when leaving it",id:"changing-the-sidebar-color-when-entering-the-module-and-resetting-the-color-when-leaving-it",level:3},{value:"Displaying a modal for incoming calls",id:"displaying-a-modal-for-incoming-calls",level:3},{value:"Send and receive message between backgroundScript and tabs",id:"send-and-receive-message-between-backgroundscript-and-tabs",level:3},{value:"Adding a settings menu",id:"adding-a-settings-menu",level:3},{value:"Displaying local and remote video as miniature",id:"displaying-local-and-remote-video-as-miniature",level:3},{value:"Configuring and playing sounds",id:"configuring-and-playing-sounds",level:3},{value:"Adding a tab in the PBX dashboard page",id:"adding-a-tab-in-the-pbx-dashboard-page",level:3},{value:"Adding a new tab in the PBX user edition form",id:"adding-a-new-tab-in-the-pbx-user-edition-form",level:3}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-and-desktop-application-examples"},"Web and Desktop application examples"),(0,o.kt)("h3",{id:"changing-the-sidebar-color-when-entering-the-module-and-resetting-the-color-when-leaving-it"},"Changing the sidebar color when entering the module, and resetting the color when leaving it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// background.js\napp.onAppUnLoaded(tabId => {\n  if (tabId === 'sidebar-color') {\n    app.openLeftPanel();\n    app.resetNavBarColor();\n  }\n})\n  \n// tab.js\n(async () => {\n  await app.initialize();\n  app.closeLeftPanel();\n  app.changeNavBarColor('#8e6a3a');\n})();\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/sidebar-color"},"\ud83d\udc40 See full example")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/sidebar-color/manifest.json",target:"_blank"},"\ud83c\udfa8 Try changing the sidebar !"),(0,o.kt)("h3",{id:"displaying-a-modal-for-incoming-calls"},"Displaying a modal for incoming calls"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// backgroundScript\napp.onCallIncoming = async call => {\n  app.displayModal({\n    title: `Incoming call for ${call.displayName}`,\n    text: `Client number: ${call.number}`,\n    height: '50%',\n    width: '70%',\n  });\n};\n\nawait app.initialize();\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/incoming-call-modal"},"\ud83d\udc40 See full example")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/incoming-call-modal/manifest.json",target:"_blank"},"\u260e\ufe0f Try the incoming call modal !"),(0,o.kt)("h3",{id:"send-and-receive-message-between-backgroundscript-and-tabs"},"Send and receive message between backgroundScript and tabs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// tab\napp.onIframeMessage = (msg) => {\n  console.log('onIframeMessage', msg);\n}\n\n(async () => {\n  await app.initialize();\n  app.sendMessageToBackground({ value: 'ping', myData: 'abcd' });\n})();\n\n// backgroundScript\napp.onBackgroundMessage = msg => {\n  console.log('onBackgroundMessage', msg);\n  app.sendMessageToIframe({ value: 'pong', customerId: 1234 });\n}\n\napp.initialize();\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/iframe-bg-messaging"},"\ud83d\udc40 See full example")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/iframe-bg-messaging/manifest.json",target:"_blank"},"\ud83d\udce3 Try messaging background \u2194\ufe0f tab"),(0,o.kt)("h3",{id:"adding-a-settings-menu"},"Adding a settings menu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "settings-tab",\n    "context": [\n      "settingsTab"\n    ],\n    "position": 1001,\n    "name": "My settings",\n    "contentUrl": "./tab.html",\n    "icon": "./tab.svg"\n  }\n]\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/settings-menu"},"\ud83d\udc40 See full example")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/settings-menu/manifest.json",target:"_blank"},"\ud83d\udce3 Try adding a new settings menu"),(0,o.kt)("h3",{id:"displaying-local-and-remote-video-as-miniature"},"Displaying local and remote video as miniature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const createVideoWithStream = stream => {\n  const video = document.createElement('video');\n  video.style.position = 'absolute';\n  video.style.width = '100px';\n  video.style.height = '60px';\n  video.style.top = '20px';\n  video.autoplay = true;\n\n  video.srcObject = stream;\n  video.muted = true;\n\n  video.onloadedmetadata = () => {\n    const tracks = stream.getVideoTracks();\n    tracks.forEach(track => {\n      track.enabled = true;\n      track.loaded = true;\n    });\n  };\n\n  document.body.appendChild(video);\n\n  return video;\n}\n\napp.onCallAnswered = (call) => {\n  if (app.hasLocalVideoStream(call)) {\n    local = createVideoWithStream(app.getLocalCurrentVideoStream(call));\n    local.style.right = '10px';\n  }\n\n  if (app.hasRemoveVideoStream(call)) {\n    remote = createVideoWithStream(app.getRemoteVideoStream(call));\n    remote.style.right = '150px';\n  }\n};\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/video-pip"},"\ud83d\udc40 See full example")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/video-pip/manifest.json",target:"_blank"},"\ud83c\udfa5 Try displaying videos as miniatures in a video call"),(0,o.kt)("h3",{id:"configuring-and-playing-sounds"},"Configuring and playing sounds"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.initialize();\n\napp.configureSounds({\n  message: 'https://audio-previews.elements.envatousercontent.com/files/156322809/preview.mp3'\n});\n\nsetTimeout(() => {\n  // You can now play this custom sound, or receive a message in WDA to hear this sound.\n  // In a setTimeout to avoid chrome restriction about sound playing without user interaction: https://developer.chrome.com/blog/autoplay\n  app.playNewMessageSound();\n}, 2000);\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/configure-sounds"},"\ud83d\udc40 See full example")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/configure-sounds/manifest.json",target:"_blank"},"\ud83c\udfba Try configuring the application sounds"),(0,o.kt)("h1",{id:"portal"},"Portal"),(0,o.kt)("h3",{id:"adding-a-tab-in-the-pbx-dashboard-page"},"Adding a tab in the PBX dashboard page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(async () => {\n  await app.initialize();\n  const context = app.getContext();\n  \n  document.getElementById('name').innerHTML = context.app.extra.record.auth.username;\n})();\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/portal/pbx-dashboard-tab"},"\ud83d\udc40 See full example")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://portal.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/portal/pbx-dashboard-tab/manifest.json",target:"_blank"},"\ud83d\udcca Add a tab in the PBX dashboard"),(0,o.kt)("h3",{id:"adding-a-new-tab-in-the-pbx-user-edition-form"},"Adding a new tab in the PBX user edition form"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New pbx user tab (small)",src:n(46146).Z,width:"864",height:"1121"})),(0,o.kt)("p",null,"You may want to create you own page / form in a PBX form.\nSee ",(0,o.kt)("a",{parentName:"p",href:"./portal#adding-tabs-in-a-form"},"This section")," for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(async () => {\n  await app.initialize();\n  const context = app.getContext();\n\n  // You'll find information about the PBX user in `context.app.extra.record`;\n  document.getElementById('name').innerHTML = context.app.extra.record.auth.username;\n})();\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/portal/pbx-user-form-tab"},"\ud83d\udc40 See full example")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://portal.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/portal/pbx-user-form-tab/manifest.json",target:"_blank"},"\ud83d\udc68\u200d\ud83e\uddb0 Add a tab in the PBX user form !"))}d.isMDXComponent=!0},46146:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-custom-pbx-user-tab-71151f31dc858bf69f46c4369339eb42.png"}}]);