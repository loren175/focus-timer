export function Controls({
  btnPlay,
  btnPause,
  btnStop,
  btnSet
}) {
  function play() {
    btnPlay.classList.add("hide")
    btnPause.classList.remove("hide")
    btnStop.classList.remove("hide")
    btnSet.classList.add("hide")
  }

  function pause() {
    btnPause.classList.add("hide")
    btnPlay.classList.remove("hide")
  }

  function reset() {
    btnPlay.classList.remove("hide")
    btnSet.classList.remove("hide")
    btnPause.classList.add("hide")
    btnStop.classList.add("hide")
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?")
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}
