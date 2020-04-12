require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')
const passport = require('passport')
require('./plugins/database')
require('./plugins/passport')(passport)

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const pantriesRouter = require('./routes/pantries')

const app = express()

app.use(cors())
app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(passport.initialize(undefined))
app.use(passport.session(undefined))

app.use('/api/', indexRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/pantries', pantriesRouter)

module.exports = app
