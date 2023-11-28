const container = document.querySelector(".container");
const text = document.getElementById(".text");

let totalTime = 7500;
let breatheTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;

meditateAnimation();

function meditateAnimation() {
    setTimeout(() => {
        text.innerHTML = "止めて！";
    }, breatheTime);
}