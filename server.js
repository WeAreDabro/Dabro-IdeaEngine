// requiring all the needed dependencies on which the server will run
const express = require('express');
const methodOverride = require('method-override');
const pgp = require('pg-promise');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();


// acquiring PORT & selecting the environment
const PORT = process.env.PORT || 3000;

// logging the dependencies
// setting up logger
app.use(logger('dev'));
app.use(methodOverride('_method'));

// setting up body-parser
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// setting up static files
app.use(express.static(path.join(__dirname, 'public')));

// setting the routes & request handlers
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Igenio',
  });
});

// Igenio API routes to use when needed
// currently commented out to avoid errors
// const igenioRouter = require('./routes/igenio-route');
// app.use('/api/igenio', igenioRouter);

// error handling
app.get('*', function(req, res) {
  res.status(404).send({ message: 'Not Found' });
});

// Listening on PORT
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});

