// const person = {
//     firstName: "Idan",
//     lastName: "Fischer"
// }


// function studentName(propFirstName, propLastName) {
// const firstName = propFirstName
// const lastName = propLastName
// const fullName = firstName + " " + lastName
// return fullName
// }

// console.log(studentName("tony","stark") )
// console.log(studentName(person.firstName, person.lastName))

// function sayHello(firstName = "Stranger" ) {  numbers work too, such as = 100
//     console.log("hey there," + " " + firstName)
// }
// sayHello()

function sumAdd(x = 0, y = 0) {
    let sum = x + y
    return sum
}

console.log(sumAdd(5,100))
