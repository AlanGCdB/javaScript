// 01° Crie uma array com os anos que o Brasil ganhou a copa: 1959,1962,1994,2002.
const copaBrasil = [
    1959,
    1962,
    1994,
    2002
]
console.log(copaBrasil);

// 02° Interaja com o array utilisando um loop para mostrar no console a seguite mensagem, ' ${ano}.
console.log("");

copaBrasil.forEach(function (copaAno) {
    console.log(`O Brasil ganhou a copa de ${copaAno}.`);
});

// 03° Interaja com um loop nas frutas abaixo e pare ao chegar em Pera:
console.log("");

const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melâcia']

for (let contador = 0; contador < frutas.length; contador++) {
    if (frutas[contador] === 'Pera') {
        break
    }
    console.log(frutas[contador]);
}
console.log("");

// 04° Coloque o última fruta do array acima em uma variável sem remover a mesma do array:

const quantidade = frutas[frutas.length - 1]

console.log(quantidade);

for (let contador = 0; contador < frutas.length; contador++) {
    console.log(frutas[contador]);
    
}




