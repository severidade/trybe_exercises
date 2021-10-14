const collection = [1, 2, 3, 4, 25];

const getSum = (accumulator, number) => {
  console.log(`O accumulator é ${accumulator} e o number é ${number}`); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(`------ ${sumNumbers}`); // 15