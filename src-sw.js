workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
/http:\/\/dummy\.restapiexample\.com\/api\/v1\/employees/,
new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
/eyeLoader\.css/,
new workbox.strategies.CacheFirst()
)