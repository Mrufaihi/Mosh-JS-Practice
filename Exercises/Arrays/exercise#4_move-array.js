//move array elements

const numbers = [1,2,3,4];

move(numbers, 3 , -2);

/*---------------------------------------- */

function move(array, index, offset){
    //#1 check if offset is valid
    newPosition= index+offset;

    //the difference between mustn't be: < 0 | > array.length
    if((newPosition) < 0 || (newPosition) >= array.length ){
        console.error('invalid offset');
        return;
    }

    //#2 remove element we want to Move & Return it
    const removedValue = array.splice(index, 1)[0]  // delete value we want to move & returns array with deleted values. | [0] to access first value of that array.

    //#3 Add element we want to move in New Position
    //if index=0 & offset= 2|newP=0+2 =>index[2]
    array.splice(newPosition, 0, removedValue) //go to newP, 0 Del, add index value

    //#4 copy new array to output[] & Return it
    const output = [...array]; //spread modified array into output.
    console.log(output);

}
/* ALTERNATIVE CODES */
//LINE:20 indexToMove = array[index];| store value we want to Move before Deleting.(alternatively |splice(index, 1)[0])
//LINE:10 const output = []; | (output = array.slice()) -to copy-
