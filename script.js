function alwaysTwoDigits(digits) {
  if (digits < 10) {
    digits = "0" + digits;
  }

  return digits;
}

function twoDigitTime(hour, minute, second) {
  var minutes = alwaysTwoDigits(minute);
  var seconds = alwaysTwoDigits(second);

  return hour + ":" + minutes + ":" + seconds;
}

document.addEventListener("DOMContentLoaded", function() {
  moveHands();
  var clockItUp = setInterval(moveHands, 1000);
});

var lazyResizer;
window.addEventListener('resize', function() {
  if (lazyResizer)
    clearInterval(lazyResizer);

  lazyResizer = setTimeout(resizeHandler, 500);
});

function resizeHandler() {
  lazyResizer = null;
  var body = document.getElementsByTagName('body')[0];
  
  if (body.classList.contains("night")) {
    seeTheStars();
  }
}

// remove all stars
function clearTheSky() {
  var sky = document.querySelector("#night-sky > svg");

  // Clear the old sky.
  sky.querySelectorAll('circle').forEach(function(el){
    sky.removeChild(el);
  });
}

function seeTheStars() {
  var sky = document.querySelector("#night-sky > svg");
  var width = window.innerWidth;
  var height = window.innerHeight;
  var starCount = 100; // Of random tussen 0 en 100: Math.round(Math.random()*100);

  clearTheSky();

  sky.setAttribute("viewBox", "0 0 " + width + " " + height);

  // Tonight is a new sky. counts numbers for starcount var
  for (var i=0; i < starCount; i++) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.classList.add("star");
    circle.setAttributeNS(null, "cx", Math.round(Math.random()*width));
    circle.setAttributeNS(null, "cy", Math.round(Math.random()*height));
    circle.setAttributeNS(null, "r", 2);
    sky.appendChild(circle);
  }
}

function moveHands(time) {
	var body = document.getElementsByTagName('body')[0],
		secondhand = document.getElementById("second-hand"),
    minutehand = document.getElementById("minute-hand"),
    hourhand = document.getElementById("hour-hand"),
    readabletime = document.getElementById("readable-time");
  
    // het datumobject aldus de opdracht
  var time = new Date(),
    seconds = (360 / 60) * time.getSeconds(),
    minutes = (360 / 60) * time.getMinutes(),
		hours = (360 / 12) * time.getHours() + minutes / 60;
		
	// to adjust the nighttime visuals
	if (time.getHours() > 20 || time.getHours() < 8) { 
    // remove to trigger disco
    if (!body.classList.contains("night")) {
      body.classList.add('night');
      seeTheStars();
    }
	}
	else if(body.classList.contains("night")) {
    body.classList.remove('night');
    clearTheSky();
  }

  secondhand.style.transform = "rotate(" + seconds + "deg)";
  minutehand.style.transform = "rotate(" + minutes + "deg)";
  hourhand.style.transform = "rotate(" + hours + "deg)";

  readabletime.innerHTML =
    "Clock Time: " +
    twoDigitTime(time.getHours(), time.getMinutes(), time.getSeconds());
}
