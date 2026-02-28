const express = require('express');
const router = express.Router();

router.get('/lab1', (req, res) => {
    res.render('questions/lab1');
});

router.get('/lab3', (req, res) => {
    res.render('questions/lab3');
});

router.get('/lab4', (req, res) => {
    res.render('questions/lab4');
});

router.get('/lab5', (req, res) => {
    res.render('questions/lab5');
});

router.get('/lab6', (req, res) => {
    res.render('questions/lab6');
});

router.get('/lab10', (req, res) => {
    res.render('questions/lab10');
});

module.exports = router;