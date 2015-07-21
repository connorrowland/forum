DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS topics CASCADE;



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
  body TEXT,
  user_id INTEGER references users,
  topic_id INTEGER references topics,
  rating INTEGER
);