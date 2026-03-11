const express = require('express');
const router = express.Router();
const labsController = require('../controllers/labs.controller');
const canViewLabs = require('../util/can-view-labs');

// Lista de labs
router.get('/', labsController.get_list);

// Lab individual
router.get('/:labId', labsController.get_lab);

module.exports = router;