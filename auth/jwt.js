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
  const { id } = payload;

  return User.findOne('user_id', id)
    .then((user) => {
      if (!user) return done(null, false);

      return done(null, { id: user.user_id });
    })
    .catch((err) => {
      console.error(err);
      return done(err);
    });
});

module.exports = jwtStrategy;
