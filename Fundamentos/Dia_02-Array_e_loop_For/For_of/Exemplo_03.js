let arrOfNumbers = [10, 20, 30];

let somaFor = 0;
for (let i = 0; i < arrOfNumbers.length; i += 1) {
    somaFor += arrOfNumbers[i];
}
console.log(somaFor);

let somaForOf = 0;
for (const number of arrOfNumbers) {
    somaForOf += number;
}
console.log(somaForOf);

let somaReduce = arrOfNumbers.reduce(function(soma, i) {
    return soma + i;
});
console.log(somaReduce);
