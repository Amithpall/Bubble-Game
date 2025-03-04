var timer = 60;
var score = 0;
var hitnum = 0;

function changeScore() {
    score += 10;
    document.querySelector("#scoreCard").textContent = score;
}

function makeBubble() {
    var clutter = '';
    for (var i = 1; i <= 40; i++) {
        var random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector('#pbottom').innerHTML = clutter;
}

function runTimer() {
    var ti = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').innerText = timer;
        } else {
            document.querySelector("#pbottom").innerHTML =
                `<div>
                    <h1>Game Over</h1>
                    <h2>Your Score is ${score}</h2>
                    <div id="btn"><button>Play Again</button></div>
                </div>`;
            clearInterval(ti);
        }
    }, 1000);
}

function changeHit() {
    hitnum = Math.floor(Math.random() * 10);
    document.querySelector('#hitnum').innerText = hitnum;
}

function resetGame() {
    timer = 60;
    score = 0;
    hitnum = 0;
    document.querySelector('#timer').innerText = timer;
    document.querySelector('#scoreCard').innerText = score;
    changeHit();
    makeBubble();
    runTimer();
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum === hitnum) {
        changeScore();
        changeHit();
        makeBubble();
    }
});

document.addEventListener("click", function (event) {
    if (event.target && event.target.matches("#btn button")) {
        resetGame();
    }
});

// Initial game setup
resetGame();
