const mysql = require('mysql');
const host = 'localhost';
const database = 'icem';
const user = 'root';
const password = '';

const conexion = mysql.createConnection({
    host: host,
    database: database,
    user: user,
    password: password,
});

module.exports = conexion;