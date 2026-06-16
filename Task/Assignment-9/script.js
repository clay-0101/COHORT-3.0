const main = document.querySelector('main')
const box = document.querySelector('.box')
const startBtn = document.querySelector('#startBtn')
const timer = document.querySelector('#timer')
const liveScore = document.querySelector('#score')
const gameOver = document.querySelector('#overlay')
const finalScore = document.querySelector('#finalScore')

let timeInterval;
let timeOut;
let time = 0;
let score = 0;


//GENERATE RANDOM COLOR 
function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let color = `rgb(${r},${g},${b})`
    return color
}


// GENERATE RANDOM POSITION
function randomBox() {

    //BOX IS VISIBLE AND SET A RANDOM COLOR WHEN THIS FUNCTION CALLS
    box.style.display = 'block'
    box.style.backgroundColor = randomColor()

    //TAKING THE HEIGHT AND WIDTH OF THE MAIN CONTAINER IN WHICH THE MINI BOX IS RANDOMLY PLACED
    const mainH = main.clientHeight - box.offsetHeight
    const mainW = main.clientWidth - box.offsetWidth

    //EVERY TIME WHEN THIS FUNCTION CALL, THE TIMER IS INCREASED BY '1' THAT IS LOOK LIKE REAL STOPWATCH
    time += 1
    timer.textContent = time

    //NOW TAKING RANDOM 'TOP' AND 'LEFT' ACCORING TO THE MAIN CONTAINER HEIGHT AND WIDTH
    let rX = Math.floor(Math.random() * mainW)
    let rY = Math.floor(Math.random() * mainH)

    //SET THE 'rX' AND 'rY' IN MINI BOX STYLING
    box.style.left = `${rX}px`
    box.style.top = `${rY}px`

}


//START THE GAME.. 
startBtn.addEventListener('click', (e) => {

    // CLEAR TIMEINTERVAL AND TIMEOUT FOR SITUATION , IF THE USER CLICK THE 'GO' BUTTON MULTIPLE TIMES
    clearInterval(timeInterval)
    clearTimeout(timeOut)

    // ALSO CLEAR TIMER, AND TIME SET TO INITIAL VALUE = 0

    time = 0;
    score = 0;
    liveScore.textContent = 0;
    timer.textContent = 0;


    // IN EVERY ONE SECOND TIME-INTERVAL CALL THE 'RANDOMBOX()' FUNCTION
    timeInterval = setInterval(() => {
        randomBox()
    }, 1000)

    // AFTER '10s' SET-TIMEOUT CLEAR INTERVAL AND TIME AND TIMER SET TO ITS INITIAL VALUE = 0
    timeOut = setTimeout(() => {
        box.style.display = 'none'
        clearInterval(timeInterval)
        overlay(score)
        time = 0
        score = 0;
        timer.textContent = 0
        liveScore.textContent = 0;
    }, 10700)

})


//USER CLICK ONLY ONE TIME ON A BOX 
box.addEventListener('click', () => {
    score += 1
    liveScore.textContent = score
    box.style.display = 'none'
},)

//GAMEROVER SCREEN POPUP WHEN TIMEOUT
function overlay(scored) {
    finalScore.textContent = scored
    gameOver.style.display = 'flex'
    setTimeout(() => {
        gameOver.style.display = 'none'
    },3000)
}