// if statements
// if hour is betwen 6-12 say goodmoring
// else hour is bigger than 12 say goodevening

let hour = 23;

// we dont need curly braces when 1 liners
if (hour >= 0 && hour < 12) 
  console.log('good morning');
else if (hour >= 12 && hour < 18) 
  console.log('good evening');
else 
  console.log('good night');

