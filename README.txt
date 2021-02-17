//Instalar módulos necessários
...\formulario> npm install
...\server> npm install

//Criar banco de dados
CREATE DATABASE loja;

CREATE TABLE dados (
    id INT AUTO_INCREMENT,
    tipo VARCHAR(100),
    tamanho VARCHAR(3).
    quantidade INT(5),
    cor VARCHAR(20),
    PRIMARY KEY (id)
)