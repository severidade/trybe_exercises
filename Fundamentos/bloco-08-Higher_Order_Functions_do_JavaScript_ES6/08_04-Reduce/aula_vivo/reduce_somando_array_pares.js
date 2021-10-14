const numbers = [32, 15, 3, 2, 56, 10];

const reduceCallback = (acumulator, currentValue) => {
    if (currentValue % 2 === 0) {
        console.log(`:: O accumulator é ${acumulator} e o numero par ${currentValue}`);
        return acumulator + currentValue;
    }
    return acumulator;
}

const sum = numbers.reduce(reduceCallback, 0);

console.log(`A soma total é ${sum}`);