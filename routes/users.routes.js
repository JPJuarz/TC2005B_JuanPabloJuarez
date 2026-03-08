const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/login', usersController.get_login);
router.post('/login', usersController.post_login);
router.get('/logout', usersController.get_logout);
router.get('/signup', usersController.get_signup);
router.get('/list', usersController.get_users);

module.exports = router;