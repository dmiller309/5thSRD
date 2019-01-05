importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
      new RegExp('.*\.(js|html)'),
      workbox.strategies.networkFirst()
    );
}
