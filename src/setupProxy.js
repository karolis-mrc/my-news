const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    app.use(proxy('/keywords', { target: 'http://localhost:5000' })),
    app.use(proxy('/articles', { target: 'http://localhost:5000' }))
  );
};