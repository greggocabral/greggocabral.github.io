/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-275846fe63fd601d15e6.js"
  },
  {
    "url": "app-ecdf6be4695df014bdd8.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-afe1a64ff5858ba7a2ff.js"
  },
  {
    "url": "index.html",
    "revision": "add2b6d54c2fe44371ddbbc8dc1dcfd5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2277b230f1e9c0b56ab374b0c5daa8e0"
  },
  {
    "url": "0-63f0150f33ed6532b26c.js"
  },
  {
    "url": "component---src-templates-blog-index-js-fb650935c0af9154c173.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "997c50e0f1f57f47cf1ca017b6d6be9b"
  },
  {
    "url": "component---src-pages-404-js-698c223453615e59e9fd.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "3931897e87f8597a2e727ef2fd19156f"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "691ef2f66494b67bce7170560b2a98fd"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1916126e3a40a651cf144f82f78f1350"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});