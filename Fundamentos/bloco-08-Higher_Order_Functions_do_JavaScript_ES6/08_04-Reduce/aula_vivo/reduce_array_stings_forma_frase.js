const quote = ['Oi', 'é', 'um', 'belíssimo', 'termo'];

const createFrase = (acumulator, currentValue) => {
    // console.log(currentValue);
    // return acumulator;
    return `${acumulator} ${currentValue}`;
}
const frase = quote.reduce(createFrase, '');

// const frase = quote.reduce( ()=> {}, ''); // meu template
// const frase = quote.reduce((acumulator, currentValue) => { return `${acumulator} ${currentValue}`;}, '');

console.log(frase);