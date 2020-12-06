import React from 'react'

const CatsRoomOptions = ({handlePet, handleFeed, handlePlay}) => {
  return (
    <div id = 'Cat_room_options'>
        <div>
        <button
        className = 'OptionsButton'
        id = 'PinkOptionButton'
        onClick = {handlePet}>
          Pet the cat
        </button>
        </div>
        <div>
        <button
        className = 'OptionsButton'
        id = 'PurpleOptionButton'
        onClick = {handleFeed}>
          Feed the cat
        </button>
        </div>
        <div>
        <button
        className = 'OptionsButton'
        id = 'GreenOptionButton'
        onClick = {handlePlay}>
          Play with the cat
        </button>
        </div>
      </div>
  )
}

export default CatsRoomOptions