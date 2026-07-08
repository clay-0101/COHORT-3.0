const Home = document.querySelector('.home')
const features = document.querySelector('.features')
const current_Time = document.querySelector('#current_Time')
const current_Day = document.querySelector('#day')
const current_Location = document.querySelector('#location')
const current_Date = document.querySelector('#date')
const current_Temperature = document.querySelector('#temperature')
const weather_Messege = document.querySelector('#weather_messege')
const heatHumiWind = document.querySelector('#hhw')
const toDoList = document.querySelector('.to-do-list')
const form = document.querySelector('form')
const task = document.querySelector('#task')
const taskDisc = document.querySelector('#task-desc')
const category = document.querySelector('.category')
const important = document.querySelector('.important')
const date = document.querySelector('#due-date')
const taskContainer = document.querySelector('.task-container')
const dateContainer = document.querySelector(".date-container")
const backBtn = document.querySelector('.back')
const noTask = document.querySelector('.no-task')
const taskManager = document.querySelector('.task-manager')
const taskManagerback = document.querySelector('.task-manager-nav span')
const motivation_quotes = document.querySelector('#motivation_quotes')
const remove_quotes = document.querySelector('.remove-quotes')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const new_quote = document.querySelector('#new-quote')
const focus_Timer_Section = document.querySelector('#Focus-Timer-Section')
const remove_timerBtn = document.querySelector('#remove-FocusTimer')
const taskManagerDiv = document.querySelector('.task-manager-div')
const resetAllBtn = document.querySelector('.reset-all-btn')
const timer_min = document.querySelector('#timer_min')
const timer_sec = document.querySelector('#timer_sec')
const timer_start = document.querySelector('.timer-start')
const timer_reset = document.querySelector('.timer-reset')
const timer_pause = document.querySelector('.timer-pause')
const focus_timer = document.querySelector('#focus-timer')
const coundown = document.querySelector('#coundown')
const completed_done = document.querySelector('.complete-done')
const Session_Complete_Section = document.querySelector('#Session-Complete-Section')
const dailyGoals = document.querySelector('.daily-goals')
const dailyGoalsBack = document.querySelector('.daily-goals span')
const dailyGoalsContainer = document.querySelector('.daily-goals-container')
const dailyGoalsDiv = document.querySelector('.daily-goals-div')
const dailyGoalsform = document.querySelector('.daily-goals form')
const goalsStatus = document.querySelector('#goals-status')

let now = new Date();
let hours = now.getHours()
let ampm = hours >= 12 ? "PM" : "AM"

function setBg(ampm) {
    if (document.body.classList.contains('dark-theme')) {
        Home.style.backgroundImage = "url('https://media.512pixels.net/wp-content/uploads/2025/08/26-Tahoe-Beach-Night-thumb.jpeg')"
        return
    }

    if (ampm === "AM") {
        if (hours < 6) {
            Home.style.backgroundImage = "url('https://media.512pixels.net/wp-content/uploads/2025/08/26-Tahoe-Beach-Dusk-thumb.jpeg')"
        } else {
            Home.style.backgroundImage = " url('https://media.512pixels.net/wp-content/uploads/2025/08/26-Tahoe-Beach-Day-thumb.jpeg')"
        }
    }
    if (ampm === "PM") {
        if (hours < 16) {
            Home.style.backgroundImage = " url('https://media.512pixels.net/wp-content/uploads/2025/08/26-Tahoe-Beach-Day-thumb.jpeg')"
        }
        else if (hours >= 16 && hours <= 19) {
            Home.style.backgroundImage = "url('https://media.512pixels.net/wp-content/uploads/2025/08/26-Tahoe-Beach-Dawn-thumb.jpeg')"
        }
        else {
            Home.style.backgroundImage = "url('https://media.512pixels.net/wp-content/uploads/2025/08/26-Tahoe-Beach-Night-thumb.jpeg')"
        }
    }
}

const themeBtn = document.querySelector('#theme')

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme')
        themeBtn.classList.remove('ri-sun-line')
        themeBtn.classList.add('ri-moon-line')
    } else {
        document.body.classList.remove('dark-theme')
        themeBtn.classList.remove('ri-moon-line')
        themeBtn.classList.add('ri-sun-line')
    }
    setBg(ampm)
}

let savedTheme = localStorage.getItem('theme') || 'light'
applyTheme(savedTheme)

themeBtn.addEventListener('click', () => {
    let newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
})


const sectionsMap = {
    'todo': toDoList,
    'planner': taskManager,
    'quotes': motivation_quotes,
    'timer': focus_Timer_Section,
    'goals': dailyGoals
}

function openSection(key) {
    sectionsMap[key].style.display = 'flex'
    localStorage.setItem('activeSection', key)
}

function closeSection(key) {
    sectionsMap[key].style.display = 'none'
    localStorage.removeItem('activeSection')
}

let activeSection = localStorage.getItem('activeSection')
if (activeSection && sectionsMap[activeSection]) {
    sectionsMap[activeSection].style.display = 'flex'
}


backBtn.addEventListener('click', () => {
    closeSection('todo')
})

taskManagerback.addEventListener('click', () => {
    closeSection('planner')
})

remove_quotes.addEventListener('click', () => {
    closeSection('quotes')
})

remove_timerBtn.addEventListener('click', () => {
    // stop timer and fully reset focus timer state when exiting
    clearInterval(timerInter)
    minutes = 25
    seconds = 0
    timer_min.textContent = '25'
    timer_sec.textContent = '00'
    coundown.style.color = document.body.classList.contains('dark-theme') ? '#f2f1ec' : '#0e0e0e'
    focus_timer.style.display = 'flex'
    Session_Complete_Section.style.display = 'none'
    closeSection('timer')
})

dailyGoalsBack.addEventListener('click', () => {
    closeSection('goals')
})

let rotation = 0; // starting angle

window.addEventListener('wheel', (e) => {
    rotation += e.deltaY * 0.2;
    features.style.transform = `rotate(${rotation}deg)`;
});

var apiKey = '87cf32deedd9442793a70453250305';
async function getWeather() {

    navigator.geolocation.getCurrentPosition(async (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`);
        let data = await response.json();

        console.log(data);

        let cityName = data.location.name;
        let stateName = data.location.region;

        let heat = data.current.heatindex_c
        let humidity = data.current.humidity
        let wind = data.current.wind_kph

        current_Location.textContent = `${stateName} (${cityName})`
        current_Temperature.textContent = `${data.current.temp_c}°C`
        weather_Messege.textContent = data.current.condition.text
        heatHumiWind.innerHTML = `Heat_Index : ${heat}% <br> Humidity : ${humidity}% <br> Wind : ${wind}km/h`
    });

    setInterval(() => {
        let now = new Date();
        let hours = now.getHours()
        let ampm = hours >= 12 ? "PM" : "AM"
        let time = now.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true
        });
        setBg(ampm)
        let dayNumber = now.getDate()
        let yearNumber = now.getFullYear()
        let monthName = now.toLocaleDateString("en-US", { month: 'long' })
        current_Day.textContent = now.toLocaleDateString("en-US", { weekday: "long" });
        current_Time.textContent = time
        current_Date.textContent = `${monthName} ${dayNumber}th, ${yearNumber}`
    }, 1000);
}
getWeather()

let data = (JSON.parse(localStorage.getItem('data')) || [])

function addTask(data) {
    taskContainer.innerHTML = ''

    if (data.length === 0) {
        taskContainer.innerHTML += `
                    <div class="no-task">
                        <h1>NO TASK YET</h1>
                        <P>fill the form to add a new task...</P>
                    </div>`
    }
    data.forEach((obj, index) => {
        let dataDiv = document.querySelector(`.data.${obj.category} `);
        if (dataDiv) {
            dataDiv.innerHTML += `
                <div class="task-div ${obj.important} ${obj.date}" data-index="${index}" data-date="${obj.date}" >
                        <div class="checkbox">
                            <div class="checkbox-tick ${obj.important}" style="display: ${obj.checkBox ? 'block' : 'none'}"></div>
                        </div>
                        <p style="text-decoration: ${obj.checkBox ? 'line-through' : 'none'};color: ${obj.checkBox ? 'rgb(137, 137, 137)' : 'rgb(70, 70, 70)'};">${obj.task}</p>                        <div class="description">${obj.discription}</div>
                        <div class="dlt" data-index="${index}"><i class="ri-delete-bin-fill" style="color:rgb(38, 38, 38)"></i></div>
                    </div > `
        } else {
            taskContainer.innerHTML += `
                <div class="data ${obj.category}" >
                    <h6>${obj.category}</h6>
                    <div class="task-div ${obj.important} ${obj.date}" data-index="${index}" data-date="${obj.date}">
                        <div class="checkbox">
                            <div class="checkbox-tick ${obj.important}" style="display: ${obj.checkBox ? 'block' : 'none'}"></div>
                        </div>
                        <p style="text-decoration: ${obj.checkBox ? 'line-through' : 'none'};color: ${obj.checkBox ? 'rgb(137, 137, 137)' : 'rgb(70, 70, 70)'};">${obj.task}</p>                        <div class="description">${obj.discription}</div>
                        <div class="dlt" data-index="${index}"><i class="ri-delete-bin-fill" style="color:rgb(38, 38, 38)"></i></div>
                    </div>
                </div > `
        }
    })
}
addTask(data)

function addDate(data) {
    dateContainer.innerHTML = "";
    const days = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];
    const addedDates = new Set();

    if (dateContainer.innerHTML === '') {
        dateContainer.innerHTML += `
            <div class="task-date selected" data-date="All" >
                <h6>ALL</h6>
            </div >
            `
    }

    data.forEach((obj) => {
        if (addedDates.has(obj.date)) return;
        addedDates.add(obj.date);
        const inputDate = new Date(obj.date);

        dateContainer.innerHTML +=
            `
            <div class="task-date" data-date="${obj.date}" >
                <h6>${days[inputDate.getDay()]}</h6>
                <h6>${inputDate.getDate()}</h6>
            </div >
            `
    })
}
addDate(data)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (task.value === '' || taskDisc.value === '' || category.value === '' || date.value === '' || important.value === '') {
        alert("Please fill all fields...")
        return
    }

    data.push({
        task: task.value,
        discription: taskDisc.value,
        category: category.value,
        date: date.value,
        checkBox: false,
        important: important.value
    })

    localStorage.setItem('data', JSON.stringify(data));

    addTask(data)
    addDate(data)

    form.reset()
})

taskContainer.addEventListener('click', (e) => {
    let div = e.target.closest('.dlt')
    if (div) {
        let taskIndex = div.dataset.index
        data.splice(taskIndex, 1)
        localStorage.setItem('data', JSON.stringify(data))
        addTask(data)
        addDate(data)
        return
    }

    if (e.target.closest('.checkbox')) {
        const taskDiv = e.target.closest('.task-div');
        const index = Number(taskDiv.dataset.index);

        data[index].checkBox = !data[index].checkBox;

        localStorage.setItem("data", JSON.stringify(data));

        addTask(data);
        addDate(data);
    }
})

dateContainer.addEventListener('click', (e) => {
    const currDiv = e.target.closest('.task-date');
    if (!currDiv) return

    document.querySelectorAll('.task-date').forEach((div) => {
        div.classList.remove('selected')
    })

    currDiv.classList.add('selected')
    const taskDivs = document.querySelectorAll('.task-div')
    const selectedDate = currDiv.dataset.date

    taskDivs.forEach((tdiv) => {
        tdiv.style.display = (selectedDate === 'All' || tdiv.dataset.date === selectedDate) ? 'flex' : 'none'
    });

    document.querySelectorAll('.data').forEach((div) => {
        const td = div.querySelectorAll('.task-div');
        let sabHidden = true
        for (let i = 0; i < td.length; i++) {
            if (td[i].style.display !== 'none') {
                sabHidden = false
                break
            }
        }
        div.style.display = sabHidden ? 'none' : 'flex'
    });
})


features.addEventListener('click', (e) => {
    if (e.target.closest('.feature1') || e.target.closest('.feature6')) {
        openSection('todo')
    }

    if (e.target.closest('.feature2') || e.target.closest('.feature7')) {
        openSection('planner')
    }

    if (e.target.closest('.feature8') || e.target.closest('.feature3')) {
        openSection('quotes')
    }
    if (e.target.closest('.feature4') || e.target.closest('.feature9')) {
        openSection('timer')
    }

    if (e.target.closest('.feature5') || e.target.closest('.feature10')) {
        openSection('goals')
    }
})

async function getQuote() {
    let response = await fetch('https://dummyjson.com/quotes/random')
    let data = await response.json()

    quote.textContent = data.quote
    author.textContent = data.author
}
getQuote()
new_quote.addEventListener('click', getQuote)

let minutes = 25
let seconds = 0
let timerInter;

function timer() {
    if (minutes === 0 && seconds < 10) {
        coundown.style.color = '#ff3b30'
    }
    if (minutes === 0 && seconds === 0) {
        timer_min.textContent = '00'
        timer_sec.textContent = '00'
        focus_timer.style.display = 'none'
        Session_Complete_Section.style.display = 'flex'
        clearInterval(timerInter)
        return
    }

    timer_min.textContent = minutes.toString().padStart(2, '0')
    timer_sec.textContent = seconds.toString().padStart(2, '0')

    seconds--

    if (seconds < 0 && minutes > 0) {
        minutes--
        seconds = 59
    }
}

timer_start.addEventListener('click', () => {
    clearInterval(timerInter)
    timerInter = setInterval(() => {
        timer()
    }, 1000)
})
timer_pause.addEventListener('click', () => {
    clearInterval(timerInter)
})
timer_reset.addEventListener('click', () => {
    timer_min.textContent = '25'
    timer_sec.textContent = '00'
    minutes = 25
    seconds = 0
    coundown.style.color = document.body.classList.contains('dark-theme') ? '#f2f1ec' : '#0e0e0e'
    clearInterval(timerInter)
})
completed_done.addEventListener('click', () => {
    timer_min.textContent = '25'
    timer_sec.textContent = '00'
    minutes = 25
    seconds = 0
    coundown.style.color = document.body.classList.contains('dark-theme') ? '#f2f1ec' : '#0e0e0e'
    focus_timer.style.display = 'flex'
    Session_Complete_Section.style.display = 'none'
})

// daily planner code starts here
let dayPlannerData = JSON.parse(localStorage.getItem('dayPlannerData')) || {}

function loadPlannerData() {
    const forms = document.querySelectorAll('.tasks-manager-container')

    forms.forEach((form) => {
        const label = form.querySelector('label').textContent
        const input = form.querySelector('input')
        const nullDiv = form.querySelector('div')
        const button = form.querySelector('button')

        const saved = dayPlannerData[label]
        if (!saved) return

        input.value = saved.value
        nullDiv.textContent = saved.important ? 'important' : ''

        if (saved.completed) {
            input.style.textDecoration = 'line-through'
            input.disabled = true
            button.textContent = 'Completed'
        }
    })
}
loadPlannerData()

taskManagerDiv.addEventListener('change', (e) => {
    const input = e.target.closest('input')
    if (!input) return

    const form = input.closest('.tasks-manager-container')
    const label = form.querySelector('label').textContent
    const nullDiv = form.querySelector('div')
    const isImportant = input.value.startsWith('!')

    dayPlannerData[label] = {
        value: input.value,
        important: isImportant,
        completed: false
    }

    nullDiv.textContent = isImportant ? 'important' : ''

    localStorage.setItem('dayPlannerData', JSON.stringify(dayPlannerData))
})

taskManagerDiv.addEventListener('submit', (e) => {
    e.preventDefault()

    const form = e.target
    const label = form.querySelector('label').textContent
    const input = form.querySelector('input')
    const button = form.querySelector('button')

    if (!dayPlannerData[label]) return

    dayPlannerData[label].completed = true
    localStorage.setItem('dayPlannerData', JSON.stringify(dayPlannerData))

    input.style.textDecoration = 'line-through'
    input.disabled = true
    button.textContent = 'Completed'
    form.style.opacity = '0.3'
})

resetAllBtn.addEventListener('click', () => {
    dayPlannerData = {}
    localStorage.setItem('dayPlannerData', JSON.stringify(dayPlannerData))

    document.querySelectorAll('.tasks-manager-container').forEach((form) => {
        const input = form.querySelector('input')
        const nullDiv = form.querySelector('div')
        const completeBtn = form.querySelector('button[type="submit"]')

        input.value = ''
        input.disabled = false
        input.style.textDecoration = 'none'
        nullDiv.textContent = ''
        completeBtn.textContent = 'Complete'
        form.style.opacity = '1'
    })
})

let dailyGoalsData = JSON.parse(localStorage.getItem('dailyGoalsData')) || [];
let index = 0
let pastelColors = ["#FFF3B0", "#D8F3DC", "#D6EAF8", "#FADADD", "#FFD8A8", "#E9D8FD", "#FDE2E4", "#CDE7F0", "#E8F5E9", "#FCECC9", "#FFE5B4", "#DFF6FF", "#E4F9E0", "#F9E2AF", "#F3D5B5", "#EAD7D1", "#D4F4EC", "#E7E6F7", "#FFF8DC", "#F8EDEB"];

function addGoals() {
    dailyGoalsContainer.innerHTML = ''
    index = 0

    dailyGoalsContainer.innerHTML += `
                <div class="daily-goals-div" data-index="${index}" style="justify-content: center; align-items: center; background-color: ${pastelColors[index]};">
                    <h1 style="font-size: 4rem; font-weight: 400;">+</h1>
                </div>`

    index++

    dailyGoalsData.forEach((data, goalIndex) => {
        dailyGoalsContainer.innerHTML += `
                    <div class="daily-goals-div" data-index="${index}" data-goal-index="${goalIndex}" style="background-color: ${data.checkBox ? 'transparent' : pastelColors[index]}; opacity : ${data.checkBox ? 0.2 : 1};">
                        <h1 style="text-decoration: ${data.checkBox ? 'line-through' : 'none'};">${data.heading}</h1>
                        <p>${data.paragraph}</p>
                        <div class="goal-dlt" data-goal-index="${goalIndex}"><i class="ri-delete-bin-fill"></i></div>
                        <div class="checkbox">
                            <div class="checkbox-tick" style="display: ${data.checkBox ? 'block' : 'none'}"></div>
                        </div>
                    </div>`

        index++
        if (index >= pastelColors.length) index = 1
    })

    const completed = dailyGoalsData.filter((data) => data.checkBox).length
    goalsStatus.textContent = `${completed} of ${dailyGoalsData.length} task completed`
}
addGoals()

dailyGoalsContainer.addEventListener('click', (e) => {
    let box = e.target.closest('.daily-goals-div')
    if (!box) return

    if (e.target.closest('.cancel-btn')) {
        addGoals()
        return
    }

    if (e.target.closest('.goal-dlt')) {
        const goalIndex = Number(e.target.closest('.goal-dlt').dataset.goalIndex)
        dailyGoalsData.splice(goalIndex, 1)
        localStorage.setItem('dailyGoalsData', JSON.stringify(dailyGoalsData))
        addGoals()
        return
    }

    if (e.target.closest('.checkbox')) {
        const goalIndex = Number(box.dataset.goalIndex)
        dailyGoalsData[goalIndex].checkBox = !dailyGoalsData[goalIndex].checkBox
        localStorage.setItem('dailyGoalsData', JSON.stringify(dailyGoalsData))
        addGoals()
        return
    }

    if (box.dataset.index === '0' && !box.querySelector('form')) {
        box.innerHTML = `
            <form>
                <input type="text" class="heading" placeholder="Enter Task Heading">
                <input type="text" class="discription" placeholder="Enter Task Description">
                <button type="submit">ADD TASK</button>
                <button type="button" class="cancel-btn">Cancel</button>
            </form>`
    }
})

dailyGoalsContainer.addEventListener('submit', (e) => {
    e.preventDefault()

    const form = e.target
    const heading = form.querySelector('.heading').value
    const discription = form.querySelector('.discription').value

    if (!heading || !discription) return

    dailyGoalsData.push({ heading, paragraph: discription, checkBox: false })
    localStorage.setItem('dailyGoalsData', JSON.stringify(dailyGoalsData))

    addGoals()
})