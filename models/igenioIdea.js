// configuration of igenio's main database
// it allows users to create, read, update & delete ideas
// IdeaModel to maintain the idea database

const dbi = require('../config/configdb');

// setting user selection happening in the ideas table
const Ideas = {};

// user can select all ideas
Ideas.findAll = () => {
  return dbi.query(
    `
    SELECT * FROM ideas`,
  );
};

// user can search for idea by ID
Ideas.findById = (id) => {
  return dbi.oneOrNone(
    `SELECT FROM ideas
    WHERE id = $1`,
    [id],
  );
};

// user can create an idea
Ideas.create = (idea) => {
  return dbi.one(
    `INSERT INTO ideas (user_id, idea_content)
    VALUES ($1, $2)
    RETURNING * `,
    [idea.user_id, idea.idea_content],
  );
};

// user can update an idea
Ideas.update = (idea) => {
  return dbi.one(
    `UPDATE ideas
    SET
    idea_content = $/idea_content/
    WHERE id = $/id/
    RETURNING * `,
    idea,
  );
};

// user can delete an idea
Ideas.destroy = (id) => {
  return dbi.none(
    `DELETE FROM ideas
    WHERE id = $1`,
    [id],
  );
};

module.exports = Ideas;
