//array: count occurances
const array1 = [1,1,1,2,3,4,5,6]

console.log(occurance3(array1, 1))

//#1 option
function occurance(array, searchElement){
    let count = 0;
    for(let value of array)
        if(value === searchElement)
            count++
    
    return count;
}
//#2 option
function occurance2(array, searchElement){
    let count = array.reduce((accumulator , currentValue) => {
        if(currentValue === searchElement)
            accumulator++
        return accumulator; // we in callback fun, return doesnt exit fun.
    },0) //0 necessiry (else takes 1st value of arr)
    return count;
}
//#3 option
function occurance3(array, searchElement){
    return array.reduce((accumulator, current)=>{
        const occurance = (current=== searchElement)? 1:0; //if true return 1 TO ACCUMULATOR (no need to specify)
        console.log(accumulator,current,searchElement)
        return accumulator+occurance;
    },0)
}