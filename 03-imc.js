/*
Defina duas variáveis numéricas, peso e altura. 
Crie uma função que recebe esses valores e calcula 
o índice de Massa Corporal do usuário, considerando 
a fórmula abaixo. 
Se o IMC estiver entre <18,5 e 24,9> 
a função deve retornar uma mensagem, indicando que 
o usuário está com seu IMC ideal. 
Caso contrário, diga que ele precisa se cuidar.

*/

let altura = 1.68;
let peso = 60;

function calcImc(peso, altura) {
    let imc = peso / altura **2;

    if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Seu Imc é ${imc.toFixed(2)}, você está com seu IMC ideal`)
    } else {
        console.log(`Seu Imc é ${imc.toFixed(2)}, você precisa se cuidar`)
    }
}

calcImc(peso, altura);
