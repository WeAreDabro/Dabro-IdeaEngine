// requiring needed files and dependencies
// setting up routes for the app
const express = require('express');
const igenioController = require('../controllers/igenioController');

const igenioRoutes = express.Router();

// routes and what they should render
igenioRoutes.get('/:id', igenioController.show); // get by id, to show one
igenioRoutes.put('/:id', igenioController.update); // get by id, to update one
igenioRoutes.delete('/:id', igenioController.destroy); // get by id, to delete one

igenioRoutes.get('/', igenioController.index); // show all
igenioRoutes.post('/', igenioController.create); // create one


module.exports = igenioRoutes;
