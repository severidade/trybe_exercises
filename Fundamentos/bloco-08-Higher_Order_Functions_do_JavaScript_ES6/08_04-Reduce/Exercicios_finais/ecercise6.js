const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notes = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function sumAverage(acc, nota) {
 return acc + nota;
}

function mediaNotas(index) {
  const soma = notes[index].reduce(sumAverage, 0)
  return soma / notes[index].length
}

function studentAverage() {
  return students.reduce((acc, student, index) => {
    const object = {
      nome: student,
      // notes: notes[index].reduce(sumAverage, 0)
      Notas: notes[index], // coloquei de experiencia
      media: mediaNotas(index)
    };
    acc.push(object);
    return acc;
  }, []); 
}

const recived = studentAverage(); // como a função tem somente retorno para exibir é preciso colocar dentro de uma variável. 
console.log(recived);