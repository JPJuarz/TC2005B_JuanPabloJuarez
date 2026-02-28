const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

const mainroutes = require('./routes/mainroutes');
const labsroutes = require('./routes/labsroutes');

app.use('/', mainroutes);
app.use('/labs', labsroutes);

// 404
app.use((req, res) => {
    res.status(404).render('404');
});

// Servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});