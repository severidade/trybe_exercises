// 01. Jeito tradicional 
// function soma (num1, num2) {
//     return num1 + num2;
// }
// console.log(soma(2,2));

// 02. colocnado dentro de uma veriavel
const soma2 = function (num1, num2) {
    return num1 + num2;
}
console.log(soma2(2,2));

// 03. colocando dentro de uam arrow functions
const soma3 = (num1, num2) => {
    return num1 + num2;
}
console.log(soma3(2,2));

// 04. Como so termos um retorno podemos colocar em uma linha 
const soma4 = (num1, num2) => { num1 + num2;}
console.log(soma3(2,2));