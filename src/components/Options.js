import React from 'react'

const Options = () => {
  return (
    <div id = 'Options'>
      this is options menu
      <div id = 'Cat_room_options'>
        <h3>Cats Room Options</h3>
        <button onClick = {() => console.log("This option is responsible for petting the cat on the action screen")}>
          Pet the cat
        </button>
        <button onClick = {() => console.log("This option is responsible for feeding the cat on the action screen")}>
          Feed the cat
        </button>
        <button onClick = {() => console.log("This option is responsible for playing with the cat on the action screen")}>
          Play with the cat
        </button>
      </div>
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
      <div id = 'Help'>
        <h3>Diary Options</h3>
        <button onClick = {() => console.log("This option is responsible for showing how to use the cat screen")}>
          Cat room
        </button>
        <button onClick = {() => console.log("This option is responsible for showing how to use the diary on the action screen")}>
          Diary
        </button>
      </div>
    </div>
  )
}

export default Options