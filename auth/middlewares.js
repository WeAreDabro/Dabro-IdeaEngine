const jwt = require('jsonwebtoken');
const User = require('./user');
const authConfig = require('./config');
const Pass = require('./pass');


module.exports.handleAuthentication = (req, res) => {
  res.json({ user: req.user });
};

module.exports.handleRegister = (req, res, next) => {
  const { password, username, email } = req.body;

  Pass.createPass(password)
    .then(hashedPassword =>
      User.create({
        username,
        email,
        password: hashedPassword,
      }))
    .then((user) => {
      res.json({
        message: 'user successfully created.',
        user,
      });
    })
    .catch(next);
};

module.exports.handleLogin = (req, res, next) => {
  const { username, password } = req.body;

  if (username && password) {
    User.findOne('username', username)
      .then((user) => {
        if (!user) next({ name: 'UserNotFound' });

        Pass.comparePass(password, user.password)
          .then((doesPassMatch) => {
            if (!doesPassMatch) next({ name: 'InvalidPassword' });

            const payload = {
              id: user.user_id,
            };

            const token = jwt.sign(payload, authConfig.secret);

            res.json({ message: 'ok', token });
          })
          .catch(next);
      })
      .catch(next);
  }
};

module.exports.handleLogout = (req, res) => {
  res.json({ action: 'logout' });
};

module.exports.errorHandler = (err, req, res, next) => {
  // console.log(err.name);
  console.error(err);

  // return a error message based on the encountered error.
  const message = ({
    QueryResultError: 'mutliple users with that username. Contact devs to resolve issue',
    MismatchError: 'Invalid Password',
    UserNotFound: 'User not found',
    SyntaxError: err.message,
    error: `Contact devs to resolve issue: ${err.message}`,
  })[err.name] || 'Oops, something went wrong!';

  res.json({ message });
};
