let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [4, 6, 12];

// //Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (const number of numbers) {
//     console.log(number);
// }

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let soma = 0;
// for (const number of numbers) {
//     soma += number;
// }
// console.log(soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let soma = 0;
// for (const number of numbers) {
//     soma += number;
// }
// let average = soma / numbers.length;
// console.log(average);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let soma = 0;
//     for (const number of numbers) {
//         soma += number;
//     }
// let average = soma / numbers.length;
//     if (average > 20) {
//         console.log(`A média aritimética da soma dos valores do array é ${average}. Poprtanto, o valor maior que 20 `);
//     } else {
//         console.log(`valor menor ou igual a 20`);
//     }
// console.log(average);

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let higherValue = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (higherValue < numbers[i] ) {
        higherValue = numbers [i];
    } 
}
console.log(`O maior valor do array é ${higherValue}`);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddNumbres = []
for (const number of numbers) {
    if (number %2 !== 0) {
      oddNumbres.push(number);
    }
}

if (oddNumbres === []) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(`O array de números apresenta ${oddNumbres.length} números impares`);
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let theSmaller = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if ( numbers[i] < theSmaller){
    theSmaller = numbers[i];
  }
}
console.log(`O menor número do array é ${theSmaller}`);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
makingArray = [];
for (let i = 1; i <= 25; i += 1) {
  makingArray.push(i);
}

console.log(`Este é o array criado com números até 25 - ${makingArray}`);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let dividido = [];

for (const numOfmakingArray of makingArray) {
  dividido.push(numOfmakingArray / 2);
}

console.log(`Este é o mesmo array acima sendo que cada númeoro foi dividido por 2 - ${dividido}`);