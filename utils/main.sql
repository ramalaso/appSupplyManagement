CREATE DATABASE suppliers;

CREATE TABLE suppliers (
    supplier_id SERIAL PRIMARY KEY,
    supplier_address VARCHAR(50) NOT NULL,
    supplier_name VARCHAR(100) NOT NULL,
    supplier_contact VARCHAR(100) NOT NULL,
    supplier_details VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO suppliers(supplier_address ,supplier_name ,supplier_contact , supplier_details )
VALUES ('Geowrgetown 132', 'Wilcox inc.', '001-6598325', 'Fruit supplier' ), 
('Washington 653', 'Bront inc.', '001-321653', 'Home things supplier' ),
('Great Canyon 001', 'Restont inc.', '001-987654', 'Fruit supplier' ),