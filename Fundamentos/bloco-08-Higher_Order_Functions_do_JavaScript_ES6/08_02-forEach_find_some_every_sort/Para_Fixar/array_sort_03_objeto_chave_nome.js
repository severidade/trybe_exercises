// Ordenando objetos usando o Array.sort atraves da chave nomes. 
// Para ordenar pela chave idade basta mudar as chaves na linha 14

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  //ordenando de forma crescente
  people.sort(function(a, b) {
      if (a.name < b.name) {
          return -1;
      } else {
          return true;
      }
  });

  //ordenando de forma decrescente
  // people.sort(function(a, b) {
  //   if (a.name > b.name) {
  //       return -1;
  //   } else {
  //       return true;
  //   }
  // });

  console.log(people);
  // https://www.youtube.com/watch?v=yc0TYlnZIp4