const arrays = [ 
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
console.log(arrays);
  
function flatten() {
  return array.reduce((acumulator, currentvalue) => {acumulator.concat(currentvalue)}, []);
}

console.log(`---- ${arrays}`);