let myCountdown = document.getElementById("countdown");
let step = 10;
let rate=1000;
let tic;



function pauseHandler(element) {
    if (step === 10) myCountdown.innerHTML = 10;
    if (element.innerHTML === "STOP") {
        element.innerHTML = "START";
        clearInterval(tic);
    } else {
        element.innerHTML = "STOP";
        tic = setInterval(function () {
            step -= 1;
            myCountdown.innerHTML = step;
            if (step < 0) {
            step = 10;
            myCountdown.innerHTML = "TIME OUT";
            element.innerHTML = "RESTART";
            clearInterval(tic);
            }
        }, rate);        
    }
}




