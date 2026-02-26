const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasVideojuegos = require('./routes/videojuegos.routes')
app.use('/videojuegos', rutasVideojuegos);

app.use((request, response, next) => {
  response.status(404).send("La pagina que estas buscando no existe (pon /videojuegos)")
});

app.listen(3000);