CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  price VARCHAR(20)
);

INSERT INTO products(name, price) VALUES('Product 1', '$100');
INSERT INTO products(name, price) VALUES('Product 2', '$200');
