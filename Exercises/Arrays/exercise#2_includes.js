// includes element in array

const numbers= [1,2,3,4]

console.log(includes3(numbers , 4));

// option #1
function includes(array , searchElement){
    return array.some(element => // we need different parameters for each function
         element === searchElement //return result of expression
    );
}

//option#2
function includes2(array , searchElement){
    //search through array |take result of find.
     const result = //returns 'element' if true//
      array.find(element => element === searchElement ); 
     //if result === search ? return search / else false;
     return (result === searchElement)? searchElement:'not included';
}

// option#3
function includes3(array, searchElement){
    for(let i = 0; i <= array.length; i++){
        if(array[i] === searchElement)  //array[0] = 1 . 
            return true;
    }
    //if it survives loop , then false
    return false;
}
