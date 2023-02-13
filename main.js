const btnPlay = document.querySelector(".play")
const btnPause = document.querySelector(".pause")
const btnStop = document.querySelector(".stop")
const btnSet = document.querySelector(".set")
const btnSoundOn = document.querySelector(".sound-on")
const btnSoundOff = document.querySelector(".sound-off")
let minutes
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)

    if (seconds <= 0) {
      seconds = 60
    }

    secondsDisplay.textContent = seconds - 1
    countdown()
  }, 1000)
}

btnPlay.addEventListener("click", function () {
  btnPlay.classList.add("hide")
  btnPause.classList.remove("hide")
  btnStop.classList.remove("hide")
  btnSet.classList.add("hide")

  countdown()
})

btnPause.addEventListener("click", function () {
  btnPause.classList.add("hide")
  btnPlay.classList.remove("hide")
})

btnStop.addEventListener("click", function () {
  btnPlay.classList.remove("hide")
  btnSet.classList.remove("hide")
  btnPause.classList.add("hide")
  btnStop.classList.add("hide")
})

btnSoundOff.addEventListener("click", function () {
  btnSoundOff.classList.add("hide")
  btnSoundOn.classList.remove("hide")
})

btnSoundOn.addEventListener("click", function () {
  btnSoundOn.classList.add("hide")
  btnSoundOff.classList.remove("hide")
})

btnSet.addEventListener("click", function () {
  minutes = prompt("Quantos minutos?")
  minutesDisplay.textContent = minutes
})
