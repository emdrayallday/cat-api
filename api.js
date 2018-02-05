require('dotenv').config()
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const {propOr} = require('ramda')
const bodyParser = require('body-parser')
const port = propOr(5000,'PORT',process.env) // process.env.PORT || 5000


const cats = [
 {name: "peanut",
  age: 2,
  gender: "male"}
  ,{name: 'frisky', age: 13, gender: 'female'},{name: 'mac', age: 12, gender: 'male'},
  {name: 'cheese', age: 11, gender: 'female'},
]
app.get('/', ( req, res ) =>   res.send('meow!')     )






app.get('/cats', (req, res) => res.send(cats))





app.listen(port, () => console.log('listening on port', port ))
