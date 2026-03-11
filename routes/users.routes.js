const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const canViewUsuarios = require('../util/can-view-usuarios');

router.get('/login', usersController.get_login);
router.post('/login', usersController.post_login);
router.get('/signup', usersController.get_signup);
router.post('/signup', usersController.post_signup);
router.get('/logout', usersController.get_logout);
router.get('/list', canViewUsuarios, usersController.get_users);

module.exports = router;