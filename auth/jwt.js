const passportJWT = require('passport-jwt');
const User = require('./user');
const authConfig = require('./config');

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;


const options = {};

options.secretOrKey = authConfig.secret;
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.jsonWebTokenOptions = {
  maxAge: '1hr',
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  console.log(payload);
  const { user_id, email, username } = payload;

  return User.findOne('user_id', user_id)
    .then((user) => {
      if (!user) return done(null, false);

      return done(null, {
        user_id,
        email,
        username,
      });
    })
    .catch((err) => {
      console.error(err);
      return done(err);
    });
});

module.exports = jwtStrategy;
