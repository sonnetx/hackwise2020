import React from 'react'

const CatsRoomOptions = () => {
  return (
    <div id = 'Help_Options'>
        <h3>Help Options</h3>
        <button onClick = {() => console.log("This option is responsible for showing how to use the cat screen")}>
          Cat room
        </button>
        <button onClick = {() => console.log("This option is responsible for showing how to use the diary on the action screen")}>
          Diary
        </button>
    </div>
  )
}

export default CatsRoomOptions