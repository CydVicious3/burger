// setting up MySQL connection in config file
module.exports = require('mysql2')
  .createConnection({
    host: 'kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'eflk96swry4qcjwz',
    password: 'qzodvhz1oy18258p',
    database: 'jd5ihdwwmkosdua5'
  })