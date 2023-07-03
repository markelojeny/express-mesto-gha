const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    minlength: [2, 'Минимальная длина поля "name" - 2'],
    maxlength: [30, 'Максимальная длина поля "name" - 30'],
    required: [true, 'Поле "name" должно быть заполнено'],
  },
  about: {
    type: String,
    minlength: [2, 'Минимальная длина поля "about" - 2'],
    maxlength: [30, 'Максимальная длина поля "about" - 30'],
    required: [true, 'Поле "name" должно быть заполнено'],
  },
  avatar: {
    type: String,
    required: [true, 'Поле "name" должно быть заполнено'],
  },
});

module.exports = model('user', userSchema);
