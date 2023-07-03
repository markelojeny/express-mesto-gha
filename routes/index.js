const router = require('express').Router();
const cardRouter = require('./cards');
const userRouter = require('./users');

router.use(userRouter);
router.use(cardRouter);

module.exports = router;
