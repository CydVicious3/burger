// controllers get various jobs done we are looking to accomplish

// calls connection to database
const db = require('../config')

// write out functionalities for burger
module.exports = {
  getBurgers(cb) {
    db.query('SELECT * FROM burger', (e, burgers) => {
      if (e) {
        console.log(e)
      }
      cb(burgers)
    })
  },
  addBurger(name, devoured, cb) {
    db.query(`INSERT INTO burger (name, devoured) VALUES ("${name}", ${devoured})`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })


  },
  eatBurger(id, cb) {
    db.query(`UPDATE burger SET devoured = true WHERE id = ${id}`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })

  },
  removeBurger(id, cb) {
    db.query(`DELETE FROM burger WHERE id = ${id}`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  }

}