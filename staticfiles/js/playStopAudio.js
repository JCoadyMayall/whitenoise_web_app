// plays audio file specified in "data-audio-src" of button element when button is clicked.
const sounds = [];

function createSound(src, { loop = true } = {}) {
  const audio = new Audio(src);
  audio.loop = loop;
  sounds.push(audio);
  return audio;
}

function stopAllSounds() {
  sounds.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

const playBtns = document.getElementsByName("play-btn");

playBtns.forEach((btn) => {
  const sound = createSound(btn.dataset.audioSrc);
  const stopBtn = btn.parentElement.querySelector("[name='stop-btn']");

  btn.addEventListener("click", () => {
    stopAllSounds();
    sound.play();
  });

  if (stopBtn) {
    stopBtn.addEventListener("click", () => {
      sound.pause();
      sound.currentTime = 0;
    });
  }
});

document.getElementById("stop-btn").addEventListener("click", () => {
  sounds.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
});