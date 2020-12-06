import React from 'react'
import {Howl, Howler} from 'howler'
import Purr from '../../sound/Purr.mp3'



const DefaultOptions = () => {
  var sound = new Howl({
    src: [Purr]
  });
  return (
    <div id = 'Default_Options'>
        <div>
          <button
            onClick = {() => {
              Howler.volume(1.0)
              sound.play()
            }}
            className = 'OptionsButton'
            id = 'PinkOptionButton'
          >
            Purr!
          </button>
        </div>
    </div>
  )
}

export default DefaultOptions