const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    constructor(mi_username, mi_password, mi_nombre) {
        this.username = mi_username;
        this.password = mi_password;
        this.nombre = mi_nombre;
    }

    // Usa el procedure RegistrarUsuario
    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute('CALL RegistrarUsuario(?, ?, ?)',
                [this.username, password_cifrado, this.nombre]
            );
        }).catch((error) => {
            console.log(error);
        });
    }

    // Usa el procedure ObtenerUsuarioConRol
    static fetchOne(username) {
        return db.execute('CALL ObtenerUsuarioConRol(?)', [username]);
    }

    // Usa el procedure ObtenerPermisosDeUsuario
    static fetchPermisos(user_id) {
        return db.execute('CALL ObtenerPermisosDeUsuario(?)', [user_id]);
    }

    static fetchAll() {
        return db.execute('SELECT id, username, nombre FROM users');
    }
};