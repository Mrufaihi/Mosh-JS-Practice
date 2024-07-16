//Exercise #2 object Read&Write

// circle.radius = 2
// console.log(circle.area)

const circle = {
    radius: 1,
    get area() { //property (as a methdo Get)(read only)
        return this.radius * 2;
    },
    // can add set area(){}, for read and write
}


circle.radius = 2
//circle.area = 20 |cant do that
console.log(circle.area); // radius * 2 = 4