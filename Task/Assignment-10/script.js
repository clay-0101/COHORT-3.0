const form = document.querySelector('form')
const title = document.querySelector('.title')
const date = document.querySelector('.date')
const category = document.querySelector('.category')
const addBtn = document.querySelector('.addBtn')
const taskList = document.querySelector('#task-list')
const emptyOverlay = document.querySelector('.empty')
const editContainer = document.querySelector('.edit-container')
const toasterContainer = document.querySelector(".toasterContainer");

let chkBox = false
let currentLi = null

function addNewTask() {
    taskList.innerHTML += `            
            <div class="li">
                <div class="checkBox">
                    <div class="checkbox-child"></div>
                </div>
                <div class="textPart">
                    <h1 class='titleText'>${title.value}</h1>
                    <p class='categoryValue'>${category.value}</p>
                </div>
                <p class="date">${date.value}</p>
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

    // title.value = ''
    // date.value = ''
    // category.value = ''
    form.reset()
})
taskList.addEventListener('click', (e) => {
    let li = e.target.closest('.li')

    if (e.target.closest('.deleteBtn')) {
        if (confirm('Are you sure?')) {
            li.remove();
            toasterCall("Task Deleted")
        }
    }

    if (e.target.closest('.checkBox')) {
        let glowDot = li.querySelector('.checkbox-child')
        if (chkBox == false) {
            glowDot.style.display = 'block'
            chkBox = true
            li.querySelector('.titleText').style.textDecoration = 'line-through'
            li.querySelector('.titleText').style.color = 'rgba(128, 128, 128, 0.564)'
            li.querySelector('.categoryValue').style.color = 'rgba(128, 128, 128, 0.564)'
            li.querySelector('.categoryValue').style.textDecoration = 'line-through'

        } else {
            glowDot.style.display = 'none'
            chkBox = false
            li.querySelector('.titleText').style.textDecoration = 'none'
            li.querySelector('.categoryValue').style.textDecoration = 'none'
            li.querySelector('.titleText').style.color = 'rgb(0, 0, 0)'
            li.querySelector('.categoryValue').style.color = '#3266ad'

        }
    }

    if (e.target.closest('.editBtn')) {
        currentLi = li
        editContainer.style.display = 'flex'

        editTitle.value = li.querySelector('.titleText').textContent
        editDate.value = li.querySelector('.date').textContent
        editCategory.value = li.querySelector('.categoryValue').textContent
    }
})

const editForm = editContainer.querySelector('form')
const editTitle = editContainer.querySelector('.title')
const editDate = editContainer.querySelector('.date')
const editCategory = editContainer.querySelector('.category')
const cancelButton = editContainer.querySelector('.cancel')

cancelButton.addEventListener('click', function () {
    editContainer.style.display = 'none'
})

editForm.addEventListener('submit', function (e) {
    e.preventDefault()

    if (editTitle.value.trim() == '' || editDate.value.trim() == '' || editCategory.value.trim() == '') {
        alert('Please fill all the fields....')
        return
    }

    currentLi.querySelector('.titleText').textContent = editTitle.value
    currentLi.querySelector('.date').textContent = editDate.value
    currentLi.querySelector('.categoryValue').textContent = editCategory.value

    editContainer.style.display = 'none'
    editForm.reset()

    toasterCall("Updated Task");

})

function toasterCall(message){
    let messageDiv = document.createElement("div")
    messageDiv.textContent = message
    messageDiv.classList.add("toasterMessage")
    toasterContainer.appendChild(messageDiv)
    setTimeout(() => {
        toasterContainer.removeChild(messageDiv)
    }, 2000)
}