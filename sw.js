self.addEventListener('install', () => {
  self.skipWaiting();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed:', err));
}
