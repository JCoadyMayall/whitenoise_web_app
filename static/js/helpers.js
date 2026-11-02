// plays audio file specified in "data-audio-src" of button element when button is clicked.
const playBtn = document.getElementById("play-btn");
const sound = new Audio(playBtn.dataset.audioSrc);

playBtn.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();
});