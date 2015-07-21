DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS topics;



CREATE TABLE users(
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255),
  img_url TEXT,
  location TEXT
);
CREATE TABLE topics(
  id SERIAL PRIMARY KEY, 
  name TEXT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY, 
  post_name VARCHAR(255),
  author VARCHAR(255),
  body TEXT,
  rating INTEGER,
  comments TEXT
);
