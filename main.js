const btnPlay = document.querySelector(".play")
const btnPause = document.querySelector(".pause")
const btnStop = document.querySelector(".stop")
const btnSet = document.querySelector(".set")
const btnSoundOn = document.querySelector(".sound-on")
const btnSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let timerTimeout


function resetControls() {
  btnPlay.classList.remove("hide")
  btnSet.classList.remove("hide")
  btnPause.classList.add("hide")
  btnStop.classList.add("hide")
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer () {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeout)
}

function countdown() {
  timerTimeout = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

   updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

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
  clearTimeout(timerTimeout)
})

btnStop.addEventListener("click", function () {
 resetControls()
 resetTimer()
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
  let newMinutes = prompt("Quantos minutos?")
  if(!newMinutes) {
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})
