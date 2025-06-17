CREATE DATABASE techbeer;

USE techbeer;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
    codigo_ativacao VARCHAR(50),
	cnpj CHAR(14)
);


insert into empresa values
(1,'Cervejaria Titos','ABC10','1020304050607');

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	cpf VARCHAR(50),
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

create table  tanque(
id int primary key auto_increment,
fk_empresa int,
tipoCerveja varchar(100),
capacidade decimal (10,2) default (20000),
foreign key (fk_empresa) references empresa(id)
);

INSERT INTO tanque (fk_empresa, tipoCerveja) VALUES (1, 'Artesanal');
INSERT INTO tanque (fk_empresa, tipoCerveja) VALUES (1, 'Artesanal');
INSERT INTO tanque (fk_empresa, tipoCerveja) VALUES (1, 'Artesanal');
INSERT INTO tanque (fk_empresa, tipoCerveja) VALUES (1, 'Artesanal');
INSERT INTO tanque (fk_empresa, tipoCerveja) VALUES (1, 'Artesanal');


create table alertas (
fk_tanque int,
id int,
foreign key (fk_tanque) references tanque(id),
dataHora datetime default current_timestamp);

INSERT INTO alertas (fk_tanque) VALUES (1);
INSERT INTO alertas (fk_tanque) VALUES (1);  -- Alerta para o tanque com id 1
INSERT INTO alertas (fk_tanque) VALUES (1);  -- Alerta para o tanque com id 2
INSERT INTO alertas (fk_tanque) VALUES (1);  -- Alerta para o tanque com id 3
INSERT INTO alertas (fk_tanque) VALUES (2);  -- Alerta para o tanque com id 1
INSERT INTO alertas (fk_tanque) VALUES (3);  -- Alerta para o tanque com id 2
INSERT INTO alertas (fk_tanque) VALUES (4);  -- Alerta para o tanque com id 2

-- Total de alertas gerais
SELECT COUNT(*) AS total_alertas
FROM alertas;

-- Total de alertas para o tanque com id = 1
SELECT COUNT(*) AS alertas_tanque_1
FROM alertas
WHERE fk_tanque = 1;

-- Total de alertas por tanque
SELECT fk_tanque, COUNT(*) AS total_alertas_por_tanque
FROM alertas
GROUP BY fk_tanque;





/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */



insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);