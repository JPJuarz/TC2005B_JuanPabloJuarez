const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


const rutasVideojuegos = require('./routes/videojuegos.routes')
app.use('/videojuegos', rutasVideojuegos);

app.use((request, response, next) => {
  response.status(404).send("La pagina que estas buscando no existe (pon /videojuegos)")
});

app.listen(3000);