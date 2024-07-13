//price objects

let priceOptions = [
    {
        tooltip:'Cheap',
        body:'$',
        value: 1,
        range:{min:0 , max:10},
    },
    {
        tooltip:'Average',
        body:'$$',
          value: 2,
        range:{min:11, max:20},
    },
    {
        tooltip:'Pricy',
        body:'$$$',
          value: 3,
        range:{min:21 , max:30},
    },
    {
        tooltip:'Expensive',
        body:'$$$$',
          value: 4,
        range:{min:31 , max:40},
    }
]

console.log(priceOptions);