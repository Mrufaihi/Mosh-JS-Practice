// //speed limit = 70
// // 5km --> 1 point

// // console.log(Math.floor(24 / 5)) = 4.9 --> 4;

//MY ASNWER //

// //constants
// const speedLimit = 70;
// const suspendLimit = 130;
// const kmPerPoint = 5; //5 km per 1 point

// let points = 0;
// let speedy = speedLimits(55);
// console.log(speedy);

// function speedLimits(speed) {
//   if (speed >= suspendLimit) {
//     return 'Stop right there! you are under arrest';
//   }

//   //   if speed > = 70 , so even if its 74 , its gonna be 0 points.
//   if (speed >= speedLimit) {
//     let speedOverLimit = speed - speedLimit; //lets say speed is 78 . 78-70 = 8;
//     points += Math.floor(speedOverLimit / kmPerPoint); // 8/5 = 1.6 points (we want to round it to the smaller integer so 1 NOT 2)
//     return 'points: ' + points;
//   }

//   return 'Ok';
// }

//MOSH ANSWER//

//SPEED LIMIT = 70
//SUSPENDED LICENSE , POINTS =12
//LESSER THAN 75 IS 'OK'
//EVERY 5 KM IS 1 POINT, math.floor for smallest integer.

let speedy = speedCheck(130);
console.log(speedy);

function speedCheck(speed) {
  // constants , no magic numbers, single modifying
  const speedLimit = 70;
  const kmPerPoints = 5;
  const suspendedPoints = 12;
  let points;

  // speed < 70 + 5 (75) then return 'oK'
  if (speed < speedLimit + kmPerPoints) {
    return 'Ok';
  }

  if (speed >= speedLimit) {
    //add up points
    let exceededLimit = speed - speedLimit; // this (12km)
    points = Math.floor(exceededLimit / kmPerPoints); // 12/5 = 2.3 => 2
    if (points >= suspendedPoints) {
      return '12 points exceeded, your busted mate';
    }
    return 'Your points: ' + points;
  }
}
