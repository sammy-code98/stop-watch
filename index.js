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
  console.log(timeText);
}

print("20:20:20")