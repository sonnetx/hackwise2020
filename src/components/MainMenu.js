import React from 'react'

const MainMenu = () => {
  // main screen in file I sent you before === action screen in console logs
  const handleCatClick = () => {
    console.log('this button is reponsible for changing the action screen to cat, options menu offers you to feed the cat')
  }

  const handleDiaryClick = () => {
    console.log('this button is reponsible for changing action screen to text box, where person will write notes, options menu offers to save note or view previous ones')
  }

  const handleHelpClick= () => {
    console.log('this button is responsible for showing help on action screen, option menu is empty at that point')
  }

  return (
    <div id = 'MainMenu'>
      this is main menu
      <button
      onClick = {handleCatClick}
      className = 'MainMenuButton'
      >
        Cat's room
      </button>
      <button
      onClick = {handleDiaryClick}
      className = 'MainMenuButton'
      >
        Write something in a diary
      </button>
      <button
      onClick = {handleHelpClick}
      className = 'MainMenuButton'
      >
        Help
      </button>

    </div>
  )
}

export default MainMenu