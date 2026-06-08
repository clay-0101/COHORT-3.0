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


// ARRAYS

// let prices= [100,250,500,150,700];

// let expensive = prices.filter((price , idx) => {
//     if(price > 300){
//         return idx
//     }
// })
// console.log(expensive);


// let students= ["Aman","Ritik","Priya","Rahul"];
// console.log(students[students.length - 1]);


// let products= ["Laptop","Mouse","Keyboard"];
// products.push('Monitor')
// console.log(products);


// let notifications= [
// "Order Placed",
// "Order Shipped",
// "Order Delivered"
// ];
// notifications.pop(notifications.length - 1)
// console.log(notifications);


// let users= ["Aman","Ritik","Priya"];
// console.log(users.includes('Ritik'));


// let marks= [80,90,70];
// let percent = marks.map(mark =>{
//     return mark+'%'
// })
// console.log(percent);


// let cart= [
// "Mouse",
// "Keyboard",
// "Monitor",
// "Laptop"
// ];
// console.log(cart.length);


// MODERATE LEVEL Array

// let marks= [80,90,70,85,95];
// let sum = marks.reduce((acc, curr)=>{
//     return acc + curr
// })
// let average = Math.floor(sum / marks.length)
// console.log(average);


// let numbers= [1,2,3,4,5,6,7,8];
// let even = numbers.filter(num => num % 2 == 0)
// console.log(even);


// let products= [
// "Laptop",
// "Mouse",
// "Keyboard",
// "Monitor"
// ];
// let idx = products.indexOf('Keyboard',0)

// console.log(idx);


// let sales= [500,700,1000,300];
// let sum = sales.reduce((acc , curr)=>{
//     return acc + curr
// })
// console.log(sum);


// let users= ["ritik","aman","priya"];
// let uprCase = users.map(name=>{
//     return name.toUpperCase()
// })
// console.log(uprCase);

// let ages= [12,15,17,19,22];
// let firAdult = ages.find(val => val >= 18)
// console.log(firAdult);


// let nums= [5,8,10,3];
// let result = nums.every(val => val > 0)
// console.log(result);


// let numbers= [1,2,3,2,4,2,5,1,1,1];
// let obj = {}
// let max = 0 ;
// let idx;
// for(let i  of numbers){
//     obj[i] = (obj[i] || 0) + 1
// }
// for(let key in obj){
//     if(obj[key] > max){
//         max = obj[key]
//         idx = key
//     }
// }
// console.log(idx , max);


// let nums = [10,50,20,80,40];
// nums.sort((a,b)=> a-b)
// console.log(nums[(nums.length-1)-1]);


// let ids= [1,2,2,3,4,4,5,5];

// for(let i = 0 ; i < (ids.length-1) ; i++){
//     for(let j = i+1 ; j < ids.length ; j++){
//         if(ids[j] == ids[i]){
//             ids.splice(j,1)
//             j--
//         }
//     }
// }
// console.log(JSON.stringify(ids));



// let words= [
// "JavaScript",
// "HTML",
// "CSS",
// "Programming"
// ];
// let max = 0
// let word ;
// for(let str of words){
//     if(str.length > max){
//         max = str.length
//         word = str
//     }
// }
// console.log(word);


// let nums= [1,2,3,4,5];
// let last = nums[nums.length-1]
// nums.pop()
// nums.unshift(last)
// console.log(nums);


// let sales= [
// "Mouse",
// "Keyboard",
// "Mouse",
// "Laptop",
// "Mouse",
// "Keyboard"
// ];
// let obj = {}

// let max = 0, idx;
// for(let i of sales){
//     obj[i] = ( obj[i] || 0) + 1
// }
// for(let i in obj){
//     if(obj[i] > max){
//         max = obj[i]
//         idx = i
//     }
// }
// console.log(idx)