const router = require('express').Router();

const {
  validationCreateCard, validationDeleteCard, validationLikeCard, validationDislikeCard,
} = require('../middlewares/validation');

const {
  getCard, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/cards', getCard);

router.post('/cards', validationCreateCard, createCard);

router.delete('/cards/:cardId', validationDeleteCard, deleteCard);

router.put('/cards/:cardId/likes', validationLikeCard, likeCard);

router.delete('/cards/:cardId/likes', validationDislikeCard, dislikeCard);

module.exports = router;
