const collection = [50, 2, 3, 4, 25];

const getSum = (accumulator, number) => {
  console.log(`O accumulator é ${accumulator} e o number é ${number}`); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum, 10);
console.log(`------ ${sumNumbers}`); // 15

// Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result , ou seja, no acumulador . Ele é o valor inicial do reduce . Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.