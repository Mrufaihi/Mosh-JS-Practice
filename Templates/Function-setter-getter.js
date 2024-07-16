const person = {
    firstName: 'Moe',
    lastName: 'Majed',

    get fullName(){ //get makes calling method like a property ()
       return `${this.firstName} ${this.lastName}` //.this for flexability.
    },
    set fullName(name){ 
        const parts = name.split(' ') //split String using its spaces into Array.
        //now we got array of full name strings. | .this for flexability.
        this.firstName = parts[0]; //first element of array is firstname
        this.lastName = parts[1]; //second element of array is lastname
        return `${this.firstName} ${this.lastName}` 
    },
}

person.fullName = 'Waleed Talal' //set new name (can't without setter).
console.log(person.fullName) //no () (can't without getter).


// UnNeede Code TODO:
// fullNames: person1.firstName + person1.lastName | cannot refrence property inside obj