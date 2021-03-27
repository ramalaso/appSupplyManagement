CREATE TABLE products(
   product_id INT GENERATED ALWAYS AS IDENTITY,
   product_name VARCHAR(255) NOT NULL,
   product_quantity INT NOT NULL,
   product_price DECIMAL NOT NULL,
   fk_supplier_id INT REFERENCES suppliers(supplier_id)
);
