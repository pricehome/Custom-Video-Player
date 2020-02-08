// #1 Get DOM elements
const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// Play & pause video
function toggleVideoStatus() {
	if (video.paused) {
		video.play()
	} else {
		video.pause()
	}
}

// #3 Create functions for Event Listeners
// Play & Pause video
function toggleVideoStatus() {
	if (video.paused) {
		video.play()
	} else {
		video.pause()
	}
}

// Update Play/Pause Icon
function updatePlayIcon() {
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
	} else {
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
	}
}

// Update progress & timestamp
function updateProgress() {
	return true
}

// Set Video time to progress
function setVideoProgress() {
	return true
}

// Stop Video
function stopVideo() {
	video.currentTime = 0
	video.pause()
}

//  #2 Event Listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

// progress.addEventListener('click', setVideoStatus)
