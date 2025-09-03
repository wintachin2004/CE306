let age = 20;
let isAdult =(age >= 18) && (age < 65);
let isChild = (age < 18)|| (age > 65);
let notAdult = !isAdult;
console.log("isAdult:", isAdult);
console.log("isChild:", isChild);
console.log("notAdult:", notAdult);

let score = 85;
let grade = (score >= 80) ? "A" : "B"; // score >= 80 ให้ A
console.log("Grade:", grade);