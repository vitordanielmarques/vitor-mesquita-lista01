/* Defina um vetor com 3 valores inteiros e atribua valores a eles.
 Envie-o a uma função, que deve fazer comparações e retornar 
 uma mensagem ao usuário, informando estes números 
 em ordem crescente.*/

 //usando o método sort() do JavaScript
 /*
 let numeros = [8, 5, 2];

 function ordenacaoCrescente(numeros){
    numeros.sort(function(a,b){
        return a - b;
    });
    return `Os numeros em ordem crescente são: ${numeros}`;
 }

 console.log(ordenacaoCrescente(numeros));
*/

 

 //usando o método bubble sort

 let vetor = [8, 5, 2];

function ordenarBubble(vetor) {

    for (let i = 0; i < vetor.length - 1; i++) {

        for (let j = 0; j < vetor.length - 1 - i; j++) {

            if (vetor[j] > vetor[j + 1]) {

                let auxiliar = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = auxiliar;

            }
        }
    }

    return `Os números em ordem crescente são: ${vetor}`;
}

console.log(ordenarBubble(vetor));
