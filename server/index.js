const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'loja'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/insert', (req,res)=> {
    const tipo = req.body.tipo;
    const quantidade = req.body.quantidade;
    const tamanho = req.body.tamanho;
    const cor = req.body.cor;

    const sqlInsert = "INSERT INTO dados (tipo, quantidade, tamanho, cor) VALUES (?,?,?,?)"
    db.query(sqlInsert, [tipo, quantidade, tamanho, cor], (err, result) => {
        console.log(err)
    });
});

app.listen(3001, () => {
    console.log('running server');
});