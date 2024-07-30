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

function listar() {
    if(produtos.length > 0) {
        produtos.forEach((produto, index) => {
            console.log(`${index + 1}. \nProduto: ${produto.nomeProduto} \nPreço: ${produto.precoProduto}`);
        })
    } else {
        console.log("Ainda não possuímos nenhum produto cadastrado!");
    }
}

module.exports = {adicionar, listar};