-- no esta normalizada al 100% la db, se puede optimizar mucho mas, pero sisiyaalashingada, el tiempo está corto
-- initialization
DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE test_db;
-- tables
CREATE TABLE medicines(
    -- attributes
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255), 
    detail TEXT,
    admin_route VARCHAR(255),
    untaxed_price FLOAT(10,2),
    taxes_pctge FLOAT(10, 2) DEFAULT 19,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- constraints
    PRIMARY KEY (id)
);
CREATE TABLE images(
    -- attributes
    id INT NOT NULL AUTO_INCREMENT,
    medicine_id INT NOT NULL,
    image_url TEXT,
    -- constraints
    PRIMARY KEY (id),
    FOREIGN KEY (medicine_id) REFERENCES medicines(id)
);
CREATE TABLE sales(
    -- attributes
    id INT NOT NULL AUTO_INCREMENT,
    untaxed_value FLOAT(12,2), 
    total_value FLOAT(12,2),
    sold_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- constraints
    PRIMARY KEY (id)
);
CREATE TABLE sales_detail(
    -- attributes
    id INT NOT NULL AUTO_INCREMENT,
    medicine_id INT NOT NULL,
    medicine_quantity INT NOT NULL,
    sale_id INT NOT NULL,
    -- constraints
    PRIMARY KEY (id),
    FOREIGN KEY (sale_id) REFERENCES sales(id),
    FOREIGN KEY (medicine_id) REFERENCES medicines(id)
);
-- seeding
INSERT INTO medicines (name, detail, admin_route, untaxed_price, taxes_pctge)
VALUES
    ('Vitamina C', 'Caja Con 10 Tiras De Tabletas Masticables C/U - Sabor Mandarina', 'oral', 49400, 19),
    ('Ibuprofeno + Metocarbamol 200/500 mg', 'Caja Con 30 Tabletas Recubiertas', 'oral', 30400, 5),
    ('Noxpirin Plus', 'Caja con 12 Cápsulas COL', 'oral', 12475, 19),
    ('Sal De Frutas Lua Pus Polvo Citrus', 'Caja Con 6 Sobres', 'oral', 16150, 19);
INSERT INTO images (medicine_id, image_url)
VALUES
    (1, 'https://colsubsidio.vteximg.com.br/arquivos/ids/160940/7703763750184.jpg?v=637111981051900000'),
    (2, 'https://www.farmalisto.com.co/90412-large_default/comprar-ibuprofeno-800-mg-caja-con-50-tabletas-recubiertas-rx-precio.jpg'),
    (3, 'https://www.farmalisto.com.co/147873-large_default/noxpirin-plus-caja-con-12-capsulas.jpg'),
    (4, 'https://www.farmalisto.com.co/146125-large_default/comprar-sal-de-frutas-lua-plus-polvo-citrus-caja-con-6-sobres-precio.jpg');
