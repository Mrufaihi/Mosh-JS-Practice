// shows starts +1 each row

showStars(5);

function showStars(rows) {
  let starsString = '';
  // we are iterating 'rows' not 'i index'
  for (let row = 1; row <= rows; row++) {
    starsString += '*';
    console.log(starsString);
  }
}
