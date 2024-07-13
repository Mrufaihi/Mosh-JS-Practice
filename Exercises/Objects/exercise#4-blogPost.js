//BLOG POST OBJECT
//title, body, author , views , comments(author,body),isLive.

const blogPost= {
    title: 'The Elden Ring',
    body: 'The mission to become The EldenLord',
    author: 'Miyazaki',
    views: 1000000000,
    //value of comment is Array
    comments: [
        {author:'George RR Martin' ,body: 'Well its fantastic, Huhahaha.'},
        {author:'George RR Martin' ,body: 'Well its fantastic, Huhahaha.',}
    ], 
    isLive: true,

}

console.log(blogPost);