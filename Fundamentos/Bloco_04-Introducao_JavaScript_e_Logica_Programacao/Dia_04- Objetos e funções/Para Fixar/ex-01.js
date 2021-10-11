
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

// Anotação por ponto e tamplate Literals 
console.log(`${car.type}`);

// Colchetes e tamplate Literals
console.log(`A marca do meu carro é ${car['type']}`);

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// 1 - Crie um objeto player contendo as variáveis listadas Acima.
// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    }
};

player['fullName'] = `${player.name} ${player.lastName}`; // adicionei a chave nome completo
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]; // Adicionei as chaves

console.log(`A jogadora ${player.name} ${player.lastName} têm ${player.age} anos de idade.`)
console.log(`O nome completo da jogadora ${player.fullName} pode ser acesado pela nova chave criada com os valores da chave name e lastName`);
console.log(`${player.medals.golden} é o número de medalhas de ouro da jogadora ${player.name}`);
console.log(`A jogadora ${player.fullName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`);
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);