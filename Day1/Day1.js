//Exercise 1
function profilecard(){

//First Name
let firstName = "Adeleke";
//Last Name
let lastName = "Boluwatife";
//Age
let age = 25;
//School Name
let schoolName = "Caleb University";

//Grade
let grade = "A"

//Graduated
let isGraduated = false;

//Full Name
let fullName = `${firstName}  ${lastName}`;


//Full Name Length
let fullNameLength = fullName.length 

//Next year Age
let nextYearAge = age + 1;

let validation = age >= 18;

//Output Details
console.log(`----Student Profile----`);
console.log(`Full Name: ${fullName}`);
console.log(`Full Name Length: ${fullNameLength} character`);
console.log(`Age: ${age}  (Next Year: ${nextYearAge})`);
console.log(`School: ${schoolName}`);
console.log(`Grade: ${grade}`);
console.log(`Graduated: ${isGraduated}`);
console.log(`Eligible for voting: ${validation}`);
}


//Exercise 2
function calculator(){

// First Number
let num1 = prompt("Enter First number: ");
// Second Number
let num2 = prompt("Enter Second number: ");
//Addition
let addition = num1 + num2;
//Subtraction
let subtraction = num1 - num2;
//Multiplication
let multiplication = num1 * num2;
//Division
let division = num1 / num2;
//Reminder
let remainder = num1 % num2;
//Exponentiation
let exponentiation = num1 ** num2;
//Average
let average = (num1 + num2) / 2;
//is the first number greater?
let isNum1Greater = num1 > num2;
//Which is the largest number
let larger = num1 > num2 ? num1 : num2;


//Output Display
console.log(`------Calculator-----`);
console.log(`First Number: ${num1}`);
console.log(`Second Number: ${num2}`);
console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);
console.log(`Reminder: ${remainder}`);
console.log(`Exponentiation: ${exponentiation}`);
console.log(`Average: ${average}`);
console.log(`Is Num1 Greater than Num2: ${isNum1Greater}`);
console.log(`Between ${num1} and ${num2} the larger number is: ${larger}`);
    
}


