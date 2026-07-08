// selection real html elements with querySelector
const feature1 = document.querySelector('.feature1')
const feature2 = document.querySelector('.feature2')
const feature3 = document.querySelector('.feature3')
const feature4 = document.querySelector('.feature4')
const feature5 = document.querySelector('.feature5')
const feature6 = document.querySelector('.feature6')
const feature7 = document.querySelector('.feature7')
const feature8 = document.querySelector('.feature8')
const feature9 = document.querySelector('.feature9')
const feature10 = document.querySelector('.feature10')
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

let now = new Date();
let hours = now.getHours()
let ampm = hours >= 12 ? "PM" : "AM"

function setBg(ampm) {

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

let rotation = 0; // starting angle

window.addEventListener('wheel', (e) => {

    rotation += e.deltaY * 0.2;
    features.style.transform = `rotate(${rotation}deg)`;
});

var apiKey = '87cf32deedd9442793a70453250305';
async function getWeather() {

    navigator.geolocation.getCurrentPosition(async (position) => {
        // initialize latitude and longitude
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        //Get Weather Data According longitude and latitude 
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`);
        let data = await response.json();

        console.log(data);

        // city and State Name iniitalize
        let cityName = data.location.name;
        let stateName = data.location.region;

        let heat = data.current.heatindex_c
        let humidity = data.current.humidity
        let wind = data.current.wind_kph

        current_Location.textContent = `${stateName} (${cityName})`
        current_Temperature.textContent = `${data.current.temp_c}°C`
        weather_Messege.textContent = data.current.condition.text
        heatHumiWind.innerHTML = `Heat_Index : ${heat}% <br> Humidity : ${humidity}% <br> Wind : ${wind}km/h`
        console.log(`Perfect City: ${cityName}(${stateName.innerText})`);



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
        toDoList.style.display = 'flex'
    }

    if (e.target.closest('.feature2') || e.target.closest('.feature7')) {
        taskManager.style.display = 'flex'
    }

    if (e.target.classList.contains('feature8') || e.target.classList.contains('feature3')) {
        motivation_quotes.style.display = "block"
    }
})

backBtn.addEventListener('click', () => {
    toDoList.style.display = 'none'
})

taskManagerback.addEventListener('click', () => {
    taskManager.style.display = 'none'
})

remove_quotes.addEventListener('click', () => {
    console.log('hello')
    motivation_quotes.style.display = "none"
})