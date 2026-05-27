# JavaScript Beginner Practice Questions (Phase -2 ) Sheet  - 1

---

# Part 1 — Functions Basics (1–20)

## Beginner Level

1. Create a function named `greet` that prints `"Hello World"`.
2. Create a function `add(a, b)` that returns the sum.
3. Write a function to calculate the square of a number.
4. Create a function that checks whether a number is even or odd.
5. Write a function that converts Celsius to Fahrenheit.
6. Create a function with default parameter `"Guest"`.
7. Write a function that returns the greater of two numbers.
8. Create a function to calculate area of rectangle.
9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
10. Create a function to reverse a string.

---

## Intermediate Level

1. Write a function expression for multiplication.
2. Convert a normal function into an arrow function.
3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
4. Write a function that counts vowels in a string.
5. Create a function that checks if a string is palindrome.
6. Write a callback function example using `setTimeout`.
7. Create a higher-order function that executes another function twice.
8. Write a function that returns another function.
9. Create a pure function for subtraction.
10. Create an impure function using global variable modification.

---

# Part 2 — Advanced Functions (21–35)

1. Write a recursive function for factorial.
2. Write recursive Fibonacci function.
3. Create a function that finds power using recursion.
4. Create an IIFE that prints `"Executed"`.
5. Write a function that memoizes factorial calculation.
6. Create a closure counter function.
7. Write a function currying example for addition.
8. Create debounce function logic.
9. Create throttle function logic.
10. Write a function that executes only once.
11. Create custom implementation of `map`.
12. Create custom implementation of `filter`.
13. Create custom implementation of `reduce`.
14. Create custom `forEach`.
15. Explain output:

```jsx
function test() {
    return;
    console.log("Hello");
}
console.log(test());
```

---

# Part 3 — Arrays Basics (36–55)

## Beginner

1. Create an array of 5 fruits.
2. Print first and last element of array.
3. Find length of array.
4. Add element at end using `push`.
5. Remove last element using `pop`.
6. Add element at beginning using `unshift`.
7. Remove first element using `shift`.
8. Reverse an array.
9. Sort numbers ascending.
10. Sort numbers descending.

---

## Intermediate

1. Use `splice` to remove elements.
2. Use `splice` to insert elements.
3. Use `slice` to copy array.
4. Find index of an element.
5. Check if array contains a value.
6. Join array elements with .
7. Merge two arrays using spread operator.
8. Copy array using spread operator.
9. Find maximum value using `Math.max`.
10. Swap two variables using destructuring.

---

# Part 4 — Array Iteration Methods (56–75)

1. Use `forEach` to print all numbers doubled.
2. Use `map` to square all numbers.
3. Use `filter` to get even numbers.
4. Use `reduce` to calculate sum.
5. Use `reduce` to find maximum number.
6. Use `find` to get first even number.
7. Use `findIndex` to locate number > 50.
8. Use `some` to check if any number is negative.
9. Use `every` to check if all numbers are positive.
10. Create array of names and convert all to uppercase.
11. Filter all students with marks > 80.
12. Calculate average using reduce.
13. Count occurrences of numbers in array.
14. Flatten nested arrays using `flat`.
15. Remove duplicates using `Set`.
16. Sort array of objects by age.
17. Find total price of shopping cart.
18. Group users by age.
19. Chain `filter` and `map`.
20. Explain difference between `map` and `forEach`.

---

# Part 5 — Objects Basics (76–90)

1. Create object for a student.
2. Access properties using dot notation.
3. Access properties using bracket notation.
4. Add new property dynamically.
5. Update existing property.
6. Delete a property.
7. Create object method.
8. Use `this` keyword inside method.
9. Create nested object.
10. Access deeply nested property.
11. Destructure object properties.
12. Rename variables while destructuring.
13. Add default values during destructuring.
14. Copy object using spread operator.
15. Merge two objects.

---

# Part 6 — Advanced Objects + Real Logic (91–100)

1. Use `Object.keys()` on object.
2. Use `Object.values()`.
3. Use `Object.entries()`.
4. Loop through object using `for...in`.
5. Freeze an object and test modification.
6. Seal an object and test modification.
7. Create array of objects for users.
8. Find user with highest age.
9. Build a mini TODO app using arrays + objects.
10. Build a shopping cart system with:
- add item
- remove item
- calculate total
- quantity update

---

> These questions are optional, but if you want to improve your JavaScript and logic building skills, then try solving them.Take help from ChatGPT, Google, or YouTube if needed, but understand the logic instead of copying answers.
> 

# Bonus Hard Questions

## Debugging Questions

### 101.

```jsx
const arr = [1,2,3];
arr[10] = 5;
console.log(arr.length);
```

### 102.

```jsx
console.log(typeof []);
```

### 103.

```jsx
console.log([] == false);
```

### 104.

```jsx
console.log([1,2] + [3,4]);
```

### 105.

```jsx
function x(a,b){
   return a+b;
}
console.log(x(2));
```

---

# Ultra Advanced Practice

1. Build custom `Array.prototype.map`.
2. Build custom `Array.prototype.filter`.
3. Build custom `Array.prototype.reduce`.
4. Implement deep clone function.
5. Create student management system.
6. Create library management system.
7. Create expense tracker logic.
8. Build inventory management system.
9. Create function composition utility.
10. Build calculator using objects and methods.

---

# Scenario-Based Questions

1. You have an array of users. Return only active users.
2. Calculate total revenue from orders array.
3. Find second largest number in array.
4. Find missing number in array.
5. Check whether two objects are equal.

---

# Interview-Level Questions

1. Difference between:
- function declaration
- function expression
- arrow function
1. Difference between:
- `slice`
- `splice`
1. Difference between:
- `map`
- `filter`
- `reduce`
1. Difference between:
- `for...in`
- `for...of`
1. Difference between:
- shallow copy
- deep copy

---

# Logic Building Questions

1. Rotate array by k positions.
2. Find frequency of characters in string.
3. Find longest word in sentence.
4. Check if two strings are anagrams.
5. Capitalize first letter of every word.
6. Remove falsy values from array.
7. Convert array into object.
8. Convert object into array.
9. Find duplicate elements.
10. Merge two sorted arrays.

---

# Real World Practice

1. Create authentication validation functions.
2. Create OTP generator.
3. Create password strength checker.
4. Build leaderboard system.
5. Create attendance management logic.

---

# Advanced Functional Programming

1. Implement compose function.
2. Implement pipe function.
3. Create custom event emitter.
4. Build promise-like function logic.
5. Create retry mechanism function.

---

# Final Challenge Questions

1. Build complete Notes App logic.
2. Build Student Dashboard logic.
3. Build Quiz App data handling.
4. Build E-commerce Cart System.
5. Build Mini Netflix Watchlist System.