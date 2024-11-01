var timer = 60;
var score = 0;
var ranHit;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function makeBubble() {
    var clutter = "";

    for (let i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerInterval);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over!</h1>";
            document.querySelector("#pbtm").style.backgroundColor = "red";
        }
    }, 1000);
}

function getNewHit() {
    ranHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = ranHit;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);

    if (clickedNum === ranHit) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else {
        document.querySelector("#pbtm").innerHTML = "<h1>Game Over!</h1>";
        document.querySelector("#pbtm").style.backgroundColor = "red";
    }

})

runTimer();
makeBubble();
getNewHit();
