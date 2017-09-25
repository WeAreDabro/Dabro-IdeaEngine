// configuration of user database
// database will be responsible for creating users
// Or find users by ID
// UserModel to maintain the user database
const dbu = require('../config/configdb');

const User = {};

// find user by ID, once the user is identified
// and authenticated will be directed to home page
User.findById = (id) => {
  return dbu.oneOrNone(
    `
    SELECT * FROM users
    WHERE id = $1`,
    [id],
  );
};

// create a new user, that will be registered in Igenio DB
// next time the user logs in it will be identified from the DB
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
