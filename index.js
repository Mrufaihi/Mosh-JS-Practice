//adress object
//function that print all of object properties

let address = {
    street : 'shafi',
    city: 'jeddah',
    zipCode: 12345,
    country: 'saudi arabia',
}
let address2 = {
    street : 'mama',
    city: 'baba',
    zipCode: 12345,
    country: 'saudi arabia',
}

function showAddress(address){
    for(let key in address){
        console.log(`${key} : ${address[key]}`);
    }
}

showAddress(address2);