create database clientes;

use clientes;

create table cliente(
	id_cliente integer not null primary key AUTO_INCREMENT,
    nombre_cliente varchar(100)
);

INSERT INTO cliente(id_cliente,nombre_cliente) VALUES(1,'Cliente 1');



