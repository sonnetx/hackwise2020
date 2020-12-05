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

  const handleAchievementsClick= () => {
    console.log('achievements')
  }

  return (
    <div id = 'MainMenu'>
        <button
        onClick = {handleCatClick}
        className = 'MainMenuButton'
        id = 'CatRoom'
        >
          Cat's room
        </button>
        <button
        onClick = {handleDiaryClick}
        className = 'MainMenuButton'
        id = 'Diary'
        >
          Write something in a diary
        </button>
        <button
        onClick = {handleAchievementsClick}
        className = 'MainMenuButton'
        id = 'Achievements'
        >
          Achievements
        </button>
        <button
        onClick = {handleHelpClick}
        className = 'MainMenuButton'
        id = 'Help'
        >
          Help
        </button>
    </div>
  )
}

export default MainMenu