// Kill switch for the service worker the old Gatsby site registered at /sw.js.
// Browsers that still have it installed fetch this file on their next visit;
// it clears the Gatsby caches, unregisters itself, and reloads open tabs so
// they get the current site from the network. Keep this file deployed.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Gatsby named these "gatsby-plugin-offline-<name>-<scope>", with a
      // "-temp" suffix on one of them. Other sites on this origin keep theirs.
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith('gatsby-plugin-offline') && key.includes(self.registration.scope))
          .map((key) => caches.delete(key)),
      );
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url).catch(() => {}));
    })(),
  );
});
