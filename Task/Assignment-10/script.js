const form = document.querySelector('form')
const title = document.querySelector('#title')
const date = document.querySelector('#date')
const category = document.querySelector('#category')
const addBtn = document.querySelector('#addBtn')
const taskList = document.querySelector('#task-list')
const emptyOverlay = document.querySelector('.empty')
let chkBox = false

function addNewTask() {
    taskList.innerHTML += `            
            <div class="li">
                <div class="checkBox">
                    <div class="checkbox-child"></div>
                </div>
                <div class="textPart">
                    <h1>${title.value}</h1>
                    <p>${category.value}</p>
                </div>
                <p>${date.value}</p>
                <div class="btnDiv">
                    <button class="deleteBtn"><i class="ri-delete-bin-5-line"></i></button>
                    <button class="editBtn"><i class="ri-pencil-fill"></i></button>
                </div>
            </div>`
}
form.addEventListener('submit', (event) => {

    event.preventDefault()
    if (title.value.trim() == '' || date.value.trim() == '' || category.value.trim() == '') {
        alert('Please fill all the fields....')
        return
    }

    emptyOverlay.style.display = 'none'

    addNewTask()

    title.value = ''
    date.value = ''
    category.value = ''
})
taskList.addEventListener('click', (e) => {
    let li = e.target.closest('.li')



    if (e.target.classList.contains('deleteBtn')) {
        alert('Are you sure...')
        taskList.removeChild(li)
    }

    if (e.target.classList.contains('checkBox')) {
        let glowDot = li.querySelector('.checkbox-child')
        if (chkBox == false) {
            glowDot.style.display = 'block'
            chkBox = true
            

        } else {
            glowDot.style.display = 'none'
            chkBox = false
            
        }
    }
})