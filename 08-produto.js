/*
 Crie um objeto produto com propriedades nome, preco e
 estoque. Percorra o objeto com for...in e exiba as 
 propriedades e seus valores.
*/
const produto = {
    nome: 'Notebook',
    preco: 3000,
    estoque: 50
};

/* fórmula aí: for (var n in array) {
                    console.log(array[n]);} */

for (const propriedade in produto){
    console.log(`${propriedade}: ${produto[propriedade]}`);
}