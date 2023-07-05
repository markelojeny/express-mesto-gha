const handlerError = (err, req, res, next) => {
  const { statusCode = 500 } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? `Некорректные данные: + ${err.message}` : err.message });
  next();
};

module.exports = handlerError;
