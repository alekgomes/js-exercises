const addTwo = require("./01")

// Challenge 5
// In the first part of this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.

let numbers = [];

function mapWith(array, callback) {
    array.forEach((item, index) => numbers[index] = callback(item))

}
mapWith([1, 2, 3], addTwo)
console.log(numbers)