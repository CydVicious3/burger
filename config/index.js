// setting up MySQL connection in config file
var mysql = require('mysql2')
var connection

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burger_db'
  })
}
connection.connect()
module.exports = connection