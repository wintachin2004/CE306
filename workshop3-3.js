const students = [
    {name: "Jame", Grade: "A"},
    {name: "Josh", Grade: "B"},
    {name: "Jack", Grade: "C"},
    {name: "Jane", Grade: "F"},
];
students.forEach((student,index)=> {
    console.log(`Student ${index + 1}: ${student.name}, Grade: ${student.Grade}`);
});

function showStudentCount() {
    console.log(`Total students: ${students.length}`);
}
showStudentCount();