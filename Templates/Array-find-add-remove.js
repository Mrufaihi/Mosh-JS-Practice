    //Array find/add/remove elements

// -----------ADD/REMOVE------------- //

const students = ['moe', 'ali','moe' , 'ahmed']
console.log(students) 

//at END
students.push('mama');
console.log(students) 

students.pop() //remove last and return. (if we console.log)
console.log(students) 

//at START
students.unshift('baba')
console.log(students) 

students.shift() //remove start and return
console.log(students) 

//at CENTER (start i, how much delete, value)
students.splice(2,0,'spliced'); 
console.log(students) 

students.splice(2,1) //start at i= 2 , delete 1 value.
console.log(students) 


// -----------FIND------------- //
const courses = [
    {id:1 , name:'a'},
    {id:2 , name:'b'},
]

// console.log(students.includes('ali'));

// console.log(courses.includes({id:1 , name:'a'})); // this is a new object completely

// ARROW FUNCTION: Delete Function,Return,(for 1 parameter),{for 1 liners},=> between Parameter&Body.

// let found = courses.find((course) =>  course.id > 1) //=> goes to first number >1 

// console.log(found)