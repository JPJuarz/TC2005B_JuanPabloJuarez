exports.get_login = (req, res, next) => {
    res.render('login');
};

exports.post_login = (req, res, next) => {
    req.session.username = req.body.username;
    res.redirect('/labs');
};

exports.get_logout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/users/login');
    });
};