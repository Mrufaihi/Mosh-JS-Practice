//FIZZ BUZZ
//DIVISBLE BY 3 -> FIZZ
//DIVISBLE BY 5 -> BUZZ
//DIVISBLE BY 3 AND 5 -> FIZZBUZZ
//NOT DIVISBLE BY 3 OR 5 -> INPUT (PARAMETER)
//NOT A NUMBER ->"NOT A NUMBER"

let fizzBuzzContainer = fizzBuzz(15);

console.log(fizzBuzzContainer);

function fizzBuzz(input) {
  //typeof | 'number'
  if (typeof input !== 'number') {
    return NaN;
    //better to put parentheses in each expression
  } else if (input % 3 === 0 && input % 5 === 0) {
    return 'fizzBuzz';
  } else if (input % 3 === 0) {
    return 'fizz';
  } else if (input % 5 === 0) {
    return 'buzz';
  }
  return input; //no need for ELSE
}
