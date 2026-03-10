const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {
    constructor(mi_username, mi_password, mi_nombre) {
        this.username = mi_username;
        this.password = mi_password;
        this.nombre = mi_nombre;
    }

    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                "INSERT INTO users(username, password, nombre) VALUES (?,?,?)",
                [this.username, password_cifrado, this.nombre]
            );
        }).catch((error) => {
            console.log(error);
        });
    }

    static fetchOne(username) {
        return db.execute("SELECT * FROM users WHERE username=?", [username]);
    }

    static fetchAll() {
        return db.execute('SELECT id, username, nombre FROM users');
    }
};