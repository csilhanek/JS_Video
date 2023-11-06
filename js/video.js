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
	video.playbackRate = 0.9;
	// Slow video down by proper amount
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = 1.1;
	// Speed up video by proper amount
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	// Skip ahead by proper amount
});

document.querySelector("#mute").addEventListener("click", function() {

});

document.querySelector("#vintage").addEventListener("click", function() {

});

document.querySelector("#orig").addEventListener("click", function() {

});

// Display volume after play
// Fix mute button
// Fix volume slider

// Old school vs normal style