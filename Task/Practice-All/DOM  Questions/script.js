//  CHANGE THE TITLE TEXT USING JS 
// const title = document.querySelector('#title')
// title.textContent= 'Welcome to the javaScript Dom'



// const btn = document.querySelector('#btn')
// const page = document.body

// btn.addEventListener('click',()=>{
//     page.style.backgroundColor = 'lightblue'
// })



// let userName = document.querySelector('#username')
// let btn = document.querySelector('button')
// let output = document.querySelector('#output')


// btn.addEventListener('click',()=>{
//     output.textContent = userName.value
//     userName.value = ''

// })



// let btn = document.querySelector('button')
// let msg = document.querySelector('#message')
// let flag = true

// btn.addEventListener('click',()=>{
//     if(flag){
//         msg.style.display = 'none'
//         flag = false
//     }else{
//         msg.style.display = 'block'
//         flag = true
//     }
// })


// let btn = document.querySelector('button')
// let list = document.querySelector('#list')
// let banana = document.createElement('li')
// banana.textContent = 'Banana'

// btn.addEventListener('click',()=>{
//     list.appendChild(banana)
// })


// let btn = document.querySelectorAll('button')
// let card = document.querySelector('.card')

// btn.forEach((bt)=>{
//     bt.addEventListener('click',()=>{
//           bt.parentElement.remove()
//     })
// })

// let count = document.querySelector('#count')
// let incremnet = document.querySelector('.incre')
// let decrement = document.querySelector('.decre')
// let parent = document.querySelector('#parent')


// parent.addEventListener('click',(e)=>{
//     if(e.target.classList.contains('incre')){
//         count.textContent = Number(count.textContent) + 1
//     }
//     if(e.target.classList.contains('decre')){
//         count.textContent = Number(count.textContent) + 1
//     }
// })


// let text = document.querySelector('#text')
// let char = document.querySelector('#char')


// text.addEventListener('input',()=>{
//     let characters = text.value
//     char.textContent = Number(characters.length)
// })



// let input = document.querySelector('input')
// let btn = document.querySelector('button')
// let ul = document.querySelector('ul')


// btn.addEventListener('click', () => {
//     let li = document.createElement('li')
//     li.textContent = input.value
//     ul.append(li)

//     input.value = ''
// })



// Array of 10 random image URLs


// let images = [
//   "https://picsum.photos/id/1011/200/200",
//   "https://picsum.photos/id/1025/200/200",
//   "https://picsum.photos/id/1035/200/200",
//   "https://picsum.photos/id/1043/200/200",
//   "https://picsum.photos/id/1050/200/200",
//   "https://picsum.photos/id/1062/200/200",
//   "https://picsum.photos/id/1074/200/200",
//   "https://picsum.photos/id/1084/200/200",
//   "https://picsum.photos/id/109/200/200",
//   "https://picsum.photos/id/110/200/200"
// ];



// let btn = document.querySelector('button')
// let img = document.querySelector('#image')
// count = 0

// btn.addEventListener('click',()=>{
//     count++
//     if(count == 10){
//         count = 0
//     }
//     img.src = images[count]
// })


// let h1 = document.querySelector('h1')
// let btn = document.querySelector('button')
// let background = document.body

// let arr = [h1,btn,background]
// let flag = true

// btn.addEventListener('click',()=>{
//     if(flag == true){
//         btn.textContent = 'Light Mode'
//         flag = false
//     }else{
//         btn.textContent = 'Dark Mode'
//         flag = true
//     }
// arr.forEach(ele =>{
//     ele.classList.toggle('dark')
// })
// })



// let name = document.querySelector('#name')
// let course = document.querySelector('#course')
// let btnAdd = document.querySelector('#addBtn')
// let students = document.querySelector('#students')

// let arr = []

// function render() {
//     students.innerHTML = ''
//     arr.forEach((stu, idx) => {

//         students.innerHTML += `<div id="student">
//             <p>Name - ${stu.Usname}</p>
//             <p>Course - ${stu.Uscourse}</p>
//             <button onclick="deleteStu(${idx})" id="delete">Delete</button>
//         </div>`
//     })

// }
// render()

// btnAdd.addEventListener('click', () => {

//     if (name.value.trim() == '' || course.value.trim() == '') return

//     arr.push({
//         Usname: name.value,
//         Uscourse: course.value,
//     })
//     render()

//     name.value = ''
//     course.value = ''
// })

// function deleteStu(idx){
//     arr.splice(idx , 1)
//     render()
// }
