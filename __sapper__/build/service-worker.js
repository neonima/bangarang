!function(){"use strict";const e=1614544371762,t=`cache${e}`,n=["/client/client.722f48fc.js","/client/index.81eb6776.js","/client/MainMenu.df0c3513.js","/client/WelcomeTitle.7e9de8c5.js","/client/GenericButton.c9cf6c1c.js","/client/Link.f1735aed.js","/client/links.755f0175.js","/client/linkPrefixes.05019212.js","/client/claims.b9913f08.js","/client/[valuePropositionPageLink].ddbb8d6c.js","/client/retreiveValuePropositionFromValuePropositionPageLink.fe1397da.js","/client/HeaderTitle.27100a69.js","/client/valuePropositions.30979aea.js","/client/BusinessModel.04484e09.js","/client/DescriptionCard.20c0227f.js","/client/DeclareClaim.bc5afc62.js","/client/declaringClaimStore.b7145a6d.js","/client/currentClaimIdStore.ce7c2116.js","/client/[landingPageId].8d8fe88d.js","/client/MainTitle.09e37ff5.js","/client/LeanCanvas.7568e3b9.js","/client/SignIn.4f4c722b.js","/client/GenericTaskNotification.bd49be42.js","/client/[claimId].1ec84ab8.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),i=n.protocol.startsWith("http"),s=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&c.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!i||s||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
