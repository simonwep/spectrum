if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const a=e=>n(e,s),d={module:{uri:s},exports:r,require:a};i[s]=Promise.all(o.map((e=>d[e]||a(e)))).then((e=>(c(...e),r)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-8499f7b0.js",revision:null},{url:"assets/index-d539b1ac.css",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"index.html",revision:"0cf2e99e7f7fc21879bf7e99156e55fe"},{url:"icons/maskable-256x256.png",revision:"8dd03e7a38c1609c7ec3b43de826c920"},{url:"icons/maskable-512x512.png",revision:"4a055ea512ecb2177a632beba19f9f39"},{url:"icons/maskable-1024x1024.png",revision:"3373179e0531da072432736c82febd2e"},{url:"icons/android-chrome-192x192.png",revision:"ad75c0d636b5f0e2f71ca76b98e7b788"},{url:"icons/android-chrome-512x512.png",revision:"4a055ea512ecb2177a632beba19f9f39"},{url:"icons/apple-touch-icon.png",revision:"e275f369eac8b4458809dca1651e4654"},{url:"icons/apple-touch-icon-60x60.png",revision:"b757ad0cbc225532f6cac296dc43ffb8"},{url:"icons/apple-touch-icon-76x76.png",revision:"344f9defcc6d529085000b1283b50d96"},{url:"icons/apple-touch-icon-120x120.png",revision:"7c4594458c93f930b185b11d4e34eb4d"},{url:"icons/apple-touch-icon-152x152.png",revision:"39fd1f5be0665978ed5b9470cd4cb972"},{url:"icons/apple-touch-icon-180x180.png",revision:"fe0822a4f30e804be9af05b23af79767"},{url:"icons/favicon-16x16.png",revision:"7f26921c4b7ee18eb2c6e70b3e5e30f6"},{url:"icons/favicon-32x32.png",revision:"17107b3085fa069e0aabd0dcf3517228"},{url:"icons/msapplication-icon-144x144.png",revision:"db69fb8f25dba5d436eadc8dd7e81b2d"},{url:"icons/mstile-150x150.png",revision:"9c6986006a1d167e5356ba79900b456d"},{url:"favicon.ico",revision:"84f6ff7d11f95c22ade545fe8002a0c3"},{url:"manifest.webmanifest",revision:"35f68d059ad529bb64de82a04e4304e6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));