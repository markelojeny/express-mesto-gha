const router = require('express').Router();
const cardRouter = require('./cards');
const userRouter = require('./users');

const { NOT_FOUND } = require('../utils/errors');

router.use(userRouter);
router.use(cardRouter);

router.use('*', (req, res) => {
  res.status(NOT_FOUND).send({ message: 'Страница не найдена' });
});

module.exports = router;
