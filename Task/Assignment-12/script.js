// selection real html elements with querySelector
let feature1 = document.querySelector('.feature-1')
let toDoList = document.querySelector('.to-do-list')
const features = document.querySelector('.features')


// handling features

features.addEventListener('click',(e)=>{
    if(e.target.classList.contains('feature-1')){
        toDoList.style.display = 'initial'
    }
})

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
        
        console.log(`Perfect City: ${cityName}(${stateName})`);
    
    
        
    });

setInterval(() => {
    let now = new Date();
    let time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true   
    });
    
}, 1000);
}

getWeather()