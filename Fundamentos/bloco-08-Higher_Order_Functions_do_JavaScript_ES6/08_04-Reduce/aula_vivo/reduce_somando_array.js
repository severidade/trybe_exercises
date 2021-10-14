const numbers = [32, 15, 3, 2, 56, 10];

const reduceCallback = (acumulator, currentValue) => {
    console.log(`:: O accumulator é ${acumulator} e o number é ${currentValue}`);
    return acumulator + currentValue
}

const sum = numbers.reduce(reduceCallback, 0);

console.log(`A soma total é ${sum}`);