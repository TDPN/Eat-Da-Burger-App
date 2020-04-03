// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.db_host,
    port: process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_db || "burgers_db"
});

// Make connection.
connection.connect();
module.exports = connection;