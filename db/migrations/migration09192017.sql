\c idea_engine_project;

DROP TABLE IF EXISTS ideas;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(32) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE ideas (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users,
  idea_content TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);
