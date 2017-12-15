// require('dotenv').load()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const bodyParser = require ('body-parser')
const morgan = require('morgan')
const path = require('path')

const router = require('./routes/users-router')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api', router)

app.use((req, res)=> {
  let status = 404
  let message = `Could not ${req.method}${req.path}`
  res.status(status).json({status, messag})
})

app.listen(port, () => {
  console.log('Listening on port:', port)
})
