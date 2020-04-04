require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
require('./database')

const User = require('./models/user')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize(undefined))
app.use(passport.session(undefined))

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, User.authenticate()), undefined)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
})

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/', indexRouter)
app.use('/users', usersRouter)

module.exports = app
