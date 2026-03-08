const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { username: req.session.username || '' });
});

router.get('/about', (req, res) => {
    res.render('about', { username: req.session.username || '' });
});

router.get('/reference', (req, res) => {
    res.render('reference', { username: req.session.username || '' });
});

router.get('/ids', (req,res) => { 
    res.render('ids', { username: req.session.username || ''});
})

//router.get('/labs', (req, res) => {
//    res.render('labs', { username: req.session.username || '' });
//});

module.exports = router;