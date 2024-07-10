// TRUTHY / FALSE

const arrayTest = [1, 2, null, undefined, 5];

console.log(countTruthy(arrayTest));

function countTruthy(array) {
  let count = 0;
  for (let item of array) {
    if (item) {
      count++; //same as count += 1
    } else {
      count += 0;
    }
  }
  return 'truthy count : ' + count;
}
