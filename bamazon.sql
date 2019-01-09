DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('rubber duck', 'toys', 3, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('baseball', 'sports', 5, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('basketball', 'sports', 25, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('bamazon becho', 'electronics', 75, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('knife set', 'kitchen', 45, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('lamp', 'home goods', 60, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('refrigerator', 'appliances', 500, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('iphone', 'electronics', 1000, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('shovel', 'garden', 10, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('race car', 'toys', 3, 10);