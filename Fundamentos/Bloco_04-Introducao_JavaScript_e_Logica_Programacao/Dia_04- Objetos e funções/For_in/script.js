let cars = ['Saab', 'Volvo', 'BMW'];

// for (const car of cars) {
//   console.log(car);
// }

// for (const index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

let food = ['hamburguer', 'bife', 'acarajé'];

// o for of retorna os itens do array
// for (let position of food) {
//   console.log(position);
// };

// O for in retorna a posição
for (let position in food) {
  console.log(position);
  console.log(food[position]); //aí o for in retorna o objeto
  console.log( position, food[position]); // para ficar na  mesma linha
};