

<script>
  if('serviceWorker' in navigator) {
      navigator.serviceWorker
          .register('https://cdn.jsdelivr.net/gh/SazumiVicky/w-pwa@main/sw.js', { scope: '/' })
          .then(function(registration) {
              //console.log('Service Worker Registered');
          });

      navigator.serviceWorker
          .ready
          .then(function(registration) {
              //console.log('Service Worker Ready');
          });
  }
</script>
