const express = require('express');
const router = express.Router();
const labsController = require('../controllers/labs.controller');
const isAuth = require('../util/is-auth');

// Lista de labs
router.get('/', labsController.get_list);

// Lab individual
router.get('/:labId', labsController.get_lab);

module.exports = router;