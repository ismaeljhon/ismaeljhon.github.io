// Kill switch for the service worker registered by the previous (Nuxt PWA) site.
// Browsers re-fetch /sw.js for existing registrations; this version clears the
// old caches, unregisters itself, and reloads open tabs so they load the new site.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
