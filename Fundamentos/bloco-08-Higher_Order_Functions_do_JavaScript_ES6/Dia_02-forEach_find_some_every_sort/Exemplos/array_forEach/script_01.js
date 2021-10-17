const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];

// function verifyGrades() {
//     for (let i = 0; i < students.length; i += 1) {
//         const student = students[i];
//         if (student.grade >= 60) {
//             student.approved = 'Aprovado';
//         } else {
//             student.approved = 'Recuperação';
//         }
//     }
// }

function verifyGrades(){
    students.forEach((student, index) => {
        if (student.grade >= 60) {
            students[index].approved = 'Aprovado';
        } else {
            students[index].approved = 'Recuperação';
        }
        
    });
}
verifyGrades();
console.log(students);