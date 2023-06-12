"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[428],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[u]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const o={displayed_sidebar:"pluginsSidebar"},s="E-UC Apps Plugin Examples",r={unversionedId:"plugins/wda-examples",id:"plugins/wda-examples",title:"E-UC Apps Plugin Examples",description:"Changing the sidebar color when entering the module, and resetting the color when leaving it",source:"@site/docs/plugins/wda-examples.md",sourceDirName:"plugins",slug:"/plugins/wda-examples",permalink:"/euc-plugins-js-sdk/docs/plugins/wda-examples",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/wda-examples.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"pluginsSidebar"},sidebar:"pluginsSidebar"},l={},p=[{value:"Changing the sidebar color when entering the module, and resetting the color when leaving it",id:"changing-the-sidebar-color-when-entering-the-module-and-resetting-the-color-when-leaving-it",level:3},{value:"Displaying a modal for incoming calls",id:"displaying-a-modal-for-incoming-calls",level:3},{value:"Send and receive message between backgroundScript and tabs",id:"send-and-receive-message-between-backgroundscript-and-tabs",level:3},{value:"Adding a settings menu",id:"adding-a-settings-menu",level:3},{value:"Displaying local and remote video as miniature",id:"displaying-local-and-remote-video-as-miniature",level:3},{value:"Configuring and playing sounds",id:"configuring-and-playing-sounds",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"e-uc-apps-plugin-examples"},"E-UC Apps Plugin Examples"),(0,i.kt)("h3",{id:"changing-the-sidebar-color-when-entering-the-module-and-resetting-the-color-when-leaving-it"},"Changing the sidebar color when entering the module, and resetting the color when leaving it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// background.js\napp.onAppUnLoaded(tabId => {\n  if (tabId === 'sidebar-color') {\n    app.openLeftPanel();\n    app.resetNavBarColor();\n  }\n})\n\n// tab.js\n(async () => {\n  await app.initialize();\n  app.closeLeftPanel();\n  app.changeNavBarColor('#8e6a3a');\n})();\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/sidebar-color"},"\ud83d\udc40 See full example")),(0,i.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/sidebar-color/manifest.json",target:"_blank"},"\ud83c\udfa8 Try changing the sidebar !"),(0,i.kt)("h3",{id:"displaying-a-modal-for-incoming-calls"},"Displaying a modal for incoming calls"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// backgroundScript\napp.onCallIncoming = async call => {\n  app.displayModal({\n    title: `Incoming call for ${call.displayName}`,\n    text: `Client number: ${call.number}`,\n    height: '50%',\n    width: '70%',\n  });\n};\n\nawait app.initialize();\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/incoming-call-modal"},"\ud83d\udc40 See full example")),(0,i.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/incoming-call-modal/manifest.json",target:"_blank"},"\u260e\ufe0f Try the incoming call modal !"),(0,i.kt)("h3",{id:"send-and-receive-message-between-backgroundscript-and-tabs"},"Send and receive message between backgroundScript and tabs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// tab\napp.onIframeMessage = (msg) => {\n  console.log('onIframeMessage', msg);\n}\n\n(async () => {\n  await app.initialize();\n  app.sendMessageToBackground({ value: 'ping', myData: 'abcd' });\n})();\n\n// backgroundScript\napp.onBackgroundMessage = msg => {\n  console.log('onBackgroundMessage', msg);\n  app.sendMessageToIframe({ value: 'pong', customerId: 1234 });\n}\n\napp.initialize();\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/iframe-bg-messaging"},"\ud83d\udc40 See full example")),(0,i.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/iframe-bg-messaging/manifest.json",target:"_blank"},"\ud83d\udce3 Try messaging background \u2194\ufe0f tab"),(0,i.kt)("h3",{id:"adding-a-settings-menu"},"Adding a settings menu"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "settings-tab",\n    "context": [\n      "settingsTab"\n    ],\n    "position": 1001,\n    "name": "My settings",\n    "contentUrl": "./tab.html",\n    "icon": "./tab.svg"\n  }\n]\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/settings-menu"},"\ud83d\udc40 See full example")),(0,i.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/settings-menu/manifest.json",target:"_blank"},"\ud83d\udce3 Try adding a new settings menu"),(0,i.kt)("h3",{id:"displaying-local-and-remote-video-as-miniature"},"Displaying local and remote video as miniature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const createVideoWithStream = stream => {\n  const video = document.createElement('video');\n  video.style.position = 'absolute';\n  video.style.width = '100px';\n  video.style.height = '60px';\n  video.style.top = '20px';\n  video.autoplay = true;\n\n  video.srcObject = stream;\n  video.muted = true;\n\n  video.onloadedmetadata = () => {\n    const tracks = stream.getVideoTracks();\n    tracks.forEach(track => {\n      track.enabled = true;\n      track.loaded = true;\n    });\n  };\n\n  document.body.appendChild(video);\n\n  return video;\n}\n\napp.onCallAnswered = (call) => {\n  if (app.hasLocalVideoStream(call)) {\n    local = createVideoWithStream(app.getLocalCurrentVideoStream(call));\n    local.style.right = '10px';\n  }\n\n  if (app.hasRemoveVideoStream(call)) {\n    remote = createVideoWithStream(app.getRemoteVideoStream(call));\n    remote.style.right = '150px';\n  }\n};\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/video-pip"},"\ud83d\udc40 See full example")),(0,i.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/video-pip/manifest.json",target:"_blank"},"\ud83c\udfa5 Try displaying videos as miniatures in a video call"),(0,i.kt)("h3",{id:"configuring-and-playing-sounds"},"Configuring and playing sounds"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.initialize();\n\napp.configureSounds({\n  message: 'https://audio-previews.elements.envatousercontent.com/files/156322809/preview.mp3'\n});\n\nsetTimeout(() => {\n  // You can now play this custom sound, or receive a message in WDA to hear this sound.\n  // In a setTimeout to avoid chrome restriction about sound playing without user interaction: https://developer.chrome.com/blog/autoplay\n  app.playNewMessageSound();\n}, 2000);\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/configure-sounds"},"\ud83d\udc40 See full example")),(0,i.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/configure-sounds/manifest.json",target:"_blank"},"\ud83c\udfba Try configuring the application sounds"))}u.isMDXComponent=!0}}]);