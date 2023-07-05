const router = require('express').Router();

const {
  validationUpdateProfile,
  validationUpdateAvatar,
  validationGetUser,
} = require('../middlewares/validation');

const {
  getUsers, getUser, updateProfile, updateAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:userId', validationGetUser, getUser);
router.get('/users/me', getUser);

router.patch('/users/me', validationUpdateProfile, updateProfile);
router.patch('/users/me/avatar', validationUpdateAvatar, updateAvatar);

module.exports = router;
