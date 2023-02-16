import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  btnPause,
  btnStop,
  btnPlay,
  btnSet,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls({
  btnPause,
  btnPlay,
  btnStop,
  btnSet,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({ controls, timer, sound })
