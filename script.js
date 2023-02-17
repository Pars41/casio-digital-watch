// add light button

let light = document.querySelector(".light");

light.addEventListener("click", () => {
  let screen = document.querySelector(".screen");
  screen.classList.toggle("lightOnOff");
  document.querySelector("#top-left-push").classList.add("push-right")
  setTimeout(() => {
    document.querySelector("#top-left-push").classList.remove("push-right");
  }, 1000);
  setTimeout(() => {
    screen.classList.remove("lightOnOff");
  }, 3000);
});

// add alarm voice

let alarm = document.querySelector(".alarm");

alarm.addEventListener("click", () => {
  let audio = document.querySelector("#myAudio");
  document.querySelector("#bottom-right-push").classList.add("push-left")
  setTimeout(() => {
    document.querySelector("#bottom-right-push").classList.remove("push-left");
  }, 1000);

  audio.play();
});

// changing mode

let bool = true;

let mode = document.querySelector(".mode");

mode.addEventListener("click", () => {
  document.querySelector("#bottom-left-push").classList.add("push-right")
  setTimeout(() => {
    document.querySelector("#bottom-left-push").classList.remove("push-right");
  }, 1000);

  bool = !bool;
});

// showTime function

function showTime() {
  let date = new Date();
  let h = date.getHours();      // 0 - 23
  let m = date.getMinutes();    // 0 - 59
  let s = date.getSeconds();    // 0 - 59
  let d = date.getDay();        // 0 - 6
  let a = date.getDate();       // 0 - 30
  let session = "AM";

  switch (d) {
    case 0:
      d = "Sun";
      break;
    case 1:
      d = "Mon";
      break;
    case 2:
      d = "Tue";
      break;
    case 3:
      d = "Wed";
      break;
    case 4:
      d = "Thu";
      break;
    case 5:
      d = "Fri";
      break;
    case 6:
      d = "Sat";
  }

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // assignments

  document.getElementById("hour").innerText = bool == true ? h + ":" : date.getHours() + ":";

  document.getElementById("min").innerText = m;

  document.getElementById("sec").innerText = s;

  document.getElementById("session").innerText = bool == true ? session : "24H";

  document.getElementById("day").innerText = d;

  document.getElementById("date").innerText = a;

}
setInterval(showTime,100) // not 1000 sec because faster render of changing mode result
