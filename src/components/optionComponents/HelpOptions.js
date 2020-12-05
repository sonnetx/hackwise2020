import React from 'react'

const CatsRoomOptions = () => {
  return (
    <div id = 'Help_Options'>
        <div>
        <button
        className = 'OptionsButton'
        id = 'PinkOptionButton'
        onClick = {() => console.log("This option is responsible for showing how to use the cat screen")}>
          Cat room
        </button>
        </div>
        <div>
        <button
        className = 'OptionsButton'
        id = 'PurpleOptionButton'
         onClick = {() => console.log("This option is responsible for showing how to use the diary on the action screen")}>
          Diary
        </button>
        </div>
    </div>
  )
}

export default CatsRoomOptions