// selection real html elements with querySelector
let feature1 = document.querySelector('.feature-1')
let toDoList = document.querySelector('.to-do-list')
const Home = document.querySelector('.home')
const features = document.querySelector('.features')
const current_Time = document.querySelector('#current_Time')
const current_Day = document.querySelector('#day')
const current_Location = document.querySelector('#location')
const current_Date = document.querySelector('#date')
const current_Temperature = document.querySelector('#temperature')
const weather_Messege = document.querySelector('#weather_messege')
const heatHumiWind = document.querySelector('#hhw')

let now = new Date();
let hours = now.getHours()
let ampm = hours >= 12 ? "PM" : "AM"

function setBg(ampm) {
    console.log(hours)
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