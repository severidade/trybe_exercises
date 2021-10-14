const palyes = [
  { fullName: 'Mariano Oliveira', email: 'ma_i@agamil.com'},
  { fullName: 'Ademar Costa', email: 'ad.costa@uol.com'},
  { fullName: 'José Adelino', email: 'jo@hotmail.com'},
  { fullName: 'Marta Oliveira', email: 'marta@gmail.com'},
];

const funcaoRedux = (acumulator, player ) => {
  acumulator[player.fullName] = player.email;
  return acumulator;
};

const palyesObject = palyes.reduce(funcaoRedux,{});
console.log(palyesObject);


// Transformar um array de jogadores com vários objetos e vamos transformar em um objeto que tem o nome como chave o valor o email