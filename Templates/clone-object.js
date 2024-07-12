const circle = {
  radius: 1, 
  draw: function(){
    console.log('drawing..')
  }
}

// //we want to copy object circle into new object

// const cloneCircle= {} //empty object
// for(let key in circle){
//   cloneCircle[key] = circle[key] //#1 key is radius. so here cloneCircle[radius] "value of radius key"
// }

// #2 way Object.assign(target , source)
// const cloneCircle2 = Object.assign({}, circle);

// #3 way spread ...
const cloneCircle3 = {...circle}

console.log(cloneCircle3);


