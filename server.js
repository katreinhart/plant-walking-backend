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
const userProfilesRouter = require('./routes/user-profiles-router')
const plantInstanceRouter = require('./routes/plant-instance-router')
const plantTypesRouter = require('./routes/plant-types-router')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api/users', usersRouter)
app.use('/api/steps', stepsRouter)
app.use('/api/user-profiles', userProfilesRouter)
app.use('/api/plant-instances', plantInstanceRouter)
app.use('/api/plant-types', plantTypesRouter)

app.use((err, req, res, next) => {
  console.log('error is:', err.err || err);
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next)=> {
  let status = 404
  let message = `Could not ${req.method}${req.path}`
  res.status(status).json({status, message})
})


app.listen(port, () => {
  console.log('Listening on port:', port)
})
