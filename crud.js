const prompt = require('prompt-sync')();

const produtos = [];

function modelo() {
    const nomeProduto = prompt("Nome do produto: ");
    const precoProduto = prompt("Preço do produto: ");

    if(nomeProduto != "" && precoProduto != "" && !isNaN(precoProduto)) {
        return {
            nomeProduto,
            precoProduto
        }
    } else {
        return undefined;
    }
}

function adicionar() {
    const produto = modelo();
    
    if(produto != undefined) {
        produtos.push(produto);
    } else {
        console.log("Dados inválidos!");
    }
}

module.exports = {adicionar};