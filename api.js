require('dotenv').config()
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const {propOr} = require('ramda')
const bodyParser = require('body-parser')
const port = propOr(5000,'PORT',process.env) // process.env.PORT || 5000

app.get('/', ( req, res ) =>   res.send('meow!')     )


app.listen(port, () => console.log('listening on port', port ))
