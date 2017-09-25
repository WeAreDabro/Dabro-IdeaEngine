// requiring dependencies
const Ideas = require('../models/igenioIdea');

const igenioController = {};

// setting up the controller which handles
// all the requests made by the user
igenioController.index = (req, res) => {
  Ideas.findAll()
    .then((ideas) => {
      res.json({
        message: 'ok',
        data: { ideas },
      });
      console.log(ideas)
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

igenioController.show = (req, res) => {
  Ideas.findById(req.params.id)
    .then((idea) => {
      res.json({
        message: 'ok',
        data: { idea },
      });
    })
    .catch((err) => {
      res.status(400).json({ message: '400', err });
    });
};

igenioController.create = (req, res) => {
  console.log(req.body);
  Ideas.create({
    // id: (req.body.id),
    user_id: (req.body.user_id),
    idea_content: (req.body.idea_content),
  })
    .then((idea) => {
      res.json({ message: 'ok', data: { idea } });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
};

igenioController.update = (req, res) => {
  Ideas.update({
    id: (req.params.id),
    idea_content: (req.body.idea_content),
  })
    .then((idea) => {
      res.json({ message: 'idea updated' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: '500', err });
    });
};

igenioController.destroy = (req, res) => {
  Ideas.destroy(req.params.id)
    .then(() => {
      res.json({ message: 'idea deleted' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: '500', err });
    });
};

module.exports = igenioController;
