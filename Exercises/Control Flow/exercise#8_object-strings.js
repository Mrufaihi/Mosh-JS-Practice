// PROPERTIES OF OBJECT, show only strings

const movie = {
  title: 'Elden Ring',
  description: 'lorem 10 10',
  author: 'Martin RR',
  releaseYear: 2018,
  rating: 8.5,
};
//if there is returns , then put it inside console.log.
//otherwise, call function directly.
showProperties(movie);

function showProperties(object) {
  //we use FOR In for objects
  for (let property in object) {
    //object[property] accesses the VALUE of a property in an object
    if (typeof object[property] === 'string') {
      console.log(property + ': ' + object[property]);
    }
  }
  return 0;
}
