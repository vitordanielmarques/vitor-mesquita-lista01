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

/*
    console.log(`Os números em ordem decrescente são: ${vetor}`);

}

traspraFrente(vetor);
*/