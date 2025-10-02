
//Task 1
function shopppingList(){
let shoppingList = ["Knife","Gun","Bomb","Rope","Cutlass"];
console.log("shoppingList:", shoppingList)
shoppingList[5] = "Rake"
console.log("New shoppingList:", shoppingList);
let removed = shoppingList.shift();
console.log("Removed item:",removed );
console.log("Updated list:", shoppingList);
console.log("Total number of item:", shoppingList.length);

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i+1}, ${shoppingList[i]}`);
}

console.log("\nChallenge: Formatted shopping list:");
    console.log(formatList(shoppingList));
function formatList(list) {
    let formattedString = "";
    for (let i = 0; i < list.length; i++) {
        formattedString += `${i + 1}. ${list[i]}\n`;
    }
    return formattedString;
}
}
//Task 2
function gradeAnalyzer(){
let grades = [30,21,98,90,89,67,97,45,67,54,87];
console.log("Grades:",grades);

function getAverage(grades){
    let sum =0;
    for (let grade of grades){
        sum += grade;
    }
    return (sum / grades.length)
}

function getHighest(grades) {
    let highest = grades[0];
    for (let grade of grades){
        if (grade > highest) {
            highest = grade;
        }
    }
    return highest;
}

function getLowest(grades){
    let lowest = grades[0];
    for (let grade of grades){
        if (grade < lowest){
            lowest = grade;
        }
    }
    return lowest;
}

function getPassRate(grades){
    let passCount = 0;
    for (let grade of grades){
        if (grade >= 50){
            passCount++;
        }
    }
    let rate = (passCount / grades.length) * 100;
    return rate.toFixed(2) + "%";
}

console.log("--- Student Grades Analyzer ---");
console.log("Grades:", grades.join(", "));
console.log("Average Grade:", getAverage(grades));
console.log("Highest Grade:", getHighest(grades));
console.log("Lowest Grade:", getLowest(grades));
console.log("Pass Rate:", getPassRate(grades));
}

//Task3
function ratingSystem (){
let movies = ["BMF", "Suits", "The Boys", "Atlanta"];
let ratings = [10, 8, 7, 9.5];

// Function to add a new movie and rating
function addMovie(movie, rating) {
  movies.push(movie);
  ratings.push(rating);
  console.log(` Added: "${movie}" with rating ${rating}`);
}

// Function to calculate average rating
function getAverageRating() {
  let sum = 0;
  for (let r of ratings) {
    sum += r;
  }
  return (sum / ratings.length);
}

// Function to find the top-rated movie
function getTopMovie() {
  let highest = ratings[0];
  let topMovie = movies[0];

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > highest) {
      highest = ratings[i];
      topMovie = movies[i];
    }
  }
  return `${topMovie} (Rating: ${highest})`;
}

// Function to print all movies with ratings
function printMovies() {
  console.log("---  Movies List ---");
  for (let i = 0; i < movies.length; i++) {
    console.log(`${movies[i]} → ${ratings[i]}`);
  }
}

// Challenge: Sort movies by rating (highest → lowest)
function sortMovies() {
  let combined = movies.map((movie, i) => {
    return { movie: movie, rating: ratings[i] };
  });

  // Sort by rating descending
  combined.sort((a, b) => b.rating - a.rating);

  console.log("--- Sorted Movies by Rating ---");
  combined.forEach(item => {
    console.log(`${item.movie} → ${item.rating}`);
  });
}

printMovies();
console.log(" Average Rating:", getAverageRating());
console.log(" Top Movie:", getTopMovie());

addMovie("Wu tang", 9.2);
printMovies();
sortMovies();
}

// Task4
function reportSystem(){
let students = [];
let gradess = [];

// 1. Add Student
function addStudent(name, grade) {
  if (typeof grade !== "number" || grade < 0 || grade > 100) {
    console.log(` Invalid grade for ${name}. Must be between 0 and 100.`);
    return;
  }
  students.push(name);
  gradess.push(grade);
  console.log(` Added: ${name} with grade ${grade}`);
}

// 2. Calculate Average
function getAverage() {
  let sum = 0;
  for (let g of gradess) {
    sum += g;
  }
  return (sum / gradess.length).toFixed(2);
}

// 3. Find Top & Bottom Student
function getTopStudent() {
  let maxGrade = Math.max(...gradess);
  let index = gradess.indexOf(maxGrade);
  return { name: students[index], grade: maxGrade };
}

function getLowestStudent() {
  let minGrade = Math.min(...gradess);
  let index = gradess.indexOf(minGrade);
  return { name: students[index], grade: minGrade };
}

// 4. Grade Categorizer
function getLetterGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

// 5. Report Generator
function generateReport() {
  console.log(" --- Class Report ---");

  // Combine students & grades into one array of objects
  let report = students.map((student, i) => {
    return { name: student, grade: gradess[i], letter: getLetterGrade(gradess[i]) };
  });

  // Challenge: sort by grade (highest → lowest)
  report.sort((a, b) => b.grade - a.grade);


  report.forEach((student) => {
    console.log(`${student.name.padEnd(15)} | Grade: ${student.grade} | Letter: ${student.letter}`);
  });

  console.log("----------------------------");
  console.log(` Class Average: ${getAverage()}`);
  console.log(` Top Student: ${getTopStudent().name} (${getTopStudent().grade})`);
  console.log(` Lowest Student: ${getLowestStudent().name} (${getLowestStudent().grade})`);
}
addStudent("Adeleke", 95);
addStudent("Tife", 72);
addStudent("Esther", 88);
addStudent("Tumi", 60);
addStudent("Malik", 45);

generateReport();
}