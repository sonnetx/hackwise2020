import React from 'react'

const CatsRoomOptions = () => {
  return (
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
  )
}

export default CatsRoomOptions