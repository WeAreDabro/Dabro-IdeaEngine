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
    INSERT INTO users (user_id, username, email, passport)
    VALUES ($1, $2, $3, $4),
    RETURNING *`,
    [user.username, user.email, user.passport],
  );
};


module.exports = User;
