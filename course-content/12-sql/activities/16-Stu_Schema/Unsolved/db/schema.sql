-- Write your schema here --
DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;
USE customer_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30),
    category_name VARCHAR(100),
    price INT,
    in_stock BOOLEAN
);

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30)
);