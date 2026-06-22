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




//MEDIUM LEVEL

// 6. Product Data Processor
// You will work with an array of product objects, where each object has a name, a price, and
// a category. First, use the map() method to make a new array that only contains the product
// names. Second, use the filter() method to make another array that only contains products
// from one specific category. Third, use the reduce() method to add up the prices of every
// product and return the total.
// Concepts: map, filter, reduce

// ...CODE

// const products = [
//   { name: "Laptop", price: 45000, category: "Electronics" },
//   { name: "T-Shirt", price: 800, category: "Clothing" },
//   { name: "Headphones", price: 2500, category: "Electronics" },
//   { name: "Jeans", price: 1500, category: "Clothing" },
//   { name: "Smartwatch", price: 4000, category: "Electronics" },
//   { name: "Running Shoes", price: 3200, category: "Footwear" },
//   { name: "Keyboard", price: 1200, category: "Electronics" },
//   { name: "Jacket", price: 2800, category: "Clothing" },
//   { name: "Sneakers", price: 2200, category: "Footwear" },
//   { name: "Power Bank", price: 1800, category: "Electronics" }
// ];

// let productNames = products.map((nam)=>{
//     return nam.name
// })
// let electronicProducts = products.filter((product)=>product.category === 'Electronics')
// let totalAmount = products.reduce((sum,value)=>{
//     return sum + value.price
// },0)

// console.log(productNames);
// console.log(electronicProducts);
// console.log(totalAmount);




// 7. Debounce Utility from Scratch
// Write your own function called debounce that takes two inputs: another function (fn) and a
// delay time in milliseconds. Your debounce function should return a new function that, every
// time it is called, waits for the given delay before actually running fn. If it gets called again
// before that delay finishes, it should cancel the earlier wait and start counting the delay again
// from zero. This trick is useful for things like search boxes, where you don't want to run code
// on every single keystroke.
// Concepts: closures, setTimeout/clearTimeout, higher-order functions

// ...CODE


// function debounce(fn, t) {
//     let timeOUt;

//     function func(...arg) {
//         console.log('TimeOut Cleared')
//         clearTimeout(timeOUt)

//         timeOUt = setTimeout(() => {
//             fn(...arg)
//         }, t)
//     }
//     return func
// }
// function greet(name) {
//     console.log(`Hello, ${name}`)
// }

// let debounceGreet = debounce(greet,2000)

// debounceGreet('Carry')
// debounceGreet('vaibhav')
// debounceGreet('ayush')
// debounceGreet('rohit')
// debounceGreet('mohit')




// 8. Sequential Task Runner
// Write three separate functions, where each one waits for a short delay (you can use a
// Promise with setTimeout inside it) and then logs a different message to the console, such
// as "Step 1 done", "Step 2 done", and "Step 3 done". Then write one more function that uses
// async/await to run all three, one after another, so Step 2 never starts before Step 1 has fully
// finished, and Step 3 never starts before Step 2 has fully finished.
// Concepts: async/await, promises, sequencing

// ...CODE


// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step 1 completed')
//             resolve()
//         },1000)
//     })
// }
// function step2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step 2 completed')
//             resolve()
//         },1000)
//     })
// }
// function step3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step 3 completed')
//             resolve()
//         },1000)
//     })
// }

// async function runTask(){
//     await step1()
//     await step2()
//     await step3()
// }
// runTask()




// 9. API Data Cleaner
// Write a function that uses fetch() to get data from a public API of your choice (for example,
// JSONPlaceholder). Once the data arrives, pick out only the specific fields you actually need
// (for example, just the title and the id) and return a new, simplified array or object built from
// those fields only. Wrap your code in a try/catch block so that if the network request fails,
// your function handles the error nicely instead of crashing.
// Concepts: fetch, async/await, try/catch, data transformation

// ...CODE

// async function quotes() {
//     try {
//         let response = await fetch('https://dummyjson.com/quotes')

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`)
//         }
//         let data = await response.json()
//         let arr = data.quotes.map((quote) => {
//             return { author: quote.author, quote: quote.quote }
//         })
//         console.log(arr)
//     } catch (err) {
//         console.error(err.message);
//     }
// }
// quotes()



// 10. Mini Event Emitter

// Build your own small object (you can call it an event emitter) with three methods:
// on(eventName, callback) to register a function that should run when a named event
// happens, emit(eventName, data) to actually trigger that event and run every function
// registered for it, and off(eventName, callback) to remove a function you registered earlier.
// This lets different parts of your code talk to each other through named events instead of
// calling each other directly.
// Concepts: objects, functions as values, publish-subscribe pattern


let EventEmitter = {
    events : {},
    on : function(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    },

    emit : function(eventName , data){
        if(this.events[eventName]){
            this.events[eventName].forEach(callback =>{
                callback(data)
            })
        }
    },
    off : function(eventName , callback){
        if(this.events[eventName]){
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
        }
    }
}

console.log(EventEmitter)

function greet(nam){
    console.log(`Hello, ${nam}`);
}

function bye(nam){
    console.log(`Bye, ${nam}`);
}

EventEmitter.on('carry',greet)
EventEmitter.on('carry',bye)
EventEmitter.off('carry',bye)
EventEmitter.emit('carry','carry')
