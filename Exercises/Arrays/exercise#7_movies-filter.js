//array: Movies filter

const movies =[
    {title: 'a' , year:2018 , rating: 4.5}, //a 4.5 | b-a 4.7-4.5 = 0.2 under
    {title: 'b' , year:2018 , rating: 4.7}, //b 4.7 
    {title: 'c' , year:2018 , rating: 3},   //b 4.7 
    {title: 'd' , year:2017 , rating: 4.5}  //b 4.7 
];

console.log(filterMovies2(movies))

/* ----------------------------------------------- */
//#1 all movies in 2018 | with rating > 4
//#2 sort by rating|sort descending (higher first)
//#3 display title only

function filterMovies(array){
    //#1 step: filter
    const filteredArray = array.filter((item)=> { // the item goes through the array
        return (item.year === 2018) && (item.rating >= 4); //only if both is true
    })
    //#2 step: sort
    const sortedArray = filteredArray.sort((a,b)=>{
        if(a.rating > b.rating) return -1; //if a bigger, put it before
        if(a.rating < b.rating) return 1; //if a smaller, return it after
        return 0; // if a === b
    })
    //#3 step: display title
    const resultArray = sortedArray.map((property) => {
        return property.title; //take every title , and do something to it(return).
     })

    return resultArray;
}

//Can we make it cleaner?
function filterMovies2(array){

    const filteredArray = array
    .filter(item =>  (item.year === 2018) && (item.rating >= 4))
    .sort((a,b)=>  a.rating - b.rating) // we just need positive,negative,0
    .reverse() //reverse order(descending)| or do (b.rating-a.rating)
    .map(obj => obj.title)

   return filteredArray; //return the new array
}