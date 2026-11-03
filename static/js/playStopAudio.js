// plays audio file specified in "data-audio-src" of button element when button is clicked.
const sounds = [];

function createSound(src, { loop = true } = {}) {
  const audio = new Audio(src);
  audio.loop = loop;
  sounds.push(audio);
  return audio;
}

const playBtns = document.getElementsByName("play-btn");

playBtns.forEach((btn) => {
  console.log(btn)
  const sound = createSound(btn.dataset.audioSrc);

  btn.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();
});
})

document.getElementById("stop-btn").addEventListener("click", () => {
  sounds.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
});