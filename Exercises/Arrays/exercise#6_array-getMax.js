//array: get MAX  

array1= [10,1,2,3,4,5];

console.log(getMax(array1))

//#1 option : compare previous num with next num
function getMax(array){
    if(array.length === 0) return undefined; //check for empty arr

    let max = array[0];
    for(let num of array){
        if(num > max) 
            max = num;
    }
    return max;
}

//#2 option: reduce (if curr > -1(accu) , set the bigger number) 
function getMax2(array){
    if(array.length === 0) return undefined; //check for empty arr

    const max = array.reduce((accumulator, current) => {
        return (current > accumulator) ? current : accumulator;
    },) //accu set to (first element of array)
    return max;
}
