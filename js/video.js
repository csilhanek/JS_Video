var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.load();
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = 0.5;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = 2;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
});

