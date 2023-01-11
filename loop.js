/* ************* Do while ************* */
// console.log("Do while Loop\n****************") 

// let i = 0;
// do {
//     console.log("This is #", i);
//     i++
// } while(i  < 10);

/* ************* While loop ************* */
// console.log("While Loop\n*************")

// let i = 0;
// while (i < 10) {
//     i++;
//     console.log("This is #", i);
// }

/* ************* For loop with break ************* */
// console.log("For loop with break\n*************")

// for(let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }

//     console.log("This is #", i)
// }


/* ************* For In Object ************* */
// console.log("For In Object\n*************")

// const person = {
//     firstname: "Idan",
//     lastname: "Fischer",
//     age: 18
// }

// console.log(person)

// for(let i in person) {
//     if (person[i] === "Fischer") {
//         break;
//     }

//     console.log("key =>",i)
//     console.log("value =>", person[i], "\n")
// }

/* ************* For Of Arrays ************* */
console.log("For Of Arrays\n*************")

const car = [
    "crosstrek",
    "subaru",
    true,
    true
]

for (let i of car) {
    console.log("value =>", i)
}
