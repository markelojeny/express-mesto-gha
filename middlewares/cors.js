const allowedCors = [
  'http://mesto.marjen.nomoredomains.work',
  'https://mesto.marjen.nomoredomains.work',
  'http://api.mesto.marjen.nomoredomains.work',
  'https://api.mesto.marjen.nomoredomains.work',
  'https://praktikum.tk',
  'http://praktikum.tk',
  'localhost:3000',
];

// eslint-disable-next-line consistent-return
module.exports.cors = ((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;

  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  next();
});
