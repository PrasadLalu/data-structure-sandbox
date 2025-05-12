function searchName(students, student) {
    let n = students.length;

    for (let i=0; i<n; i++) {
        if (students[i] === student) {
            return i;
        }
    }
    return -1
}

const students = ['John', 'Peter', 'Jessica', 'Britney', 'Max']
const student = 'Jessica2';
console.log(searchName(students, student));
