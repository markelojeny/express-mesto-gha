const User = require('../models/user');
const {
  CREATED, NOT_FOUND, OK, DATA_ERROR, SERVER_ERROR,
} = require('../utils/errors');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
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

module.exports.getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        res.status(NOT_FOUND).send({
          message: 'Пользователь с указанным _id не найден',
        });
      } else {
        res.status(OK).send(user);
      }
    })
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

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(CREATED).send({ data: user }))
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

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  const owner = req.user._id;
  User.findByIdAndUpdate(owner, { name, about }, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        res.status(NOT_FOUND).send({
          message: 'Пользователь с указанным _id не найден',
        });
      } else {
        res.status(OK).send(user);
      }
    })
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

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  const owner = req.user._id;
  User.findByIdAndUpdate(owner, { avatar }, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        res.status(NOT_FOUND).send({
          message: 'Пользователь с указанным _id не найден',
        });
      } else {
        res.status(OK).send(user);
      }
    })
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
