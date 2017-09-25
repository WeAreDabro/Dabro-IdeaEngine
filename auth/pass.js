// NOTE: password should never be stored in a database as is.

// Therefore we must perform some form of action of them to encrypt them.
// Bcrypt module handles all of the hashing and salting of a password.
// Hashing a password is the process of encrypting a password with a special alogrithm.
// Salting a password adds a even stronger encryption by encrypting the hashed password.
const bcrypt = require('bcrypt-as-promised');

// Pass object will reference to bcrypt's method and a createPass method.
const Pass = {};

Pass.comparePass = bcrypt.compare;
Pass.hashPass = bcrypt.hash;
Pass.genSalt = bcrypt.genSalt;

// Using es6 promises, this function first creates a randomly
// generated salt (random string of letters), then creates a hashed password
// using that salt and returns that hashed password.
Pass.createPass = password =>
  Pass.genSalt()
    .then(salt => Pass.hashPass(password, salt))
    .catch(console.error);

module.exports = Pass;
