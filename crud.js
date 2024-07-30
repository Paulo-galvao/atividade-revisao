const prompt = require('prompt-sync')();

const produtos = [{nomeProduto: "bone", precoProduto: 1.99}];

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
        console.log("Produto adicionado com sucesso!");
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

function atualizar() {
    if(produtos.length > 0) {

        listar();
        let index = prompt("Qual produto você deseja atualizar? ");
        if(index <= produtos.length && index > 0 && !isNaN(index) ) {
            index--;
            const produto = modelo();
            if(produto != undefined) {
                produtos[index] = produto;
                console.log("Produto atualizado com sucesso!");
            } else {
                console.log("Dados inválidos!");
            }
            
        } else {
            console.log("Dados inválidos!");
        }    

    } else {
        console.log("Ainda não possuímos nenhum produto cadastrado!");
    }
}

function remover() {
    if(produtos.length > 0) {
        
        listar();
        let index = prompt("Qual produto você deseja remover? ");
        if(index <= produtos.length && index > 0 && !isNaN(index)) {
            index--;
            produtos.splice(produtos[index], 1);
            console.log("Produto removido com sucesso!");
        } else {
            console.log("Dados inválidos!");
        }
    
    } else {
        console.log("Ainda não possuímos nenhum produto cadastrado!");
    }
}

module.exports = {adicionar, listar, atualizar, remover};