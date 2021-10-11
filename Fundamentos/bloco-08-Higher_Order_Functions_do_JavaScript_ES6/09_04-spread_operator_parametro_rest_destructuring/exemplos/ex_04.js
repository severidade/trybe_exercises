
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};
  
const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};
  
const customer = { ...people, ...about };
const costumer2 = { ...about, ...people};

console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */

console.log(costumer2);