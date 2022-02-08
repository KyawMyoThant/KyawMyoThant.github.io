'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "8769271e9eb700358c30a10f350efe18",
".git/refs/remotes/origin/main": "8769271e9eb700358c30a10f350efe18",
".git/objects/a3/6372c0806a4d77fb6ac8a9476c024d3b7fe828": "433857190f2feb2369996e77f00eac6e",
".git/objects/56/f77ac05adca649353758891afaf8460b106d93": "0281b5de180c6243885bd4a1766ef776",
".git/objects/5e/00e0263c5c2cd7f17dc8760049332d1458dcb4": "66ca3569f8334a5fc813067f0e5fcf33",
".git/objects/5e/e48756aa09579d23c1a34b8d30057b0183e296": "a872c43e16fd09eee3d9f583d8904936",
".git/objects/1e/a9a568e794793eb21043f304fc37f10f86227e": "0537bed13fe4236c5e9cf846bf4f017a",
".git/objects/d7/3019cd6fa712b13a0b531fe58985dd15d1e2af": "5d07300dc86fc4a0dc3e4c041bb77b5d",
".git/objects/40/23b71671d31619b651a41eb7889261edae574b": "e4ccd70bd8a3ef76f8323d570e9c5be8",
".git/objects/e6/19f4a7b800725d9c7bf45bacc8ea9ea430b2b9": "5d11bf0d50b6de0e11cacc442c68b8fe",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/65/407eec86240e5687af5add68cad38798da9a14": "ebcf2029b14e347b2e0ba8fe484ec61c",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/b2/73e1ca078b7782ef7093a8d90473f4cb6b0a35": "f87fe5aa888dd8582cba8a9d94babeee",
".git/objects/b2/75799688079d463fa02c055a85eecf8ae64258": "ff974e42817efb1403921ce46fae938e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2b/77947cb69f49e9277fae68b5ce787e629dcc13": "d99b27929637bbf92e142463facd260a",
".git/objects/44/86e95aaa40b6153a06be555fb2e636a3ae4cd9": "fc574225e86b47741a3acc039b58ae55",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/979ccea44bec721637e6135d989a73fa9cce5c": "13af42ae552506d2a4a39b24bbe52705",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e9/633e67221a000a11c058060165a610f4f77d12": "786db0746f936fbf93a7b2d2ce7ad3d5",
".git/objects/bd/aee8f88b95a5422d5e34920559cf1639583d1a": "b0626a5b498d8bcaefa2ce87e6ff6620",
".git/objects/67/3312322e243db90be82d08720a223fb2c91cac": "1c52c7ffa6894d214d654590fcecbb5c",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b5/8635b988482f499e54353f773e5d4959054fe7": "d772be28e040c66c5dabd77b82f4ac9f",
".git/objects/9f/0b11d75a9f0f27dc9cfbdf68a21da13b2683d6": "7f08c50744ffe248977e7feec5e9e8c5",
".git/objects/b0/0ef436ad99305a1191fe6818d81e7b36245b05": "5f2b8e75249720f9f322123919531a09",
".git/objects/ec/4d92f67cb988a6bd85ab8176ce0880f9a0aa28": "ed47b8e1e36ddc56ba54b6d4330a8066",
".git/objects/ec/0836e318f7e17245e83541900098da02e6e51c": "2e8d5efd27ee8d323681de021abdc14c",
".git/objects/34/a12f18facade50c36ef13d04921b908a8df0cc": "07ada9d331b4e271715c96f7f42fa1e3",
".git/objects/1d/2244dbe29a061a924184d809ac3cfe0e03c136": "130fe5e33fcbf7ae65eaa3c36ad77d14",
".git/objects/aa/c9cfbb9a4ee66fd0391b121a8aadeaa6b87dfa": "f569d32f96470fa4725a0410734472e0",
".git/objects/64/213dc765476bd1ea8a85e2d41fbeb9b77595f7": "c4d6951eca6eb8c2d376b642dfd8b8bf",
".git/objects/21/0201d9ade6c1030d53c649cdfac7ffe0147243": "5afbf7101d6acd81c0be42888ffaa5ad",
".git/objects/43/10060bb0e071b1b3cd6dd44429e4f4e8b815a8": "bb60895f2f63dcc6d6d6d04c7e5bd32e",
".git/objects/f3/c8ff03633ba9a49c5cecaf24dea983fc128701": "4d6b9e5c6f44583bca8a6f438d71af9b",
".git/objects/b1/7077157dea195b0ac3efb296dcc0b78c3e7e03": "95b0aa6496d4a223ad4918fc12cec1f0",
".git/FETCH_HEAD": "fbaeb923bafd1d4aae8d45fa7675ed32",
".git/logs/refs/remotes/origin/main": "c833fb1e1065aee3a781dcb9879c373d",
".git/logs/refs/heads/main": "790e88c79e03c66981c3ab7baeb54d76",
".git/logs/HEAD": "0c6c9ce855a1a2e44229290c5fa0d9ca",
".git/config": "5a2ca26969dc839389e8a960fe17c808",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "5ef4a8f1008d04e0608a262085e11082",
".git/index": "abe723cef350926e861cc0a0cba4a386",
"LICENSE": "ec2edfa134a4e356f2006b60d7624b7e",
"README.md": "b4b1612d646ba10565db0d02189d6ace",
"assets/AssetManifest.json": "56ee8587f34d1b48d0f4b03da96ddf3f",
"assets/FontManifest.json": "fb5300119ec0889d83eeda4146815725",
"assets/NOTICES": "eab11efc39a1197ac27b5388736c4ee4",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/bogger.jpg": "14f40042e8970ed94b278f44ebd855a2",
"assets/assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/fonts/SourceSansPro-Regular.ttf": "be287df28238fc258575b79e4d496f57",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "31019d1715e7dc486bb8fea6bc6a3896",
"/": "31019d1715e7dc486bb8fea6bc6a3896",
"main.dart.js": "e521fbe442ff4a27d88129d2d65231a0",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "009c9e65172e010890f7f65fde438006",
".github/workflows/firebase-hosting-pull-request.yml": "a53f2861dc3a614a0c151c1cb42cb1f1",
".github/workflows/firebase-hosting-merge.yml": "8174ec3df830b1184cc00431c7764e0c",
"firebase.json": "dc1dc5a10663865a8e144fec0a3cc135",
".firebase/hosting.YnVpbGQvd2Vi.cache": "2974131c80eeed196c5bf74b2bd1143c",
".firebase/hosting..cache": "fb521b9b37dcdcab99f6afde722dba58"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
