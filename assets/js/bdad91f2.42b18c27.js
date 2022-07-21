"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[584912],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,p(p({ref:t},s),{},{components:n})):a.createElement(g,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},940946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(487462),r=(n(667294),n(603905));const o={sidebar_label:"Page.exposeFunction"},p="Page.exposeFunction() method",i={unversionedId:"api/puppeteer.page.exposefunction",id:"version-15.3.2/api/puppeteer.page.exposefunction",title:"Page.exposeFunction() method",description:"The method adds a function called name on the page's window object. When called, the function executes puppeteerFunction in node.js and returns a Promise which resolves to the return value of puppeteerFunction.",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.page.exposefunction.md",sourceDirName:"api",slug:"/api/puppeteer.page.exposefunction",permalink:"/15.3.2/api/puppeteer.page.exposefunction",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"Page.exposeFunction"},sidebar:"sidebar",previous:{title:"Page.evaluateOnNewDocument",permalink:"/15.3.2/api/puppeteer.page.evaluateonnewdocument"},next:{title:"Page.focus",permalink:"/15.3.2/api/puppeteer.page.focus"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pageexposefunction-method"},"Page.exposeFunction() method"),(0,r.kt)("p",null,"The method adds a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," on the page's ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object. When called, the function executes ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteerFunction")," in node.js and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," which resolves to the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteerFunction"),"."),(0,r.kt)("p",null,"If the puppeteerFunction returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", it will be awaited."),(0,r.kt)("p",null,"NOTE: Functions installed via ",(0,r.kt)("inlineCode",{parentName:"p"},"page.exposeFunction")," survive navigations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  exposeFunction(\n    name: string,\n    pptrFunction:\n      | Function\n      | {\n          default: Function;\n        }\n  ): Promise<void>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the function on the window object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pptrFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Function ","|"," { default: Function; }"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback function which will be called in Puppeteer's context.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"An example of adding an ",(0,r.kt)("inlineCode",{parentName:"p"},"md5")," function into the page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\nconst crypto = require('crypto');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('console', msg => console.log(msg.text()));\n  await page.exposeFunction('md5', text =>\n    crypto.createHash('md5').update(text).digest('hex')\n  );\n  await page.evaluate(async () => {\n    // use window.md5 to compute hashes\n    const myString = 'PUPPETEER';\n    const myHash = await window.md5(myString);\n    console.log(`md5 of ${myString} is ${myHash}`);\n  });\n  await browser.close();\n})();\n")),(0,r.kt)("p",null,"An example of adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"window.readfile")," function into the page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\nconst fs = require('fs');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('console', msg => console.log(msg.text()));\n  await page.exposeFunction('readfile', async filePath => {\n    return new Promise((resolve, reject) => {\n      fs.readFile(filePath, 'utf8', (err, text) => {\n        if (err) reject(err);\n        else resolve(text);\n      });\n    });\n  });\n  await page.evaluate(async () => {\n    // use window.readfile to read contents of a file\n    const content = await window.readfile('/etc/hosts');\n    console.log(content);\n  });\n  await browser.close();\n})();\n")))}u.isMDXComponent=!0}}]);