-- Write your Schema Here --

DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db; 
USE customer_db;

CREATE TABLE customers ( 
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30), 
    last_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE customer_order ( 
    id INT NOT NULL AUTO_INCREMENT,
    customer_id INT,
    order_details TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE SET NULL
);