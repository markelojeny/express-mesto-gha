const router = require('express').Router();

const {
  validationUpdateProfile,
  validationUpdateAvatar,
  validationGetUser,
} = require('../middlewares/validation');

const {
  getUsers, getUser, updateProfile, updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', validationGetUser, getUser);
router.get('/me', getUser);

router.patch('/me', validationUpdateProfile, updateProfile);
router.patch('/me/avatar', validationUpdateAvatar, updateAvatar);

module.exports = router;
