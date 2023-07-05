const router = require('express').Router();

const {
  validationCreateCard, validationDeleteCard, validationLikeCard, validationDislikeCard,
} = require('../middlewares/validation');

const {
  getCard, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/', getCard);

router.post('/', validationCreateCard, createCard);

router.delete('/:cardId', validationDeleteCard, deleteCard);

router.put('/:cardId/likes', validationLikeCard, likeCard);

router.delete('/:cardId/likes', validationDislikeCard, dislikeCard);

module.exports = router;
