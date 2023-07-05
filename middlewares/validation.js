const { celebrate, Joi } = require('celebrate');

module.exports.validationUpdateProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
});

module.exports.validationGetUser = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().hex().length(24),
  }),
});

module.exports.validationUpdateAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string(),
  }),
});

module.exports.validationCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().pattern(/ht{2}ps?:\/{2}(w{3}\.)?([0-9a-zA-Z-.])\.([0-9a-zA-Z-._~:/?#@!$&'()*+,;=]*)#?/),
  }),
});

module.exports.validationDeleteCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().pattern(/ht{2}ps?:\/{2}(w{3}\.)?([0-9a-zA-Z-.])\.([0-9a-zA-Z-._~:/?#@!$&'()*+,;=]*)#?/),
  }),
});

module.exports.validationLikeCard = celebrate({
  body: Joi.object().keys({
    _id: Joi.string().required().hex().length(24),
  }),
});

module.exports.validationDislikeCard = celebrate({
  body: Joi.object().keys({
    _id: Joi.string().required().hex().length(24),
  }),
});

module.exports.validationLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports.validationCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});
