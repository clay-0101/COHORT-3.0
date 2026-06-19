// Easy Level

// 1. Even or Odd Checker
// Write a function that takes one number as input. Inside the function, check whether the
// number divides evenly by 2 using the % (modulo) operator. If there is no remainder, the
// function should return the word "Even"; otherwise, it should return "Odd". Try your function
// with a few different numbers, including 0 and a negative number, to make sure it always
// gives the right answer.
// Concepts: functions, if-else, % (modulo) operator

// CODE...

// function numCheck(n){
//     if(n <= 0) return 'Number is either 0 or Negative'
//     return n%2 == 0 ? 'Even':'Odd'
// }
// let n = Number(prompt('Enter your Number : '))
// console.log(numCheck(n));



// 2. Greeting Generator
// Write a function that takes two inputs: a person's name and their age. Inside the function,
// use a template literal (a string written with backticks and ${ }) to build and return a sentence
// such as "Hello, Riya! You are 21 years old." Make sure the name and age you pass in always
// show up correctly inside the sentence.
// Concepts: functions, template literals

// CODE...

// function greet(name, age){
//     return `Hello, ${name}! You are ${age} years old.`  
// }
// let name = prompt('Enter Your Name : ')
// let age = Number(prompt('Enter Your age : '))
// console.log(greet(name, age));



// 3. Rectangle Area Calculator
// Write a function that takes the width and height of a rectangle as two separate inputs. Inside
// the function, multiply the two numbers together to get the area, and return that result. Test
// the function with a few different width and height values to confirm the area comes out
// correct.
// Concepts: functions, parameters, return values

// CODE...

// function rectArea(h,w){
//     return `Area of Rectanlge is ${h * w}`
// }
// let height = Number(prompt('Enter rectangle height  : '))
// let width = Number(prompt('Enter rectangle width  : '))
// console.log(rectArea(height, width));



// 4. Private Counter with Closures
// Write an outer function that has one variable inside it to keep track of a count, starting at 0.
// This outer function should return another (inner) function that, every time it is called,
// increases the count by 1 and returns the new value. The important part is that the count
// variable should not be reachable or changeable from outside - the only way to change it
// should be by calling the function that was returned.
// Concepts: closures, private variables

// CODE...

// function outer(){
//     let count = 0;
//     function inner(){
//         count++
//         return count
//     }
//     return inner
// }

// let counter = outer()
// console.log(counter());
// console.log(counter());
// console.log(counter());



// 5. Find the Largest Number
// Write a function that takes an array of numbers and returns the largest number in it. You are
// not allowed to use the built-in Math.max() method - instead, loop through the array yourself,
// compare each number to the others, and keep track of the biggest one you have found so
// far.
// Concepts: arrays, loops, comparison logic

// CODE...

// let len = Number(prompt('Enter Length of the Array : '))
// let arr = [], max = 0
// for (let i = 0; i <= len; i++) {
//     arr.push(Number(prompt(`Enter ${i} Element : `)))
// }
// console.log(arr)

// function findMax(arr) {
//     for (let j = 0; j <= len; j++) {
//         if (arr[j] > max) {
//             max = arr[j]
//         }
//     }
//     return max
// }
// console.log(findMax(arr))