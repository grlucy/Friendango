DROP DATABASE IF EXISTS friendango;

CREATE DATABASE friendango;

CREATE TABLE `users` (
  `id` INT( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `username` VARCHAR( 255 ) NOT NULL,
  `email` VARCHAR( 255 ) NOT NULL,
  `password` DATETIME NOT NULL,
  `icon` VARCHAR ( 255 ) NULL,
  `following` INT ( 11 ) NULL
);

CREATE TABLE `follows` (
    `id` INT( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `followeeID` INT( 11 )
    FOREIGN KEY (`followeeid`)
        REFERENCES `users`(`id`)
        ON UPDATE SET NULL
        ON DELETE SET NULL, 
    `followerID` INT( 11 )
    FOREIGN KEY (`followerid`) 
        REFERENCES `users`(`id`)
        ON UPDATE SET NULL
        ON DELETE SET NULL 
);

CREATE TABLE `reviews` (
    `id` INT( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `IMDBid` INT( 11 ) NOT NULL,
    `reviewtext` VARCHAR ( 2000 ) NOT NULL,
    `score` INT (2) NOT NULL,
    `userid` INT (5) 
    FOREIGN KEY (`userid`) 
        REFERENCES `users`(`id`)
        ON UPDATE SET NULL
        ON DELETE SET NULL 
)