DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS topics CASCADE;



CREATE TABLE users(
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255),
  -- img_url TEXT, want to display user photo
  location TEXT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY, 
  post_name VARCHAR(255),
  body TEXT,
  topic_id TEXT references topics,
  rating INTEGER
);
CREATE TABLE topics(
  id SERIAL PRIMARY KEY, 
);