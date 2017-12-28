// yarn add install
const cors = require('cors');
const ip = require('ip');
const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 1975

const listProduct = [];

// Middleware
app.use(express.static(__dirname + '/publics'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//Router Handler Functions
app.get('/drinks', (req, res) => {
  res.send(listProduct)
})

app.post('/add', (req, res) => {
  listProduct.push(req.body)
  res.send('Send success')
})

app.listen(port, () => {
  console.log(`Server started on ${ip.address()} : ${port}`);
})
