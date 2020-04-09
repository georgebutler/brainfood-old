const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/user')

module.exports = function (passport) {
  const opts = { }
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
  opts.secretOrKey = process.env.SECRET

  passport.use(new JwtStrategy(opts, function (jwtPayload, done) {
    User.findOne({ id: jwtPayload.id }, function (err, user) {
      if (err) {
        return done(err, false)
      }

      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  }))
}
