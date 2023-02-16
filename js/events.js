import {
  btnPause,
  btnPlay,
  btnSet,
  btnSoundOff,
  btnSoundOn,
  btnStop,
} from "./elements.js"

export default function({controls, timer, sound}) {

  btnPlay.addEventListener("click", function () {
    controls.play()
    timer.countdown()
    sound.pressBtn()
  })

  btnPause.addEventListener("click", function () {
    controls.pause()
    timer.hold()
    sound.pressBtn()
  })

  btnStop.addEventListener("click", function () {
    controls.reset()
    timer.reset()
    sound.pressBtn()
  })

  btnSoundOff.addEventListener("click", function () {
    btnSoundOn.classList.add("hide")
    btnSoundOff.classList.remove("hide")
    sound.bgAudio.pause()
  })

  btnSoundOn.addEventListener("click", function () {
    btnSoundOff.classList.add("hide")
    btnSoundOn.classList.remove("hide")
    sound.bgAudio.play()
  })

  btnSet.addEventListener("click", function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}
