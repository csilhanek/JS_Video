var video = document.getElementById("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
});

