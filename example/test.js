// const express = require('../lib/express')\
const express = require('express')
const app = express()
const host = 3000


app.get('/', (req, res, next) => {
  // res.end('hello express')
  console.log(1);
  next()
}, (req, res, next) => {
  console.log(11);
  next()
}, (req, res, next) => {
  console.log(111);
  next()
})

app.get('/', (req, res, next) => {
  console.log(2);
}, (req, res, next) => {
  console.log(22);
  res.end('router end')
})

app.listen(host, () => {
  console.log('start at ', host);
})