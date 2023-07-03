const Card = require('../models/card');
const {
  DATA_ERROR, CREATED, SERVER_ERROR, NOT_FOUND, OK,
} = require('../utils/errors');

module.exports.getCard = (req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        res.status(DATA_ERROR).send({ message: `Некорректные данные: + ${err.message}` });
      } else {
        res.status(SERVER_ERROR).send({
          message: 'Внутренняя ошибка сервера',
        });
      }
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        res.status(DATA_ERROR).send({ message: `Некорректные данные: + ${err.message}` });
      } else {
        res.status(SERVER_ERROR).send({
          message: 'Внутренняя ошибка сервера',
        });
      }
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND).send({
          message: 'Карточка с указанным _id не найдена',
        });
      } else {
        res.status(OK).send({ data: card });
      }
    })
    .catch(() => {
      if (!req.params.cardId.isValid) {
        res
          .status(DATA_ERROR)
          .send({ message: 'Некорректный _id карточки' });
      } else {
        res
          .status(SERVER_ERROR)
          .send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND).send({ message: 'Передан несуществующий _id карточки' });
      } else {
        res.status(CREATED).send({ data: card });
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        res.status(DATA_ERROR).send({ message: 'Переданы некорректные данные для постановки лайка' });
      } else {
        res.status(SERVER_ERROR).send({
          message: 'Внутренняя ошибка сервера',
        });
      }
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND).send({ message: 'Передан несуществующий _id карточки' });
      } else {
        res.status(OK).send({ data: card });
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        res.status(DATA_ERROR).send({ message: 'Переданы некорректные данные для удаления лайка' });
      } else {
        res.status(SERVER_ERROR).send({
          message: 'Внутренняя ошибка сервера',
        });
      }
    });
};
