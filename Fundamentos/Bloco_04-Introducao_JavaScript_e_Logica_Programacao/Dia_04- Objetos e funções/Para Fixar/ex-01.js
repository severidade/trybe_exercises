
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

// Anotação por ponto e tamplate Literals 
console.log(`${car.type}`);

// Colchetes e tamplate Literals
console.log(`A marca do meu carro é ${car['type']}`);