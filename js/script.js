let timer = document.querySelector(".timer");
let testArea = document.querySelector("#testarea");
let temText = document.querySelector("#two").innerHTML;
let wrapperText = document.querySelector(".wrapper-text");
let resetBtn = document.querySelector("#restart");
var theTimer = [0, 0, 0, 0];
var timerRunning = false;
var interval;
function runTimer() {
  let currentTime =
    leadingZero(theTimer[0]) +
    ":" +
    leadingZero(theTimer[1]) +
    ":" +
    theTimer[2];
  timer.innerHTML = currentTime;
  theTimer[3]++;
  theTimer[0] = Math.floor(theTimer[3] / 100 / 60);
  theTimer[1] = Math.floor(theTimer[3] / 100 - theTimer[0] * 60);
  theTimer[2] = Math.floor(
    theTimer[3] - theTimer[1] * 100 - theTimer[0] * 6000
  );
}
function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}
function spellcheck() {
  let textEntered = testArea.value;
  let temTextMatch = temText.substring(0, textEntered.length);
  console.log(temTextMatch);
  if (textEntered == temText) {
    wrapperText.style.borderColor = "green";
    clearInterval(interval);
  } else if (textEntered == temTextMatch) {
    wrapperText.style.borderColor = "darkorange";
  } else {
    wrapperText.style.borderColor = "red";
  }
}
function start() {
  textEnteredlength = testArea.value.length;
  if (textEnteredlength == 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
}
function restart() {
  clearInterval(interval);
  interval = null;
  theTimer = [0, 0, 0, 0];
  timerRunning = false;
  testArea.value = "";
  wrapperText.style.borderColor = "#1794ad";
  timer.innerHTML = "00:00:00";
}
testArea.addEventListener("keyup", spellcheck);
testArea.addEventListener("keypress", start);
resetBtn.addEventListener("click", restart);
