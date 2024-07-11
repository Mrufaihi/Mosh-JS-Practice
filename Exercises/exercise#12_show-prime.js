//show only prime numbers to a limit

showPrime(30);

function showPrime(limit) {
  // we are dealing with limit of Numbers, so i = num.
  //we starting with 2 not 0, cuz prime numbers start at 2.
  for (let num = 2; num <= limit; num++) {
    // if isPrime is true , then excute if statement.
    if (isPrime(num)) {
      console.log(num);
    }
  }
}

// Seperated *Single Purpose Only* //
// ------------------------------ //

function isPrime(number) {
  // (cant go lower than 2 cuz prime; remainder lower than number chosen '5%5' (ofc); ++)
  for (let remainder = 2; remainder < number; remainder++) {
    if (number % remainder === 0) {
      // return false and exit function (isn'tPrime)
      return false;
    }
  }
  // if it survives loop of prime hell, return true.
  return true;
}
