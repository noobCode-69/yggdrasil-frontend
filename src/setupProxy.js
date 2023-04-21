const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://bored-slug-garb.cyclic.app',
      changeOrigin: true,
    })
  );
};
