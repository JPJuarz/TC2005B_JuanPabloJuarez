const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' || 
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg') {
        callback(null, true);
    } else {
        callback(null, false);
    }
};

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(session({
    secret: 'xK9#mP2$qL7nW4@vR6jT8uY1',
    resave: false,
    saveUninitialized: false,
}));

const mainroutes = require('./routes/mainroutes');
const labsroutes = require('./routes/labsroutes');
const usersroutes = require('./routes/users.routes');

// Middleware para proteger rutas
const requireLogin = (req, res, next) => {
    if (!req.session.username) {
        return res.redirect('/users/login');
    }
    next();
};

app.use('/', mainroutes);
app.use('/labs', requireLogin, labsroutes);
app.use('/users', usersroutes);

// 404
app.use((req, res) => {
    res.status(404).render('404');
});

// Servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});