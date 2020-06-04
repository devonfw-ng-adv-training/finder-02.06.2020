const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios').default;
const fallback = require('express-history-api-fallback');
const compression = require('compression');
const port = process.env.PORT || 3000;
const staticContentPath = path.join(__dirname, '..', '/dist/air-routes');

app.use(compression());
app.use(noCacheExceptFor(/.*(main|polyfills|runtime).+\.js$/g, /.*styles.+\.css$/g));
app.use(express.static(staticContentPath));

// just for tests
app.get('/api/air-routes', (req, res) => {
  res.json([]);
});

app.use(fallback('index.html', { root: staticContentPath }));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

function noCacheExceptFor(...cachedResourceRegExps) {
  return function noCache(req, res, next) {
    const path = req.path;
    const resourceShouldBeCached = path && cachedResourceRegExps
      && cachedResourceRegExps
        .map(resRegExp => !!path.match(resRegExp))
        .find(matches => matches);
    if (!resourceShouldBeCached) {
      res.setHeader('Surrogate-Control', 'no-store');
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
    next();
  };
}
