module.exports = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.redirect('/users/login');
    }
    if (!request.session.permisos || !request.session.permisos.includes('ver_labs')) {
        return response.redirect('/users/login');
    }
    next();
}