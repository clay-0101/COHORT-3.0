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
let tasks = JSON.parse(localStorage.getItem("tasks")) || []


function addNewTask() {
    taskContainer.innerHTML = ""

    if (tasks.length > 0) {
        taskContainer.style.display = 'flex'
        emptyOverlay.style.display = 'none'
    } else {
        taskContainer.style.display = 'none'
        emptyOverlay.style.display = 'flex'
    }


    tasks.forEach((e) => {
        taskContainer.innerHTML += `            
            <div class="li ${e.status === 'completed' ? 'completed' : ''}" data-id="${e.id}" data-status="${e.status}" data-category= ${e.category}>
                <div class="checkBox">
                    <div class="checkbox-child"></div>
                </div>
                <div class="textPart">
                    <h1 class='titleText'>${e.title}</h1>
                    <p class='categoryValue'>${e.category}</p>
                </div>
                <p class="date">${e.date}</p>
                <div class="btnDiv">
                    <button class="deleteBtn"><i class="ri-delete-bin-5-line"></i></button>
                    <button class="editBtn"><i class="ri-pencil-fill"></i></button>
                </div>
            </div>`
    })

}
addNewTask();

//toggle task color function

function toggleTaskStatus(li) {
    const taskId = li.dataset.id
    const taskIndx = tasks.findIndex(task => String(task.id) === taskId)

    if (taskIndx === -1) return
    if (tasks[taskIndx].status === 'completed') {
        tasks[taskIndx].status = 'incomplete'
    }else {
        tasks[taskIndx].status = 'completed'
    }

    localStorage.setItem("tasks",JSON.stringify(tasks))
    addNewTask()
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
    var obj = {
        id: Date.now(),
        title: title.value,
        category: category.value,
        date: date.value,
        status: 'incomplete'
    }


    tasks.push(obj)
    localStorage.setItem("tasks", JSON.stringify(tasks));

    addNewTask()

    form.reset()                //always reset all input values after submitting
})

// addEventListener that checks any click on the taskList and update accordingly

taskList.addEventListener('click', (e) => {
    let li = e.target.closest('.li')            //clicked div containing .li class will be selected here

    if (e.target.closest('.deleteBtn')) {
        if (e.target.closest('.deleteBtn')) {
            if (confirm('Are you sure?')) {
                const taskId = li.dataset.id;
                tasks = tasks.filter(task => String(task.id) !== taskId)

                localStorage.setItem("tasks", JSON.stringify(tasks))
                addNewTask();
                toasterCall("Task Deleted")
            }
        }
    }

    if (e.target.closest('.checkBox')) {
        toggleTaskStatus(li);

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


    if (editTitle.value === currentLi.querySelector('.titleText').textContent && editDate.value === currentLi.querySelector('.date').textContent && editCategory.value === currentLi.querySelector('.categoryValue').textContent) {
        alert("Please make any changes first...")
        return
    }

    //update localStorage first

    const taskId = Number(currentLi.getAttribute('data-id'))
    const index = tasks.findIndex(t => t.id === taskId)
    if (index !== -1) {
        tasks[index].title = editTitle.value
        tasks[index].date = editDate.value
        tasks[index].category = editCategory.value
        localStorage.setItem("tasks", JSON.stringify(tasks))
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


