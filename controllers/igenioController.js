// requiring dependencies
const Ideas = require('../models/igenioIdea');

const igenioController = {};

igenioController.index = (req, res) => {
  Ideas.findAll ()
    .then(ideas => {
      res.json({
        message: 'ok',
        data: { ideas },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

igenioController.show = (req, res) => {
  Ideas.findById(req.params.id)
    .then(idea => {
      res.json({
        message: 'ok',
        data: { idea },
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

igenioController.create = (req, res) => {
  Ideas.create({
    id: (req.body.id),
    content: (req.body.content),
  })
  .then(idea => {
    res.json({message: 'ok', data: { idea }});
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({message: '400', err});
  });

igenioController.update = (req, res) => {
  Ideas.update({
    id: (req.body.id),
    content: (req.body.content),
  })
  .then(idea => {
    res.json({message: 'idea updated'});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message: '500', err});
  });
};

igenioController.destroy = (req, res) => {
  Ideas.destroy(req.params.id)
    .then(() => {
      res.json({message: 'idea deleted' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: '500', err});
    });
};

module.exports = igenioController;
