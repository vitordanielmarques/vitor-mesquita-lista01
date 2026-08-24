/*Defina duas variáveis, nome e idade e atribua valores a elas. 
Com base nessas informações, crie uma função que recebe estes 
valores e imprime uma mensagem, indicando se o usuário poderá 
ou não votar esse ano com base em sua idade. */

const nome = "Vitor";
let idade = 23;

function verificacaoVoto(nome, idade) {
    if (idade > 15 ) {
        console.log(`${nome}, você poderá votar este ano.`);
    } else {
        console.log(`${nome}, você não poderá votar este ano.`);
    }
}

verificacaoVoto(nome, idade);

/*Segundo a Resolução do TSE nº 23.659/2021, adolescentes que 
completarão 16 anos até o dia da eleição também podem emitir 
o título de eleitor com antecedência, a partir dos 15 anos. */