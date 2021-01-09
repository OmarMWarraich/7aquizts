var CACHE_NAME = 'my-site-cache-v1';
var quizUrlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/1.chunk.js',
  "/main.82d6fc6c755ade7abbfc.hot-update.js",
  "/index.html",
  // "/sw.ts",
  "/sockjs-node",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  '/static/media/BgQuiz.82a4c47a.jpg'
  // 'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(quizUrlsToCache);
      }).catch((err) => {
        console.log("Err", err);
      })
  );
});

this.addEventListener("fetch",(event)=>{
  if(!navigator.onLine){
      event.respondWith(
          caches.match(event.request).then((resp)=>{
              if(resp){
                  return resp; 
              }
              let requestUrl=event.request.clone();
              fetch(requestUrl)
          })
      )
  }
})