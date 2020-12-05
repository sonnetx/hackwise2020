import React from 'react'

const DefaultOptions = () => {
  return (
    <div id = 'Default_Options'>
        <h3>Default Options</h3>
        <button onClick = {() => console.log("Purr!")}>
          Purr!
        </button>
        <button onClick = {() => console.log("Back")}>
          Back
        </button>
    </div>
  )
}

export default DefaultOptions