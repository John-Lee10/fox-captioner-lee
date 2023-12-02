USE mysql_project_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

CREATE TABLE foxtypes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  breed VARCHAR (100) NOT NULL
);

CREATE TABLE foxcaptions (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  captiontext VARCHAR (100) NOT NULL
);