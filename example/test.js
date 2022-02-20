const express = require('../lib/express')
const app = express()
const host = 3000


app.get('/', (req, res) => {
  res.end('hello express')
})

app.listen(host, () => {
  console.log('start at ', host);
})