//-----------------------------------------------------------------------------
////Exemplo1 => webpack
// console.log('uhuu, webpack works! YEAH!');
//-----------------------------------------------------------------------------

////Exemplo2 => commonJS (faz uso do arquivo logger.js)
// const logger = require("./logger");
// logger.info("Usando o padrão CommonJS!!!");
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
////Exemplo3 => Usando ES sem Babel usando classes
// class Pessoa {
//   constructor(nome) {
//     this.nome = nome;
//   }
//   toString() {
//     return `Pessoa: ${this.nome}`;
//   }
// }

// const pessoa = new Pessoa("Pedro");
// console.log(pessoa.toString());
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
////Exemplo4 => Usando ES com Babel usando classes (faz uso do arquivo pessoa.js)
// import Pessoa from "./pessoa";

// const pessoa = new Pessoa("Pedro");
// console.log(pessoa.toString());
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
////Exemplo5 => Interpretando o Operador Spread (Plugin Babel)
// const produto = {
//   nome: "Caneta Bic Preta",
//   preco: 1.9,
//   desconto: 0.05
// };

// const clone = object => {
//   return { ...object };
// };

// const novoProduto = clone(produto);
// novoProduto.nome = "Caneta Bic Azul";

// console.log("produto", produto, "novoProduto", novoProduto);
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
////Exemplo6 => Preset do React e import de css
import "./style.css";
import "react";

export default props => <h1>Olá</h1>;

console.log("React Works! Css works too! 8D");
//-----------------------------------------------------------------------------
