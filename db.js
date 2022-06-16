const {DB_HOST,DB_NAME,DB_USER,DB_PASS} = require('./utils/config.js')
const mysql = require('mysql2');

// create the connection to database
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0
});

module.exports = pool