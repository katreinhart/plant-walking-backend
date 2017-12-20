// require('dotenv').load()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 2999
const bodyParser = require ('body-parser')
const morgan = require('morgan')
const path = require('path')

const usersRouter = require('./routes/users-router')
const stepsRouter = require('./routes/steps-router')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api/users', usersRouter)
app.use('/api/steps', stepsRouter)

app.use((req, res)=> {
  let status = 404
  let message = `Could not ${req.method}${req.path}`
  res.status(status).json({status, messag})
})

app.listen(port, () => {
  console.log('Listening on port:', port)
})
