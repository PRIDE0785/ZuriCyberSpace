const CACHE_NAME = 'cyberdesign-v1';
const urlsToCache = [
  '/',
  '/ZuriMultimediaSpace.html',
  '/icon.png',
  '/ZuriCyberSpace.html',
  '/3D Animation.jfif',
  '/IMG-20251119-WA0000.jpg',
  '/IMG-20251119-WA0001.jpg',
  '/JifunzeCyberAcademy.html',
  '/TunzaCyberWorkshop.html',
  '/UIUX Design.jfif',
  '/brand ID.webp',
  '/index.html',
  '/motion graphics.jfif',
  '/productDesign.jfif',
  '/videoProduction.jfif',
  '/virtualforum.html'
    
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});























