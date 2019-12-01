const {
  burger: {
    getBurgers
  }
} = require('../controllers')

module.exports = app => {
  app.get('/', (req, res) => {

    getBurgers(burgers => {
      console.log("get burgers and render", burgers)
      res.render('index', { burger: burgers })
    })
  })
}