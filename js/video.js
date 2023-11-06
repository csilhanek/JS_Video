var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
	video.pause();
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// Display volume after play
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	var newSpeed = video.playbackRate * 0.9;
	console.log(newSpeed);
	video.playbackRate = newSpeed;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	var newSpeed = video.playbackRate * (10/9);
	console.log(newSpeed);
	video.playbackRate = newSpeed;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
});

document.querySelector("#mute").addEventListener("click", function() {
	var mutedVolume = 1;
	if (video.volume != 0) {
		mutedVolume = video.volume;
		video.volume = 0;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.volume = mutedVolume;
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.setAttribute("class", "oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.removeAttribute("class");
	video.setAttribute("class", "video");
});


document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
})
