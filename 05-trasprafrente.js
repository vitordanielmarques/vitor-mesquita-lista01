/*
Defina um vetor de 5 elementos inteiros. Utilize uma
estrutura de repetição para imprimir os elementos do vetor de trás para
frente.
*/

let vetor = [1, 2, 3, 4, 5];

function traspraFrente(vetor) {

    for (let i = vetor.length - 1; i >= 0; i--) {

        console.log(vetor[i]);
    }
}    
traspraFrente(vetor);


//anotações do meu estudo
/*
for (let i = vetor.length - 1; i >= 0; i--) vai até o último elemento do vetor e imprime os elementos do vetor de trás para frente. i>=0.
for (let i = 0; i < vetor.length; i++) vai até o último elemento do vetor e imprime os elementos do vetor de frente para trás. i<vetor.length.
*/