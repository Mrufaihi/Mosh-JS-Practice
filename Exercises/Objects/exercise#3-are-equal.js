// address1 function
function ConstructorAddress(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode= zipcode;
}
// address2 function
function ConstructorAddress2(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode= zipcode;
}
let address1 = new ConstructorAddress('a','b','c');
let address2 = new ConstructorAddress('a','d','c');

// are equal property?
function areEqual(object1 , object2){
    // check key (property)
    for(let key in object1){
        if(!(key in object2)){
            return false;
        }
    }
    // if survives loop of hell then true.
    return true;

}
// -------------------------------- //
//are equal value?
function areEqual1(object1 , object2){
    // check key (property)
    for(let key in object1){
        // if NOT object1 in object2
        if(object1[key] !== (object2[key])){
            return false;
        }
    }
    // if survived loop of hell
    return true;
}

let container1 = areEqual(address1, address2);
let container2 = areEqual1(address1, address2);

// console.log(container1);

// -------------------------------- //
 // are they refrencing same object?
function areSame(object1, object2){
    return (object1 === object2);     //if true/false then return it

    // if(object1 === object2) | there is a better way 
    //     return true;
    //return false;
}

let container3 = areSame(address1, address2);
console.log(container3);
