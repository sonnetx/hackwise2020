import React from 'react'

const HelpOptions = ({handleHelpCat, handleHelpDiary}) => {
  return (
    <div id = 'Help_Options'>
        <div>
        <button
        className = 'OptionsButton'
        id = 'PinkOptionButton'
        onClick = {handleHelpCat}>
          Cat room
        </button>
        </div>
        <div>
        <button
        className = 'OptionsButton'
        id = 'PurpleOptionButton'
         onClick = {handleHelpDiary}>
          Diary
        </button>
        </div>
    </div>
  )
}

export default HelpOptions