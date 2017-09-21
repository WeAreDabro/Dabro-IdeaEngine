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


// setting the views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine');

// logging the dependencies
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// setting the routes & request handlers
app.get('/', (req, res) => {
  res.render('index', {
    message: 'welcome',
  });
});

const igenioRouter = require('./routes/igenio-route');

// base route to access all the others
app.use('/home', igenioRouter);

// Listener on PORT
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});

