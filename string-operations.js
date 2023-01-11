const myName = "Idan"
const favColor = "purple"

// create the following sentence
// const fullSentence = "Hello " + myName + ". Your fav color is " + favColor
const fullSentence = `Hello ${myName}. Your fav color is ${favColor}`
// console.log(fullSentence)
// console.log("string length", fullSentence.length)
// console.log("to upper case", fullSentence.toUpperCase())
// console.log("to lower case", fullSentence.toLowerCase())
// console.log("trim", fullSentence.trim())
// const newSentence = fullSentence.replace("Hello", "Yo")
// console.log("replace", newSentence)

// const otherSentence = "Integer"
// console.log(otherSentence.substring(0,4)) returns with int

// console.log(otherSentence.startsWith("Int"))

// const oneMoreSentence ="Hi Danny, you are not tony"

// const searchTerm = "Mack" // false if not part of the string
// const result = oneMoreSentence.includes(searchTerm)


// console.log(result)

const newWord = "I like Papaya"
const searchTerm = "love"
const result = newWord.indexOf(searchTerm)
console.log(result)
