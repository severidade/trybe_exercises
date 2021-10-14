const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const omaiornumero = numbers.reduce(getBigger, 0);
console.log(omaiornumero); // 85