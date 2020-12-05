import React from 'react'

const CatsRoomOptions = () => {
  return (
    <div id = 'Diary_options'>
        <div>
          <button
            onClick = {() => console.log("This option is responsible for creating a entry area on the action screen")}
            className = 'OptionsButton'
            id = 'PinkOptionButton'
          >
            Create a new entry
          </button>
        </div>
        <div>
          <button
          className = 'OptionsButton'
          id = 'PurpleOptionButton'
          onClick = {() => console.log("This option is responsible for listing past entries on the action screen")}>
            View old entries
          </button>
        </div>
        <div>
          <button
          id = 'GreenOptionButton'
          className = 'OptionsButton'
          onClick = {() => console.log("This option is responsible for saving the current entry on the screen")}>
            Save the current entry
          </button>
        </div>
      </div>
  )
}

export default CatsRoomOptions