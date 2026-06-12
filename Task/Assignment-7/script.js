const input = document.querySelector('input')
const btn = document.querySelector('#addBtn')
const todoList = document.querySelector('#todo-list')


btn.addEventListener('click', () => {
    let value = input.value
    if(value.trim() == "") return
    todoList.innerHTML += `<div class="li">
                    <p>${value}</p>
                    <div>
                        <button class="btn btn1">Edit</button>
                        <button class="btn btn2">Delete</button>
                    </div>
                </div>`
    input.value = ""

})