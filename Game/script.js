const modi = document.querySelector('#modiBird')
const game = document.querySelector('#game')
const bgMusic = document.querySelector('#bgMusic');
const bgMusic2 = document.querySelector('#bgMusic2');

let birdTop = 200;
let gravity = 2;
setInterval(() => {
    birdTop += gravity
    modi.style.top = birdTop + 'px'
}, 20)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        birdTop -= 60
        modi.style.top = birdTop + 'px'
        bgMusic.play();
    }
})

function createPipe() {
    const pipeTop = document.createElement('div')
    const pipeBottom = document.createElement('div')

    pipeTop.className = 'pipe'
    pipeBottom.className = 'pipe'

    let gap = 100;
    let gameHeight = game.clientHeight
    let maxHeight = gameHeight - gap - 60


    let topPipeHeight = Math.random() * maxHeight + 50;
    let bottomPipeHeight = maxHeight - topPipeHeight - gap

    pipeTop.style.height = topPipeHeight + 'px'
    pipeBottom.style.height = bottomPipeHeight + 'px'

    game.append(pipeTop, pipeBottom)


    let pipeLeft = game.clientWidth

    pipeTop.style.top = '0'
    pipeBottom.style.bottom = '0'
    pipeTop.style.left = pipeLeft + 'px'
    pipeBottom.style.left = pipeLeft + 'px'



    let move = setInterval(() => {
        pipeLeft -= 2
        pipeTop.style.left = pipeLeft + 'px'
        pipeBottom.style.left = pipeLeft + 'px'

        let birdRect = modi.getBoundingClientRect()
        let pipeTopRect = pipeTop.getBoundingClientRect()
        let pipeBottomRect = pipeBottom.getBoundingClientRect()
        let gameRect = game.getBoundingClientRect()

        // Collision check
        if (
            birdRect.right > pipeTopRect.left &&
            birdRect.left < pipeTopRect.right &&
            (birdRect.top < pipeTopRect.bottom || birdRect.bottom > pipeBottomRect.top)
        ) {
            bgMusic.pause();
            bgMusic.currentTime = 0;
            bgMusic2.play();
            alert("Game Over!")
            clearInterval(move)

            location.reload();
        }

        if (birdRect.top <= gameRect.top || birdRect.bottom >= gameRect.bottom) {
            bgMusic.pause();
            bgMusic.currentTime = 0;
            bgMusic2.play();
            alert("Game Over!");
            birdTop = 200
            location.reload();
        }


        if (pipeLeft < -60) {
            pipeTop.remove()
            pipeBottom.remove()
            clearInterval(move)
        }


    }, 20)
}
setInterval(createPipe, 3000)