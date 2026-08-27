/*
 Defina um vetor de 5 elementos inteiros. Utilize uma 
 estrutura de repetição para calcular a média 
 entre esses elementos e escreva uma mensagem 
 ao usuário informando este valor.
*/

let numeros = [8, 9, 8, 7, 6];
let soma = 0;
let media = 0;

function calcMedia(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    media = soma / numeros.length;
    console.log(`A média dos números é ${media.toFixed(1)}`)
}
calcMedia(numeros);

/* for (inicialização; condição; incremento) 


*/