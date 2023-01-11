const person = {
    firstName: "Idan",
    lastName: "Fischer",
    favColor: "Purple",
    hobby: "Video Games"
}

function thisIsMe(firstName = "John", lastName = "Doe", favColor = "Red", hobby = "Reading") {
const fullLine = "Hi my full name is " + firstName + " " + lastName + ". " + "My favorite color is " + favColor + " and love " + hobby
return fullLine
}

console.log(thisIsMe(person.firstName, person.lastName, person.favColor, person.hobby))

const moviesArray = ["The Cube (1997)" , 
                    "Batman: The Killing Joke" , 
                    "Star wars: A New Hope"]

    function myFavMoviesAre(arrary){
        
        return arrary
        
    }
    console.log("my favorite movies are: " + myFavMoviesAre(moviesArray))


function multiplyThenAdd(multiply1, multiply2, add3) {
    let Total = (multiply1 * multiply2) + add3;
    return Total
}

console.log(multiplyThenAdd(5, 5, 2))
