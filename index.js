console.log("kekekek");

// first conver time to hours, minutes , seconds and milisecond formart

function timeToString(time) {
  // get hours
  let hrDiff = time / 3600000;
  let hrs = Math.floor(hrDiff);

  // get minutes
  let minDiff = (hrDiff - hrs) * 60;
  let mins = Math.floor(minDiff);

  // get seconds
  let secDiff = (minDiff - mins) * 60;
  let secs = Math.floor(secDiff);

  // get milisecond
  let mlsDiff = (secDiff - secs) * 100;
  let mls = Math.floor(mlsDiff);
//   use padStart to get double digits

  let formattedMins = mins.toString().padStart(2, "0");
  let formattedSecs = secs.toString().padStart(2, "0");
  let formattedMls = mls.toString().padStart(2, "0");

  return `${formattedMins}:${formattedSecs}:${formattedMls}`;
}

// variable declarations

let startTime;
let elaspedTime = 0;
let timeInterval;

// modify innerHtml

function print(timeText) {
  document.getElementById("display").innerHTML = timeText;
//   console.log(timeText);
}

// print("20:20:20")

// start function
function start(){
    startTime = Date.now() - elaspedTime
    timeInterval = setInterval(function printTime(){
        elaspedTime = Date.now() - startTime
        print(timeToString(elaspedTime))
    },10)
    showButton("PAUSE")
}

// pause function
function pause(){
    clearInterval(timeInterval)
    showButton("PLAY")
}
// reset function

function reset(){
    clearInterval(timeInterval)
    print("00:00:00")
    elaspedTime=0;
    showButton("PLAY")
}

// display btns

function showButton(btnKey){
    const btnToShow  =  btnKey  === "PLAY" ? playBtn : pauseBtn
    const btnToHide = btnKey === "PLAY" ? pauseBtn : playBtn

    btnToShow.style.display = "block"
    btnToHide.style.display =" none"
}

// event listeners

let playBtn = document.getElementById("playBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")

playBtn.addEventListener("click", start)
pauseBtn.addEventListener("click", pause)
resetBtn.addEventListener("click", reset)