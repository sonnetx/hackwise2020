import React from 'react'

const MainMenu = ({
  handleCatClick,
  handleAchievementsClick,
  handleDiaryClick,
  handleHelpClick
  }) => {
  // main screen in file I sent you before === action screen in console logs

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
          Write something in a diary (WIP)
        </button>
        <button
        onClick = {handleAchievementsClick}
        className = 'MainMenuButton'
        id = 'Achievements'
        >
          Achievements (WIP)
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