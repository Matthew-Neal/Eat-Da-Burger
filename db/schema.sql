-- Clears DB if already exists
DROP DATABASE IF EXISTS burgers_db;
-- creates/recreates DB 
CREATE DATABASE burgers_db;
USE burgers_db;


-- Drops table
DROP TABLE IF EXISTS burgers;
-- Creates/recreates new/updated table
CREATE TABLE burgers
(
    id INT
    AUTO_INCREMENT NOT NULL PRIMARY KEY,  
    burger_name VARCHAR
    (60) NOT NULL, 
    devoured BOOLEAN DEFAULT false
);

