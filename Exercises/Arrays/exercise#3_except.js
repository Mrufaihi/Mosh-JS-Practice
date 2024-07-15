//except 

const array1 = [1,2,3,4];

console.log(except2(array1, [1,2]))

// we want to exclude some elements(filter)
function except(array, excluded){
    let filteredArray = []; 
    // TODO: if excluded is an array => check if it includes number => Not return
     filteredArray = array.filter(number => !excluded.includes(number));  
     return filteredArray;
    //number !== excluded (this checks a number with array *WRONG*)
}

function except2(array, excluded){
    const filteredArray = []; //#1 create empty array

    for (let value of array) //#2 loop over values
        if(!excluded.includes(value)) //#3 check if NOT Excluded
            filteredArray.push(value) //#4 push into the empty array

    return filteredArray; //#5 return the new filtered array

}