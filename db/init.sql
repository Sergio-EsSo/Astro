CREATE TABLE productos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(120) not null,
    precio decimal(10,2) not null,
);

INSERT INTO productos(nombre, precio) values 
('teclado', 20),
('raton', 15),
('monitor 17', 135);