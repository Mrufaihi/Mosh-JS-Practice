//STUDENT GRADE AND AVERAGE

const marks = [89, 89, 89];

console.log(calculateGrades(marks));

// sperated average calculation in different function (single purpose functions)
function calculateAverage(array) {
  let gradeSum = 0;

  for (let value of array) {
    gradeSum += value; //after looping we get sum of all grades
    // count++; replaced by (.length)
  }
  //210 / 3 = 70
  return (gradeAverage = Math.floor(gradeSum / marks.length)); //just to round up
}
//------------------------------------//
function calculateGrades(grades) {
  // called function calculateAverage
  let gradeAverage = calculateAverage(grades);
  let grade;
  //(&& gradeAverage >= 0)-FOR MINUS NUMBERS
  if (gradeAverage < 60 && gradeAverage >= 0) {
    grade = 'Failed';
  } else if (gradeAverage < 70 && gradeAverage >= 0) {
    grade = 'D';
  } else if (gradeAverage < 80 && gradeAverage >= 0) {
    grade = 'C';
  } else if (gradeAverage < 90 && gradeAverage >= 0) {
    grade = 'B';
  } else if (gradeAverage <= 100 && gradeAverage >= 0) {
    grade = 'A';
  } else {
    // return to break out
    return 'Enter valid numbers';
  }

  return 'Grade AVG: ' + gradeAverage + ' - ' + grade;
}

// Alternative (give a range)//
// if (gradeAverage >= 0 && gradeAverage < 60) {
//   grade = 'Failed';
// } else if (gradeAverage >= 60 && gradeAverage < 70) {
//   grade = 'D';
// } else if (gradeAverage >= 70 && gradeAverage < 80) {
//   grade = 'C';
// } else if (gradeAverage >= 80 && gradeAverage < 90) {
//   grade = 'B';
// } else if (gradeAverage >= 90 && gradeAverage <= 100) {
//   grade = 'A';
// } else {
//   // return to break out
//   return 'Enter valid numbers';
// }
