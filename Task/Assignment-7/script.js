const input = document.querySelector('input')
const btn = document.querySelector('#addBtn')
const todoList = document.querySelector('#todo-list')



btn.addEventListener('click', () => {
    let value = input.value
    if (value.trim() == "") return


    //Creating Element li
    let task = document.createElement('div')
    task.classList.add('li')

    task.innerHTML = `
                    <div class='pParent'>
                    <p class='para'>${value}</p>
                    </div>

                    <div'>
                        <button class="btn btn1">Edit</button>
                        <button class="btn btn2">Delete</button>
                    </div>`

    todoList.appendChild(task)

    //For Delete The Task
    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn2')) {
            let child = e.target.closest('.li')
            todoList.removeChild(child)
        }
    })

    input.value = ""
})
