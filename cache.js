module.exports = {
  staticFileGlobs: [
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/images/**/*',
    '/index.html',
    '/manifest.json'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  runtimeCaching: [
    {
      urlPattern: /\/data\/images\/.*/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxEntries: 50,
          name: 'items-cache'
        }
      }
    }
  ]
};
