// configuration of user database
// database will be responsible for creating users
// Or find users by ID
const dbu = require('../config/configdb');

const User = {};

User.findById = (id) => {
  return dbu.oneOrNone(
    `
    SELECT * FROM users
    WHERE id = $1`,
    [id],
  );
};

User.create = (user) => {
  return dbu.one(
    `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3),
    RETURNING *`,
    [user.username, user.email, user.password],
  );
};


module.exports = User;
