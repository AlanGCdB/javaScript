// 01° Por qual motivo o código abaixo retorna com erros
{
    const cor = 'preto';
    const marca = 'Aicross';
    let portas = 4;
    console.log(cor, marca, portas);
}
console.log("");

//02° Como corrigir o erro abaixo
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

console.log("");

//03° O que fazer para total retorna 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}
const total = 10 *numero;
console.log(total);
