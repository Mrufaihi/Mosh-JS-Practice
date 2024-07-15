//array from range 
console.log(arrayFromRange(-10,14))

function arrayFromRange(min,max){
    minMaxArray= []; //intaite empty array
    for(min ; min <= max; min++){
        minMaxArray.push(min); //adds number to array(push) -min to max-
    }
    return minMaxArray; //return array after loop
}