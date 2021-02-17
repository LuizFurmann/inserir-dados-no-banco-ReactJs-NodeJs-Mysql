import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    const [tipo, setTipo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [cor, setCor] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/api/insert', {
            tipo: tipo,
            quantidade: quantidade,
            tamanho: tamanho,
            cor: cor
        }).then(() => {
            alert("successful insert");
        });
        
    }
    return(
    <div className="container">
        <div className="cardtitulo">
            <h1 className="titulo">Inserir produtos</h1>
        </div>
        <form className="form-style-9">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Tipo do produto</label>
                    <select className="form-control"
                    onChange={(e) => {
                        setTipo(e.target.value)
                    }}>
                        <option>Escolha</option>
                        <option>Camisa</option>
                        <option>Calça</option>
                        <option>Moletom</option>
                        <option>Jaqueta</option>
                        <option>Bermuda</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label>Quantidade de peças</label>
                    <input type="text" className="form-control"
                    onChange={(e) => {
                        setQuantidade(e.target.value)
                    }}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Tamanho</label>
                    <select className="form-control"
                    onChange={(e) => {
                        setTamanho(e.target.value)
                    }}>
                        <option>Escolha</option>
                        <option>P</option>
                        <option>M</option>
                        <option>G</option>
                        <option>GG</option>
                    </select>
                </div>
                
                
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Cor</label>
                    <select className="form-control"
                    onChange={(e) => {
                        setCor(e.target.value)
                    }}>
                        <option>Azul</option>
                        <option>Branco</option>
                        <option>Cinza</option>
                        <option>Preto</option>
                        <option>Verde</option>
                        <option>Vermelho</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-primary" onClick={register}>Enviar</button>
        </form>
    </div>
    )
}

export default App;