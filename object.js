// const firstName = "Idan "
// const lastName = "Fischer"

const person = {
    firstName: "Idan", 
    lastName: "Fischer",
    age: 18 // hanging commas (commas at the end of a line)
    //  is ok in JS, but some other places not so dont use it
}

// dot notation
person.firstName

// bracket notation
person["lastName"]

// Mutate a value in an object
person.firstName = "Tony"

// adding new property to an object
person.height = 178

// delete a property
delete person.height

const fullName =  person.firstName + " " + person.lastName

console.log("Hello ", fullName)
console.log("age ", person.age)
console.log("person object:", person)
console.log("height ", person["height"])