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

                    <div class='btnParent'>
                        <button class="btn btn1">Edit</button>
                        <button class="btn btn2">Delete</button>
                    </div>`

    todoList.appendChild(task)
    input.value = ""
});


todoList.addEventListener('click', (e) => {
    let li = e.target.closest('.li')
    let para = li.querySelector('.para')
    if (!li) return;


    //FOR DELETING
    if (e.target.classList.contains('btn2')) {
        todoList.removeChild(li)
    }

    //FOR EDIT
    if (e.target.classList.contains('btn1')) {

        //Save previous value of task 
        li.dataset.prev = para.textContent

        //Content Editable True FOR UPDATE THE TASK

        para.setAttribute('contenteditable', 'true')
        para.focus()

        // HIDE 'EDIT' AND 'DELETE' BTN
        li.querySelector('.btnParent').style.display = 'none'

        //ADD BUTTON 'OK' AND 'CANCLE'
        let editorDiv = document.createElement('div')
        editorDiv.classList.add('editorDiv')
        editorDiv.innerHTML = `
                        <button class="btn btn3">OK</button>
                        <button class="btn btn4">Cancel</button>`;

        li.appendChild(editorDiv)
    }

    if (e.target.classList.contains('btn3')) {

        if (!para.textContent == '') {
            para.setAttribute('contenteditable', 'false')
        } else {
            alert('Please enter a task before updating....')
            para.textContent = li.dataset.prev
        }

        li.querySelector('.editorDiv').style.display = 'none'
        li.querySelector('.btnParent').style.display = 'block'

    }
    if (e.target.classList.contains('btn4')) {
        para.textContent = li.dataset.prev

        para.setAttribute('contenteditable', 'false')

        li.querySelector('.editorDiv').style.display = 'none'
        li.querySelector('.btnParent').style.display = 'block'
    }
})
