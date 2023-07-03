const router = require('express').Router();
const {
  getUsers, getUser, updateProfile, updateAvatar, createUser,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:userId', getUser);

router.patch('/users/me', updateProfile);
router.patch('/users/me/avatar', updateAvatar);

router.post('/users', createUser);

module.exports = router;
