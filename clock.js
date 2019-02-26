var tickmarks = document.querySelector("#tickmark");
var hourPointer = document.querySelector("#hour");
var minutePointer = document.querySelector("#min");
var secondPointer = document.querySelector("#sec");
var hourDigital = document.querySelector("#hourDigital");
var minuteDigital = document.querySelector("#minDigital");
var secondDigital = document.querySelector("#secDigital");
var timeSwitch= document.querySelector("#stop");

// create all the tickmarks
var tick = '';
for (let i = 0; i < 60; i++){
	tick += '<li style="transform: rotate(' + (i * 6) + 'deg);"></li>'; 
}
tickmarks.innerHTML = tick;

getTime();
var setTime = setInterval(getTime, 1000);

function getTime(){
	var time = new Date();
	hour = time.getHours();
	minute = time.getMinutes();
	second = time.getSeconds();
	setPointers(hour, minute, second);
}

function setPointers(hour, minute, second){
	secondPointer.style.transform = "rotate( " + (second * 6) + "deg)";	
	minutePointer.style.transform = "rotate( " + (minute * 6) + "deg)";	
	hourPointer.style.transform = "rotate( " + ((hour + minute / 60) * 30) + "deg)";
	

	// Digital clock 
	hourDigital.innerHTML = hour;
	minuteDigital.innerHTML = minute;
	secondDigital.innerHTML = second;
}

// timeSwitch.addEventListener("click", function(){
// 	if (stopped){
// 		getTime();
// 		var setTime = setInterval(getTime, 1000);
// 	}
// 	else {
// 		clearInterval(setTime);
// 	}
// 	stopped = !stopped;
// });