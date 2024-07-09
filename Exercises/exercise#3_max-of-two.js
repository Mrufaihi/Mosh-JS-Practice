//MAX OF 2
// no  need , parameter declares
// let number1 = 0;
// let number2 = 0;

// MY ANSWER //
// function maxOfTwo(number1, number2) {
//   if (number1 > number2) console.log("max of two is number 1: " + number1);
//   else if (number2 > number1)
//     console.log("max of two is number 2 : " + number2);
//   else console.log("both are max : " + number1 + "," + number2);
// }
// maxOfTwo(15, 14);

// MOSH ANSWER //

let maxContainer = maxOfTwo(3, 11); //when dealing with return, we must always store result in var then print it.
console.log(maxContainer);

// function maxOfTwo(a, b) {
//   if (a > b) return a;
//   return b; //no need for else, cuz one if is excuted we go out of loop.
// }
function maxOfTwo(a, b) {
  return a > b ? a : b; //return , a>b if true? give a , false? then b;
}
