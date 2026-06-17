// select elements using DOM querySelector

const form = document.querySelector('form')
const title = document.querySelector('.title')
const date = document.querySelector('.date')
const category = document.querySelector('.category')
const addBtn = document.querySelector('.addBtn')
const taskList = document.querySelector('#task-list')
const emptyOverlay = document.querySelector('.empty')
const editContainer = document.querySelector('.edit-container')
const toasterContainer = document.querySelector('.toasterContainer');
const taskContainer = document.querySelector('.task-container')

// initial variables

let chkBox = false
let currentLi = null

// function use for adding tasks in taskContainer

function addNewTask() {
    taskContainer.innerHTML += `            
            <div class="li" data-id="${Date.now()}" data-status="${chkBox === false ? 'incomplete' : 'complete'}" data-category= ${category.value}>
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

// eventListener on form that will create tasks

form.addEventListener('submit', (event) => {

    event.preventDefault()
    if (title.value.trim() == '' || date.value.trim() == '' || category.value.trim() == '') {
        alert('Please fill all the fields....')
        return
    }
    taskContainer.style.display = 'flex'
    emptyOverlay.style.display = 'none'

    addNewTask()

    form.reset()                //always reset all input values after submitting
})

// addEventListener that checks any click on the taskList and update accordingly

taskList.addEventListener('click', (e) => {
    let li = e.target.closest('.li')            //clicked div containing .li class will be selected here

    if (e.target.closest('.deleteBtn')) {       //delete task functionality
        if (confirm('Are you sure?')) {
            li.remove()
            toasterCall("Task Deleted")         //toaster notification call for delete functionality
            if (taskContainer.innerHTML.trim() === '') {
                emptyOverlay.style.display = 'flex'
                taskContainer.style.display = 'none'
            }
        }
    }

    if (e.target.closest('.checkBox')) {        //task complete functionality

        let glowDot = li.querySelector('.checkbox-child')
        if (chkBox == false) {
            glowDot.style.display = 'block'
            chkBox = true
            if (document.querySelector('main').getAttribute("class") === "light") {
                li.querySelector('.titleText').style.color = 'rgba(128, 128, 128, 0.564)'
                li.querySelector('.categoryValue').style.color = 'rgba(128, 128, 128, 0.564)'
            } else {
                li.querySelector('.titleText').style.color = 'rgb(162, 162, 162)'
                li.querySelector('.categoryValue').style.color = 'rgb(203, 203, 203)'

            }
            li.querySelector('.titleText').style.textDecoration = 'line-through'
            li.querySelector('.categoryValue').style.textDecoration = 'line-through'
            li.setAttribute('data-status', chkBox === false ? 'incomplete' : 'completed')


        } else {
            glowDot.style.display = 'none'
            chkBox = false
            if (document.querySelector('main').getAttribute("class") === "light") {
                li.querySelector('.titleText').style.color = 'rgb(0, 0, 0)'
                li.querySelector('.categoryValue').style.color = '#3266ad'
            }else{
                li.querySelector('.titleText').style.color = 'white'
                li.querySelector('.categoryValue').style.color = 'white'
            }

            li.querySelector('.titleText').style.textDecoration = 'none'
            li.querySelector('.categoryValue').style.textDecoration = 'none'
            li.setAttribute('data-status', chkBox === false ? 'incomplete' : 'completed')

        }
    }

    if (e.target.closest('.editBtn')) {             //edit functionality
        currentLi = li                              //this will select the particular clicked .li containing div
        editContainer.style.display = 'flex'

        editTitle.value = li.querySelector('.titleText').textContent
        editDate.value = li.querySelector('.date').textContent
        editCategory.value = li.querySelector('.categoryValue').textContent
    }
})

//selected Update form using querySelecter

const editForm = editContainer.querySelector('form')
const editTitle = editContainer.querySelector('.title')
const editDate = editContainer.querySelector('.date')
const editCategory = editContainer.querySelector('.category')
const cancelButton = editContainer.querySelector('.cancel')

cancelButton.addEventListener('click', function () {            //if the user changed his/her mind for editing task, can click cancel.
    editContainer.style.display = 'none'
})

editForm.addEventListener('submit', function (e) {              //after doing all updated use update button for updating task
    e.preventDefault()

    // check if any input is blank or contains only blankspaces

    if (editTitle.value.trim() == '' || editDate.value.trim() == '' || editCategory.value.trim() == '') {
        alert('Please fill all the fields....')
        return
    }


    //check if the updated data and the data before updatation is same or not.


    if(editTitle.value === currentLi.querySelector('.titleText').textContent && editDate.value === currentLi.querySelector('.date').textContent && editCategory.value === currentLi.querySelector('.categoryValue').textContent){
        alert("Please make any changes first...")
        return
    }

    //set the input values in html

    currentLi.querySelector('.titleText').textContent = editTitle.value
    currentLi.querySelector('.date').textContent = editDate.value
    currentLi.querySelector('.categoryValue').textContent = editCategory.value
    currentLi.setAttribute('data-category', editCategory.value)

    editContainer.style.display = 'none'
    editForm.reset()

    toasterCall("Updated Task");                                //toaster function call for updated task

})

function toasterCall(message) {                                 //toaster function defination
    let messageDiv = document.createElement("div")
    messageDiv.textContent = message
    messageDiv.classList.add("toasterMessage")
    toasterContainer.appendChild(messageDiv)
    setTimeout(() => {
        toasterContainer.removeChild(messageDiv)
    }, 2000)
}

//Create toggle DARK and LIGHT mode 

(function toggleTheme() {
    let toggle = document.querySelector("#toggleBtn");

    function setDarkOrLight() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('main').classList.add("dark");
            document.querySelector('main').classList.remove("light");

        } else {
            document.querySelector('main').classList.add("light");
            document.querySelector('main').classList.remove("dark");
        };
    };


    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.querySelector('main').classList.add(savedTheme);
        if (savedTheme === "dark") {
            document.querySelector('main').classList.remove("light");

        } else {
            document.querySelector('main').classList.remove("dark");
        }
    } else {
        setDarkOrLight();
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
        if (!localStorage.getItem("theme")) {
            setDarkOrLight();
        }
    });

    toggle.addEventListener('click', function () {
        if (document.querySelector('main').classList.contains('light')) {
            document.querySelector('main').classList.add("dark");
            document.querySelector('main').classList.remove("light");
            localStorage.setItem("theme", "dark");

        } else {
            document.querySelector('main').classList.add("light");
            document.querySelector('main').classList.remove("dark");
            localStorage.setItem("theme", "light");
        };
    });
})()