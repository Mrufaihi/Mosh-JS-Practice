//array: count occurances
const array1 = [1, 1, 1, 2, 3, 4, 5, 6]

// excutable code TRY IT
try {
    const count = occurance3(true, 1);//uncaught error not array
    console.log(count);
} //Catch any exception thrown
catch (e) { // e is our Error Exception
    console.log(e.message); //.message just gets the msg we want
}


//#3 option
function occurance3(array, searchElement) {
    if (!Array.isArray(array)) //check if array arg is not an array
        throw new Error('Not an array exception'); //throw acts same as return.

    return array.reduce((accumulator, current) => {
        const occurance = (current === searchElement) ? 1 : 0; //if true return 1 TO ACCUMULATOR (no need to specify)
        console.log(accumulator, current, searchElement)
        return accumulator + occurance;
    }, 0)
}