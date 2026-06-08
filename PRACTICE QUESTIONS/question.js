// let prices = [100, 250 , 399 , 499]
// prices.forEach(function(price){
//     console.log(price)
// })

// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];

// students.forEach(function(student){
//     if(student.marks > 50){
//          console.log(`${student.name} - Pass`)
//     }else{
//          console.log(`${student.name} - Fail`)
//     }
// })

// let names = ["anubhav", "rahul", "aman"];
// let uprCase = names.map((name)=>{
//     return name.toUpperCase()
// })
// console.log(uprCase);


// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];

// let newArr = products.map((product)=>{
//     discount =product.price - (0.10 * product.price)
//     product['discountPrice'] = discount
//     return product
// })
// console.log(newArr);

// let nums = [1,2,3,4,5,6,7,8];

// let even = nums.filter(a => a % 2 == 0)
// console.log(even);


// let users = [
//   { name: "Anubhav", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true },
// ];

// let activeUser = users.filter(user => user.active)
// console.log(activeUser);


// let nums = [10,20,30,40];

// let sum = nums.reduce((acc , value)=>{
//     return acc + value
// },0)
// console.log(sum);


// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let freq = fruits.reduce(function(acc , val){
//     acc[val] = (acc[val] || 0) + 1
//     return acc
// },{})
// console.log(freq);



// let nums = [20, 35, 60, 80];

// let mat = nums.find(a => a > 50)
// console.log(mat);

// let users = [
//   { username: "rahul" },
//   { username: "admin" },
//   { username: "aman" }
// ];


// let temp = users.find(a=> {
//     if(a.username === "admin")
//         return a
// })
// console.log(temp);

// let nums = [10, 40, 90, 50];

// let temp = nums.findIndex((value, index)=>{
//     if(value == 90){
//         return index
//     }
// })
// console.log(temp);

// let students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 70 },
// ];

// let failed = students.findIndex((student, index)=>{
//     if(student.marks < 40){
//         return index
//     }
// })
// console.log(failed);

// let nums = [10, 20, -5, 40];

// let temp = nums.some(val=> val<0)
// console.log(temp);

// let products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 0 },
// ];

// let stock = products.some(pro => pro.stock == 0)
// console.log(stock);


// let nums = [10, 20, 30, 40];

// let temp = nums.every(val => val > 0)
// console.log(temp);


// let students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 },
// ];

// let temp = students.every(val => val.marks >= 40)
// console.log(temp);
