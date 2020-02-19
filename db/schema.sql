DROP DATABASE IF EXISTS friendango;
CREATE DATABASE friendango;
USE friendango;

CREATE TABLE users (
  id INT( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  username VARCHAR( 255 ) NOT NULL,
  email VARCHAR( 255 ) NOT NULL,
  password DATETIME NOT NULL,
);

CREATE TABLE follows (
    id INT( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    followeeID INT( 11 )
    FOREIGN KEY (followeeid)
        REFERENCES users(id)
        ON DELETE CASCADE, 
    followerID INT( 11 )
    FOREIGN KEY (followerid) 
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE reviews (
    id INT( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    IMDBid INT( 11 ) NOT NULL,
    reviewText VARCHAR ( 2000 ) NOT NULL,
    score INT (2) NOT NULL,
    userID INT (5) 
    FOREIGN KEY (userid) 
        REFERENCES users(id)
        ON DELETE CASCADE 
)