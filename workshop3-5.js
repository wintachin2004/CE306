const students = [
    { name: "Ann", score: 85 },
    { name: "Aim", score: 66 },
    { name: "Jim", score: 92 },
    { name: "John", score: 71 },
    { name: "Eve", score: 49 },
    { name: "Eye", score: 89 }
];
function filterPassedStudents(passingScore){
    console.log("นักเรียนที่ผ่าน:");
    
    students.forEach(students =>{
        if (students.score >= passingScore){
            console.log(`Student ${students.name} passed with score ${students.score}`);
        }
    });
}
filterPassedStudents(65);