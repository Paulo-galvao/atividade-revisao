const prompt = require('prompt-sync')();
const {adicionar} = require('./crud.js');

while(true) {

    console.log(`
Olá seja bem-vindo! Como podemos lhe ajudar hoje?
-----------------------------
1. Cadastrar novo produto;
2. Listar os produtos;
3. Atualizar um produto;
4. Remover um produto;
0. Sair
-----------------------------`
    );

    const opcao = +prompt();

    switch(opcao) {

        case 1:
            adicionar();
            break;
        case 0:
            console.log("Ok! Obrigado até mais!");
            return;
    }
}

