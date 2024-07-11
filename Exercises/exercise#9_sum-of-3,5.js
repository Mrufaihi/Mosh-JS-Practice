//sum of multiples of 3,5

console.log(sum(15));

// assume limit = 10
function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//this is the perfect implmentation//
//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//       sum += i;
