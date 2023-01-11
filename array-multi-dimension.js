const numberarray = [
    'value1', // 0
    'value2', // 1 
    'value3', // 2
    [         // 3
    'sub-value1', // 0
    'sub-value2', // 1 
    'sub-value3' // 2
    ],
    {           // 4
        myname: "Idan", //name
        gender: 'm'     // gender
    }
]

console.log(numberarray[3][1]) // pulls the 3rd array, and it finds inside of it the array inside of it
console.log(numberarray[4]['myname'])
