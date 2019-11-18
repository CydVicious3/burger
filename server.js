const express = require('express')
const { join } = require('path')

const app = express()

// -->middleware<--
// use public folder for static assets
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// declaring a templating engine and setting the engine created
app.engine('.hbs', require('express.handlebars')({ extname: '.hbs' }))

// makes files send out a function that takes in a parameter
require('./routes')(app)
app.listen(3000)