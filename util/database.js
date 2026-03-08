const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tc2005b_portafolio',
    password: ''  
});

module.exports = pool.promise();