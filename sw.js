const CACHE_NAME = 'nutrition-battle-v1';
const host = 'https://dwivedineeraj.github.io/fruitsvsvegetables/';
// const host = './';
const urlsToCache = [
  host,
  host + 'index.html',
  host + 'frontend/game-ui.js',
  host + 'frontend/manifest.json',
  host + 'frontend/styles.css',
  host + 'tailwindcomplete.js',
  host + 'starting.jpg',
  host + 'frontend/icons/icon.jpg',
  host + 'frontend/icons/icon-512.jpg',
  host + 'frontend/icons/icon-192.jpg',
  host + 'frontend/icons/icon-144.jpg',
  host + 'frontend/icons/icon-72.jpg',
  host + 'frontend/images/gameplay.jpg',
  host + 'frontend/images/gameplay_wide.jpg',
  host + 'frontend/icons/icon-192.png',
  host + 'frontend/icons/icon-512.png',
  host + 'frontend/icons/icon-144.png',
  host + 'frontend/icons/icon-72.png'
];

// Install event - cache resources
// self.addEventListener('install', event => {
//   console.log('Service Worker: Installing...');
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => {
//         console.log('Service Worker: Caching files');
//         return cache.addAll(urlsToCache);
//       })
//       .then(() => {
//         console.log('Service Worker: Installation complete');
//         return self.skipWaiting();
//       })
//   );
// });

self.addEventListener('install', event => {
  console.log('[SW] Install event started.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Attempting to cache core assets:', urlsToCache);
        return cache.addAll(urlsToCache)
          .then(() => {
            console.log('[SW] All core assets were successfully cached.');
          })
          .catch(error => {
            console.error('[SW] ERROR: Failed to cache one or more core assets during install. This is likely why beforeinstallprompt is not firing. Details:', error);
            // IMPORTANT: To ensure the install fails clearly if caching fails, re-throw the error.
            // If we don't re-throw, the SW might activate but be in a broken state for PWA installability.
            throw error; 
          });
      })
      .then(() => {
        console.log('[SW] Caching process completed and self.skipWaiting() will be called.');
        return self.skipWaiting();
      })
      .catch(error => {
        // This will catch errors from caches.open() itself, or from the re-thrown cache.addAll() error,
        // or from self.skipWaiting().
        console.error('[SW] CRITICAL ERROR during install event. The service worker will likely not install/activate correctly. Error:', error);
        // Ensure install fails if any step above failed critically
        throw error;
      })
  );
});

// Activate event - clean up old caches
// self.addEventListener('activate', event => {
//   console.log('Service Worker: Activating...');
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheName !== CACHE_NAME) {
//             console.log('Service Worker: Deleting old cache:', cacheName);
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     }).then(() => {
//       console.log('Service Worker: Activation complete');
//       return self.clients.claim();
//     })
//   );
// });

self.addEventListener('activate', event => {
  console.log('[SW] Activate event started.');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Old caches deleted. Claiming clients.');
      return self.clients.claim();
    }).then(() => {
      console.log('[SW] Activate event completed successfully, clients claimed.');
    }).catch(error => {
      console.error('[SW] Error during activate event:', error);
    })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // console.log('Service Worker: Fetching:', event.request.url); // Quieter default
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          // console.log('Service Worker: Serving from cache:', event.request.url); // Quieter default
          return response;
        }
        
        // console.log('Service Worker: Fetching from network:', event.request.url); // Quieter default
        return fetch(event.request).then(networkResponse => {
          // Don't cache non-successful responses
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          
          // Clone response to cache
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return networkResponse;
        }).catch(() => {
          // If network fails and no cache, show offline page
          if (event.request.mode === 'navigate') { // More specific check for navigation requests
            console.log('[SW] Network fetch failed for navigation, attempting to serve index.html from cache.');
            return caches.match(host + 'index.html'); // Ensure this path is correct
          }
        });
      })
  );
});

// Background sync for future features
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Could sync game stats or high scores here
      Promise.resolve()
    );
  }
});

// Push notifications (for future features)
self.addEventListener('push', event => {
  console.log('Service Worker: Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'New nutrition challenge available!',
    icon: '/frontend/icons/icon-192.jpg',
    badge: '/frontend/icons/icon-72.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'play',
        title: 'Play Now',
        icon: '/frontend/icons/icon-72.jpg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/frontend/icons/icon-72.jpg'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Nutrition Battle', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'play') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
}); 
