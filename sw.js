if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const c=e=>r(e,s),t={module:{uri:s},exports:o,require:c};i[s]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(d(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"df0605465d896bad8191194fea91acc6"},{url:"android-chrome-512x512.png",revision:"43ad6297e22bdeb7e0da8b511799416c"},{url:"apple-touch-icon.png",revision:"2898d12466ec9e9e8dc49c9961b30d21"},{url:"assets/index-BfG6jVbZ.js",revision:null},{url:"assets/index-CIPJtimw.css",revision:null},{url:"favicon-16x16.png",revision:"36997dadd1a1f3fe9e0cf19a774d0441"},{url:"favicon-32x32.png",revision:"691e16d3f198e4d15ceb2ad20dea24ca"},{url:"firebase-messaging-sw.js",revision:"c0ace04bf4b8c153850882bb415e5b7a"},{url:"index.html",revision:"fbf56226e7bfb48df95c13f02f2c6aaf"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-chrome-192x192.png",revision:"df0605465d896bad8191194fea91acc6"},{url:"android-chrome-512x512.png",revision:"43ad6297e22bdeb7e0da8b511799416c"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"manifest.webmanifest",revision:"d61e175e7b9efb9cb9828300bfb2e87b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
