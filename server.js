// requiring all the needed dependencies on which the server will run
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Twit = require('twit');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
// added these dependencies for authentication
const passport = require('passport');
const jwt = require('./auth/jwt');
const authRoutes = require('./auth/routes');
const errorHandler = require('./auth/middlewares').errorHandler;

const app = express();

// tell passport to use json web tokens instead of sessions.
passport.use(jwt);

// acquiring PORT & selecting the environment
// change port number to 3002 to put conflicts with the React server,
// being on the same port.
const PORT = process.env.PORT || 3001;

// logging the dependencies
// setting up logger
app.use(logger('dev'));
// setting up body-parser
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// added passport middleware for authentication.
app.use(passport.initialize());

// setting up static files
app.use(express.static(path.join(__dirname, 'client/build')));

const igenioRoutes = require('./routes/igenio-route');

app.use('/api/ideas', igenioRoutes, errorHandler);

app.get('/api/twitter', (req, res) => {
  if (process.env.TWITTER_CONSUMER_KEY &&
      process.env.TWITTER_CONSUMER_SECRET) {
    const T = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      app_only_auth: true,
    });

    const params = { q: '"somebody should" OR "someone should" AND "make a" -"liberals" -"snowflakes" -"blocklist" -"account" -"cash app" since:2017-01-01 exclude:replies exclude:retweets', count: 50 };

    const tweetData = (err, data, response) => {
      res.json({
        data,
      });
    };

    T.get('search/tweets', params, tweetData);
  } else {
    res.json({
      message: `Permission denied to use this feature offline.
                Feature only available through live site at https://igenio-dabro.herokuapp.com/`,
    });
  }
});

// Igenio API routes to use when needed
// currently commented out to avoid errors
// const igenioRouter = require('./routes/igenio-route');
// app.use('/api/igenio', igenioRouter);

// add routes for authentication.
app.use('/auth', authRoutes);

// middleware to prevent server from crashing, by appriopately
// handling errors.
app.use(errorHandler);

// Instead of page found, send down the react app to handle any pages.
app.get('*', (req, res) => {
  // Send index.html file which is the entire react app.
  res.sendFile(`${__dirname}/client/build/index.html`);
});

// Listening on PORT
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});

