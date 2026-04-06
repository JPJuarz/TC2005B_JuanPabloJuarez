const express = require('express');
const router = express.Router();
const labsController = require('../controllers/labs.controller');
const canViewLabs = require('../util/can-view-labs');

// Lista de labs
router.get('/', labsController.get_list);

router.get('/lab22', canViewLabs, labsController.get_lab22);       
router.post('/lab22', canViewLabs, labsController.post_lab22);  

// Lab individual
router.get('/:labId', labsController.get_lab);

module.exports = router;