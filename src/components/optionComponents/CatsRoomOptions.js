import React from 'react'

const CatsRoomOptions = () => {
  return (
    <div id = 'Cat_room_options'>
        <div>
        <button
        className = 'OptionsButton'
        id = 'PinkOptionButton'
        onClick = {() => console.log("This option is responsible for petting the cat on the action screen")}>
          Pet the cat
        </button>
        </div>
        <div>
        <button
        className = 'OptionsButton'
        id = 'PurpleOptionButton'
        onClick = {() => console.log("This option is responsible for feeding the cat on the action screen")}>
          Feed the cat
        </button>
        </div>
        <div>
        <button
        className = 'OptionsButton'
        id = 'GreenOptionButton'
        onClick = {() => console.log("This option is responsible for playing with the cat on the action screen")}>
          Play with the cat
        </button>
        </div>
      </div>
  )
}

export default CatsRoomOptions