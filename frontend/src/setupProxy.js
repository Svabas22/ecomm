const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://vhost1.localhost:4321', // Replace with your backend URL
      changeOrigin: true,
    })
  );
};