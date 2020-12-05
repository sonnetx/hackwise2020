import React from 'react'

const CatsRoomOptions = () => {
  return (
    <div id = 'Diary_options'>
        <h3>Diary Options</h3>
        <button onClick = {() => console.log("This option is responsible for creating a entry area on the action screen")}>
          Create a new entry
        </button>
        <button onClick = {() => console.log("This option is responsible for listing past entries on the action screen")}>
          View old entrys
        </button>
        <button onClick = {() => console.log("This option is responsible for saving the current entry on the screen")}>
          Save the current entry
        </button>
      </div>
  )
}

export default CatsRoomOptions