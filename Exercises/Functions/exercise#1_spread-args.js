// functions - Exercise#1: Sum()

const array1 = [1, 2, 3, 4, 5, 15];
const array2 = [1, 2, 3, 4, 5, 10];

console.log(sum1([1, 2, 3, 4, 5])) // these are nested arrays : [array1, array2] | cuz ...rest convert all args into [array]


// #1 Option : spread Nested Array
function sum1(...args) {  //rest args (unlimited args)
    if (args.length === 1 && Array.isArray(args[0])) {//if array length is 1 (one array) && first element of array is [] (nested)
        args = [...args[0]]  //spread the nested array , which is args[0]
    }
    console.log(args)  //print Spreaded Arrays (NOT NESTED NOW)

    return args.reduce((acc, cur) => acc + cur)
}

// #2 Option : Flatten Nested Array
function sum2(...args) { //rest args (unlimited args)
    console.log(args) //print Nested Arrays
    if (args.length === 1 && Array.isArray(args[0])) {//if array length is 1 (one array) && first element of array is [] (nested)
        args = args.flat(); //flatten array
    }
    return args.reduce((acc, cur) => acc + cur)
}