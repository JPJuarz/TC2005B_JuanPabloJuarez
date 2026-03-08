const db = require('../util/database');

module.exports = class User {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    // SELECT un solo registro - buscar por username
    static findByUsername(username) {
        return db.execute(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );
    }

    // SELECT todos los registros
    static fetchAll() {
        return db.execute('SELECT id, username FROM users');
    }
};