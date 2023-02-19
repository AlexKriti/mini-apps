let start = document.querySelector('button#start');
let game = document.querySelector('div#game');
let time = document.querySelector('span#time');
let result = document.querySelector('span#result');
let timeH1 = document.querySelector('h1#time-header');
let resultH1 = document.querySelector('h1#result-header');
let inputTime = document.querySelector('input#game-time');
let score = 0;
let isGameActive = false;

inputTime.addEventListener('change', ()=>{
    time.innerText = inputTime.value;
    resultH1.classList.add('hide');
    timeH1.classList.remove('hide');

})

let startGame = function () {
    score = 0;
    timeH1.classList.remove('hide');
    resultH1.classList.add('hide');
    time.innerText = inputTime.value
    isGameActive = true;
    start.classList.add('hide');
    game.style.background = 'white';
    let interval = setInterval(function () {
        let currentTime;
        currentTime = Number(time.innerText);
        if (currentTime <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.innerText = (currentTime - 0.1).toFixed(1)
        }
    }, 100);
    
    renderBox();
}

endGame = function () {
    isGameActive = false;
    game.innerHTML = '';
    start.classList.remove('hide');
    game.style.background = 'grey';
    timeH1.classList.add('hide');
    resultH1.classList.remove('hide');
    result.innerText = score;
    
}

getRandom = (min, max) => {
    return (Math.floor(Math.random() * (max - min) + min))
}

renderBox = () => {
    let randomSize = getRandom(30, 100);
    let maxDelta = 300 - randomSize;
    game.innerHTML = '';
    let div = document.createElement('div');
    div.style.width = `${getRandom(randomSize, randomSize)}px`;
    div.style.height = `${getRandom(randomSize, randomSize)}px`
    div.style.position = 'absolute';
    div.style.background = 'black';
    div.style.top = `${getRandom(randomSize, maxDelta)}px`;
    div.style.left = `${getRandom(randomSize, maxDelta)}px`;
    div.style.cursor = 'pointer';
    game.appendChild(div);
    div.classList.add('box')
}

function gameBoxClick(event) {
    if (!isGameActive) {
        return
    }
        if (event.target.classList.contains('box')) {
            score++;
            renderBox()
        }
}

game.addEventListener('click', gameBoxClick
)

start.addEventListener('click', startGame)
console.log(start)