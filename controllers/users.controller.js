const User = require('../models/users.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        error: error,
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || '',
    });
};

exports.post_login = (request, response, next) => {
    User.fetchOne(request.body.username).then(([rows, fieldData]) => {
        if (rows.length < 1) {
            request.session.error = 'Usuario y/o password no coinciden';
            return request.session.save(() => {
                response.redirect('/users/login');
            });
        }
        bcrypt.compare(request.body.password, rows[0].password).then((doMatch) => {
            if (doMatch) {
                request.session.isLoggedIn = true;
                request.session.username = request.body.username;
                return request.session.save((error) => {
                    return response.redirect('/labs');
                });
            } else {
                request.session.error = 'Usuario y/o password no coinciden';
                return request.session.save(() => {
                    response.redirect('/users/login');
                });
            }
        }).catch((error) => {
            console.log(error);
            next(error);
        });
    }).catch((error) => {
        console.log(error);
        next(error);
    });
};

exports.get_signup = (request, response, next) => {
    response.render('signup', {
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || '',
    });
};

exports.post_signup = (request, response, next) => {
    const usuario = new User(
        request.body.username,
        request.body.password,
        request.body.nombre
    );
    usuario.save().then(() => {
        return response.redirect('/users/login');
    }).catch((error) => {
        console.log(error);
        next(error);
    });
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
};

exports.get_users = (request, response, next) => {
    User.fetchAll()
        .then(([rows]) => {
            response.render('users', {
                users: rows,
                username: request.session.username || '',
                isLoggedIn: request.session.isLoggedIn || '',
            });
        })
        .catch(err => console.log(err));
};