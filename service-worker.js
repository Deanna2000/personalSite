"use strict";var precacheConfig=[["/personalSite/index.html","30a703257e0d69e9e26fc8fe211e5ba9"],["/personalSite/static/css/main.3f6c149d.css","4cad991b24737b795a9b538b88a0eaa0"],["/personalSite/static/js/main.c31b0ef8.js","92faeb07332148c9787a8c6408c0774e"],["/personalSite/static/media/APOLogo.0c8dfd58.png","0c8dfd58f1989651493011a11ceb9f7f"],["/personalSite/static/media/GirlScoutLogo.3dbea022.png","3dbea022f3039cb26d5ae2bb1798023f"],["/personalSite/static/media/Lescat.0e1358e9.png","0e1358e964c480da2c3ea4ecb3d24861"],["/personalSite/static/media/athena3.5523b9bd.jpg","5523b9bde88d1201db8b8f9ca3cf3727"],["/personalSite/static/media/borrowviews.66cda821.png","66cda821318826b71052ac52ff5f240d"],["/personalSite/static/media/corefocus.16300e3c.jpg","16300e3c4c017f50b43b8e60339bf2b0"],["/personalSite/static/media/deannalogolarge.c33df8d5.png","c33df8d50606c7192f4d288be2a36e42"],["/personalSite/static/media/funstuff.c3461ca4.jpg","c3461ca4c84f181441790db91bd83e88"],["/personalSite/static/media/funstuff2.d5668ba1.png","d5668ba18ef4e185bf3a75f40a551eaa"],["/personalSite/static/media/funstuff3.17e2a9eb.png","17e2a9eb7c4c7587ccf48226debbae56"],["/personalSite/static/media/githubicon.4d189e75.png","4d189e75adcf3c5ad50595cbefb95b54"],["/personalSite/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/personalSite/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/personalSite/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/personalSite/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/personalSite/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/personalSite/static/media/instagramicon.3a377da2.png","3a377da267aa1a4f7997128f712af1f3"],["/personalSite/static/media/jaycees.b61690ff.png","b61690ff13d0ff41df84a66ca647808b"],["/personalSite/static/media/linkedinicon.3769f69f.png","3769f69fdaa2ce8e541e4ba517607ad8"],["/personalSite/static/media/mctlogogray.f6b7fe09.png","f6b7fe09a01acd96f4fc512d8263cbfe"],["/personalSite/static/media/pinteresticon.5512fb62.png","5512fb620112e9939fe4b1b1aadc9469"],["/personalSite/static/media/studywherelogowhite.e7737aae.png","e7737aae4cc25a990489e974b8b8ceaa"],["/personalSite/static/media/studywhereview.59ae4ccb.png","59ae4ccb2762ac6ed9b29c4a5d94d8b9"],["/personalSite/static/media/twittericon.28d1a34b.png","28d1a34b92ff49782e2fec105b7bd198"],["/personalSite/static/media/wgigraylogo.3c1c5c77.png","3c1c5c77777291f8c24715081b9a7085"],["/personalSite/static/media/zoeathenalester.3f1622d6.jpg","3f1622d628a97e8948ae611d732062a1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/personalSite/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});