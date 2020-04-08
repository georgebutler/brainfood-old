require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
require('./database')

const User = require('./models/user')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const app = express()

app.use(cors())
app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
opts.secretOrKey = process.env.SESSION_SECRET

passport.use('jwt', new JwtStrategy(opts, function (jwt_payload, done) {
  User.getUserById({ id: jwt_payload.sub }, function (err, user) {
    if (err) {
      return done(err, false)
    }

    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  })
}))
app.use(passport.initialize(undefined))
app.use(passport.session(undefined))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

module.exports = app
