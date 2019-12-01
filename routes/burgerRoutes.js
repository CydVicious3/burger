const { burger: { getBurgers, addBurger, eatBurger, removeBurger } } = require('../controllers')

module.exports = app => {
  // GET all burgers
  app.get('/burger', (req, res) => {
    getBurgers(burger => {
      res.json(burger)
    })
  })
  // POST one burger
  app.post('/burger', (req, res) => {
    console.log("POST: ", req.body)
    addBurger(req.body.name, req.body.devoured, () => {
      res.sendStatus(200)
    })
  })
  // PUT one burger
  app.put('/burger/:id', (req, res) => {
    eatBurger(parseInt(req.params.id), () => {
      res.sendStatus(200)
    })
  })
  // DELETE one burger
  app.delete('/burger/:id', (req, res) => {
    removeBurger(parseInt(req.params.id), () => {
      res.sendStatus(200)
    })
  })
}