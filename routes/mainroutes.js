const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/reference', (req, res) => {
    res.render('reference');
});

router.get('/labs', (req, res) => {
    res.render('labs');
});

module.exports = router;