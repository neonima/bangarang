!function(){"use strict";const e=1613406101779,t=`cache${e}`,n=["/client/client.0ff8d110.js","/client/index.9c4a71c9.js","/client/MainMenu.d9de453c.js","/client/links.e56aeae5.js","/client/Link.b277f15d.js","/client/WelcomeTitle.3a52d627.js","/client/claims.b9913f08.js","/client/[valuePropositionPageLink].bde2dcae.js","/client/HeaderTitle.9e43233c.js","/client/retreiveValuePropositionFromValuePropositionPageLink.15972755.js","/client/valuePropositions.30979aea.js","/client/BusinessModel.86f9653c.js","/client/DescriptionCard.0c1415e6.js","/client/LandingPageModel.8c02c094.js","/client/MainTitle.ef1df0d0.js","/client/MainSubTitle.f756e415.js","/client/GenericButton.7b182db4.js","/client/[landingPageId].fc7a55f9.js","/client/LeanCanvas.a41ddc0b.js","/client/SignIn.15d583a5.js","/client/currentClaimIdStore.2288747c.js","/client/[claimId].31ea5256.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),i=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),s=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&i.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!c||s||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const i=await n.match(t);if(i)return i;throw e}}(t.request))())}))}();
