import React from 'react'

const DefaultOptions = () => {
  return (
    <div id = 'Default_Options'>
        <div>
          <button
            onClick = {() => console.log("Purr!")}
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