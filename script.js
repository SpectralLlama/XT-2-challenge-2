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

function clearTheSky() {
  var sky = document.querySelector("#night-sky > svg");

  // Clear the old sky.
  sky.querySelectorAll('circle').forEach(function(el){
    sky.removeChild(el);
  });
}

function seeTheStars() {
  var xmlns = "http://www.w3.org/2000/svg";
  var sky = document.querySelector("#night-sky > svg");
  var width = sky.width || 800;
  var height = sky.height || 600;
  var starCount = 100; // Of random: tussen 0 en 100: Math.random()*100;

  clearTheSky();

  // Tonight is a new sky.
  for (var i=0; i < starCount; i++) {
    var circle = document.createElementNS(xmlns, "circle");
    circle.classList.add("star");
    circle.cx = Math.random()*width;
    circle.cy = Math.random()*height;
    circle.r = 2;
    sky.appendChild(circle);
  }
}

function moveHands(time) {
	var body = document.getElementsByTagName('body')[0],
		secondhand = document.getElementById("second-hand"),
    minutehand = document.getElementById("minute-hand"),
    hourhand = document.getElementById("hour-hand"),
    readabletime = document.getElementById("readable-time");
  
  var time = new Date(),
    seconds = (360 / 60) * time.getSeconds(),
    minutes = (360 / 60) * time.getMinutes(),
		hours = (360 / 12) * time.getHours() + minutes / 60;
		
	// to adjust the nighttime visuals
	if (time.getHours() > 20 || time.getHours() < 8) { 
    body.classList.add('night');
    seeTheStars();
	}
	else {
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
