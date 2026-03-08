const User = require('../models/users.model');

// Muestra el form de login
exports.get_login = (req, res, next) => {
    res.render('login', { error: null });
};

// Verifica usuario en la BD
exports.post_login = (req, res, next) => {
    const { username, password } = req.body;

    User.findByUsername(username)
        .then(([rows]) => {
            if (rows.length === 0 || rows[0].password !== password) {
                // Usuario no existe o password incorrecto
                return res.render('login', { error: 'Usuario o contraseña incorrectos' });
            }
            // Login exitoso
            req.session.username = rows[0].username;
            res.redirect('/labs');
        })
        .catch(err => console.log(err));
};

// Muestra form de registro
exports.get_signup = (req, res, next) => {
    res.render('signup', { error: null });
};

// Muestra todos los usuarios
exports.get_users = (req, res, next) => {
    User.fetchAll()
        .then(([rows]) => {
            res.render('users', { users: rows, username: req.session.username || '' });
        })
        .catch(err => console.log(err));
};

// Logout
exports.get_logout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};