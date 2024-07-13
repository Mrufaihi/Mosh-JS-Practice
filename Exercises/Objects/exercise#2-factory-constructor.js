//adress object
//factory function 
//contructor function (this.)
// --------------------------------//

function factoryAddress(street, city ,zipcode){
    return {
        street,
        city,
        zipcode,
        printHeya(){
        console.log('heyaa..')
        },
}
}
let printAddress = factoryAddress('a', 'b' , 'c');
console.log(printAddress);

function ConstructorAddress(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode= zipcode;
    this.printHey = function(){ //same as before, = function(){}
        console.log('hey..')
    };
}

// new create empty object | points to 'this' | returns 'this' value.
let printConstructor = new ConstructorAddress('a', 'b', 'c');
console.log(printConstructor);