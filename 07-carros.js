/*
Crie um array chamado carros, onde cada elemento seja 
um objeto com marca, modelo e ano. Exiba no console 
apenas os carros fabricados depois de 2015.
*/

const carros = [
    { marca: 'Toyota', 
      modelo: 'Corolla', 
      ano: 2018 },

    { marca: 'Honda', 
      modelo: 'Civic', 
      ano: 2016 },

    { marca: 'Fiat', 
      modelo: 'Uno', 
      ano: 2006 },

    { marca: 'Chevrolet', 
      modelo: 'Onix', 
      ano: 2017 }
];

/*usei um for of para percorrer o 
array e exibir apenas os carros que atendem a condição.

poderia ser também = const carrosFiltro = carros.filter(carro => carro.ano > 2015)
*/

const carrosFiltro = [];

for (const carro of carros) {
    if (carro.ano > 2015) {
        carrosFiltro.push(carro);
    }
}

console.log(carrosFiltro);