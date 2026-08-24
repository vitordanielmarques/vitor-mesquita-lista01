/*
Defina um vetor de 5 elementos inteiros. Utilize uma
estrutura de repetição para informar qual é o maior 
e o menor valor deste vetor ao usuário.
*/

const vetor = [20, 60, 50, 10, 30];

function maiorMenor(vetor) {
    let maior = vetor[0];
    let menor = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        } else if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

    console.log(`O maior valor é: ${maior}`);
    console.log(`O menor valor é: ${menor}`);

}

maiorMenor(vetor);