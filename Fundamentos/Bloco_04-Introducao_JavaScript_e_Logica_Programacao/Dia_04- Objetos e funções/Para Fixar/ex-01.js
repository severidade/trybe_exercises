
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

// Anotação por ponto e tamplate Literals 
console.log(`${car.type}`);

// Colchetes e tamplate Literals
console.log(`A marca do meu carro é ${car['type']}`);

// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    }
};

// para adicionar propriedades 
player['fullName'] = `${player.name} ${player.lastName}`;

console.log(`O nome completo da jogadora é ${player.fullName}`);

// para acessar um objeto dentro de um objeto 
console.log(`${player.medals.golden} é o número de medalhas de ouro da jogadora ${player.name}`)