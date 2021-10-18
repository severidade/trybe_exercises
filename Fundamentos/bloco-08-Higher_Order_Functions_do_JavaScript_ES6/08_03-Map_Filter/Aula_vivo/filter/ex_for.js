const cities = [
  {state: 'AM', Name: 'Manaus', Region: 'N'},
  {state: 'PA', Name: 'Belém', Region: 'N'},
  {state: 'TO', Name: 'Porto Nacional', Region: 'N'},
  {state: 'MG', Name: 'Nepomuceno', Region: 'SE'},
  {state: 'BA', Name: 'Cachoeira', Region: 'NE'},
  {state: 'PR', Name: 'Curitiba', Region: 'S'},
  {state: 'SP', Name: 'Hortolândia', Region: 'SE'},
  {state: 'RN', Name: 'Touros', Region: 'NE'},
  {state: 'CE', Name: 'Jericoacurara', Region: 'NE'},
  {state: 'TO', Name: 'Três Pedras', Region: 'N'},
  {state: 'MG', Name: 'João Pinheiro', Region: 'SE'}, 
];

const citiesNe = [];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i].Region === 'NE') {
    citiesNe.push(cities[i].Name);
  }
}

console.log(citiesNe);