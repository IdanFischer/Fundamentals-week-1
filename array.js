// const person = {
//     firstName: "Idan", 
//     lastName: "Fischer",
//     age: 18
// }

const personarray = [
    "Idan", // 0
    "Fischer", // 1
    47 // 2
]

// Mutate a value
personarray[0] = "Adi"

const fullName = personarray[0] + " " + personarray[1]

const totalLength = personarray.length
console.log(personarray)
console.log("fullName:", fullName)
console.log("total:", totalLength)

