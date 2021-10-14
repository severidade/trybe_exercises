const quote = ['Oi', 'é', 'um', 'belíssimo', 'termo'];

const createFrase = (acumulator, currentValue, index) => {
    // console.log(currentValue);
    // return acumulator;
    // console.log(`${index} || (${acumulator}) é o valor acumulado || ${currentValue}` )
    return `${acumulator} ${currentValue}`;
}
const frase = quote.reduce(createFrase,'');

// const frase = quote.reduce( ()=> {}, ''); // meu template
// const frase = quote.reduce((acumulator, currentValue) => { return `${acumulator} ${currentValue}`;}, '');

console.log(frase);
console.log(quote.join(' '));// como é um array esse forma também é possivel 