const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(`O accumulator é ${result} e o number é ${number}`); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

// Agora o resultado mudou para 123 , e o primeiro número impresso foi o 10 . Entendeu? Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result , ou seja, no acumulador . Ele é o valor inicial do reduce . Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.

// Usamos o reduce para somar os elementos do array de números. 