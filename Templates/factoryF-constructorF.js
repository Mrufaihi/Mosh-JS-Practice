// OBJECTS
const objectCircle1 = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  drawCircle() {
    console.log('drawing 1...');
  },
};

// // repeat of object logic and function
const objectCircle2 = {
  radius: 2,
  location: 2,
  drawCircle() {
    console.log('drawing 2...');
  },
};
//------------------------------- //
// FACTORY FUNCTION(camelNaming) : a factory to create multiple objects (inside a function)

function createCircleFactory(radius) {
  //we need to return object| remove object name.
  return {
    // key: value -hardcoded- | make then parameters| if they both the same name, just put key.
    radius,
    // key: function | make it only key().
    drawCircle() {
      console.log('drawing 2...');
    },
  };
}
//------------------------------- //
// CONTSTRUCTOR FUNCTION (PascalNaming)
function Circle3(radius){
   // this creates empty OBJECT | .radius is adding new property
  this.radius = radius;
  this.object2 = 2;
  this.draw = function(){
    console.log('hi drawing..');
  };
}

// single point change for everything.

//new creates new empty OBJECT | new Points to (this.) | return the new OBJECT.

const circle2 = new Circle3(1); //circle 2 is now an object (instance)

circle2.draw(); //access Circle2() and then access draw() function.

// WHAT new DOES: const x = {point to this | return this}
