'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e10db6a88d62adf570c5b7fa16de7453",
"assets/AssetManifest.bin.json": "ed76b5c4940f92e593d5e1210cf6ee22",
"assets/AssetManifest.json": "b3eb0a81af2a937443868a89a951b12f",
"assets/assets/image/123.png": "7e557f1c0864829c54c300d15bee69f4",
"assets/assets/image/a.jpeg": "3bfa882bd126eb4e388c503d33890a60",
"assets/assets/image/aboutus.png": "0c21a7e9580a1900800ded8a2f88e0ad",
"assets/assets/image/apple-pay.png": "8ed30196e39ee689aa2cc5b604da80ee",
"assets/assets/image/auto-rikshaw.png": "b793048f33356c8d1639178af0791024",
"assets/assets/image/automotive.png": "76818e1744d7a1240dcf1e0db53f638f",
"assets/assets/image/automoyive.png": "060955bc88495305066aa10bbfc7d880",
"assets/assets/image/b.jpeg": "7a2aea05aefe035adebdd470360aa83d",
"assets/assets/image/bike.png": "feb9d9536f0485734d2b7a7ca7d5db5e",
"assets/assets/image/booking_car.png": "ad960a4b1ab84a4842fac4193aa426fb",
"assets/assets/image/bus.png": "494c05540ddb461227990b02b3be7767",
"assets/assets/image/c.jpeg": "637a1f1b65eddaf397629fc7b8704fae",
"assets/assets/image/car.png": "990b06cf1a943ec58507a95926c583c4",
"assets/assets/image/car_logo.png": "c70cccd3b4a971a953d8b70372514f00",
"assets/assets/image/car_navigate.png": "46c6576da528b9d4b100f3771506c764",
"assets/assets/image/com.png": "f743201257a980013c200b299ca3b9d9",
"assets/assets/image/d.jpeg": "5467b4289d36795cefc82e9ce4bbeb49",
"assets/assets/image/destination.png": "f25ea9073b3627d9d8890b0ea99df001",
"assets/assets/image/driver.png": "b8ac17c215be21b4b08183962681caf9",
"assets/assets/image/e.jpeg": "1356effb3b31a67e29cd6f13171ea07f",
"assets/assets/image/f.jpeg": "de53c20e26b44f7c71779182b74e5c49",
"assets/assets/image/facbook.png": "2448252d9301cc159fd4a87a1a65f5ca",
"assets/assets/image/fb.png": "a0c9b961efdb77f5910d3e8f0376e62a",
"assets/assets/image/fb1.png": "8f61b6244ac690d734c7753c3dfec26c",
"assets/assets/image/g.jpeg": "6b9ab7cfdcfdc44cfc5fa07e5e3e41c6",
"assets/assets/image/glap.png": "562f67ce5b89f0fd52b82756866f5c6f",
"assets/assets/image/gogle.png": "527e3995089297237553a2e2aa26896c",
"assets/assets/image/google-pay.png": "515fdb5d6b0c72ab7ff1d020715da990",
"assets/assets/image/google.png": "3e26049d9396f49912688a986b4027b8",
"assets/assets/image/h.jpeg": "d8f7214f34f9cff19d9e50ed614036a6",
"assets/assets/image/i.jpg": "2d3edeedec6198a9c3149c14c1f80440",
"assets/assets/image/Image%2520Popular%2520Product%25203.png": "fcbdff37daf1bf2aca91b6bc9323c4ca",
"assets/assets/image/j.jpg": "8b2bee229995ca46b7cbd0525ad92753",
"assets/assets/image/k.jpeg": "ddfbd8b7711974f1fd7b10e8b33469a8",
"assets/assets/image/l.jpeg": "0d77f29a2fe8478be29a27540dfbdb91",
"assets/assets/image/linkdin.png": "8badf797393020b777910e4c5b93b0dc",
"assets/assets/image/logo.png": "b5670eed512601e5d8133a5ce8447152",
"assets/assets/image/m.jpeg": "82630a364a7b692a6ca848903f1e7c21",
"assets/assets/image/marsidge.png": "96a99cb6751bda402ad01b1a35095c23",
"assets/assets/image/mastercard-2.png": "03c20b63d4ffa13484f48fac9d2e32b2",
"assets/assets/image/n.jpeg": "ae7cd84a5ff35f42d740731a4fca0102",
"assets/assets/image/origin.png": "0dcfd1152270cfc7a51cc5745e22ef3f",
"assets/assets/image/Pattern%2520Success.png": "c46441a1f4f1d8913d779178aebc9bfd",
"assets/assets/image/paypal.png": "fdd28064849926e343b82d25e9df0a03",
"assets/assets/image/pngwing.png": "0fa3fe04edf6c0202970f2088edea9e7",
"assets/assets/image/product%25201%2520image.png": "d22ed624beffb93913bb3436bd8f9e6a",
"assets/assets/image/Profile%2520Image.png": "07a16c1fa377ead829efef7e95ffa5c4",
"assets/assets/image/ps4_console_blue_2.png": "f321803db42a1852afeebcc740edae90",
"assets/assets/image/scorpio.png": "62774bd008861c7bcbcdbb2bb5583857",
"assets/assets/image/splash_1.png": "51c064d3f19cf39aee627a3aed744193",
"assets/assets/image/splash_2.png": "3505c07a8ba6b98cd8931f001ff66f71",
"assets/assets/image/splash_3.png": "54b2889511d311463cf331284d9197bb",
"assets/assets/image/success.png": "f80df756b315fbb72670a78e82095c3c",
"assets/assets/image/suv.png": "10eafb242f322f56b2064055f3eb4dd0",
"assets/assets/image/swift.png": "25d15b984ae643b0eae31ec56c27fb76",
"assets/assets/image/toto-rikshaw.png": "bc81d4a6147ef77b1d47d20353464db2",
"assets/assets/image/twitter.png": "784b0ac7955357070d7442b455a1eb85",
"assets/assets/image/uber-go.png": "60820130b6e76116f9661b5aabb3d5c4",
"assets/assets/image/uber-x.png": "436de88f10195891a687f3da46514a7e",
"assets/assets/image/user_logo-removebg.png": "ae5fd4b1bb82d8c0b6e5ab2472fdc2f5",
"assets/assets/image/user_logo.png": "62dbedf097c6cefe99d7375cf1837d81",
"assets/assets/image/visa.png": "e5102f3cf10261b0cf2ddb4c27e66f14",
"assets/assets/image/whatsapp.png": "6bd55184afd26334c98b6ec5ffe60b4e",
"assets/assets/image/wireless%2520headset.png": "dd4c3f943adb93a516441e8068058b2c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e1989e75c110efdcf203e7490430e1ac",
"assets/NOTICES": "5b727cfc5053c864a18a91221f0484c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "17a5139613b35096e49f70c433d78542",
"/": "17a5139613b35096e49f70c433d78542",
"main.dart.js": "d8b616df8712eb839a213c4ad16e442a",
"manifest.json": "0a42f7d926eb8c46a59f49cdeb7c2d81",
"version.json": "a5d17e703cfe424acc2a57782cbe4580"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
