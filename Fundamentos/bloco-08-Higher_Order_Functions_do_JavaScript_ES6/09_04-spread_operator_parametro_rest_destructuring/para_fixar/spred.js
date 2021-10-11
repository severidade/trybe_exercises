
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'caqui', 'abacatge'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'manga', 'pera'];

const fruitSalad = (fruit, additional) => {
    const customer = { ...fruit, ...additional };
    console.log(customer); 
};

console.log(fruitSalad(specialFruit, additionalItens));