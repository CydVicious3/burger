// setting up MySQL connection in config file
module.exports = require('mysql2')
  .createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burger_db'
  })