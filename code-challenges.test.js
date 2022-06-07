// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")
const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.


// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe ("kolors", () =>  {
it ("returns an array, removes the first item from the array and shuffles the remaining content." , () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
     const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
     expect(kolors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
     expect(kolors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
})
})

// ● kolors › returns an array, removes the first item from the array and shuffles the remaining content.

// ReferenceError: kolors is not defined




const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

//Create a function named kolors that will shuffle an array and remove the first item
// Use the method .shift to remove the first item of the array
// Return the array with the method sort to sort all the values insde of the array
/////// The method sort accepts a function that returns a value between -0.5 and 0.5


const kolors = (array) => {
  array.shift()
      return array.sort((a, b) => Math.random() - 0.6)
}

console.log(kolors(colors1))


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe ("minMaxArr", () => {
    it ("returns array of numbers and returns an array of the minimum and maximum numbers in that order.", ( ) => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        const nums2 = [109, 5, 9, 67, 8, 24]
        expect(minMaxArr(nums1)).toEqual([-8, 90])
        expect(minMaxArr(nums2)).toEqual([5, 109])
    })
    
})

//// ● minMaxArr › returns array of numbers and returns an array of the minimum and maximum numbers in that order.

//// ReferenceError: minMaxArr is not defined

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.

//Creacte a function named minMaxArr that will take the arry of numbers and return the numbers from slamments to greatest.
//Create an empty array to store the numbers 
//In the new created array use method .push to be able to use the Math.min and max into the new array
//return the  new array with the methods


const minMaxArr = (array) => {
    let newArray = []
  newArray.push(Math.min(...array))
  newArray.push(Math.max(...array))
    return newArray
}

console.log(minMaxArr(nums1))
console.log(minMaxArr(nums2))


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe ("noDuplicate", () => {
    it ("returns two arrays as arguments and returns one array with no duplicate values", () => { 
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        expect(noDuplicate(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);
    }) 
})

//// ● noDuplicate › returns two arrays as arguments and returns one array with no duplicate values

//// ReferenceError: noDuplicate is not defined


const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

// Create a function named  noDuplicate
// Use method .concat to join the two arrays and make it into a new one 
// Have the function return the new array with the -set- (I found [...new Set in stack overflow, what it does is that Set can only contain unique values, and the spread operator converts it back into an array)
// console log the arrays


const noDuplicate = (array1, array2) => {
joinArray = array1.concat(array2)
return joinArray = [...new Set(joinArray)]

} 

console.log(noDuplicate(testArray1, testArray2))