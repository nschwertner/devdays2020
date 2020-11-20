const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const name = 'Example server'
const base = '/'
const port = 3000

app.use(cors())
app.use(logger('dev'))

app.get(base, (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`${name} listening at http://localhost:${port}`)
})