import React, {useState} from 'react'
import ActionScreen from './ActionScreen'
import MainMenu from './MainMenu'
import Options from './Options'

const AppScreen = () => {
  const [option, setOption] = useState('')

  const handleCatClick = () => {
    setOption('CatsRoom')
  }

  const handleDiaryClick = () => {
    setOption('Diary')
  }

  const handleHelpClick= () => {
    setOption('Help')
  }

  const handleAchievementsClick= () => {
    setOption('Achievements')
  }

  return (
    <div id = 'AppScreenWrapper'>
      <MainMenu
        handleCatClick = {handleCatClick}
        handleDiaryClick = {handleDiaryClick}
        handleHelpClick = {handleHelpClick}
        handleAchievementsClick = {handleAchievementsClick}
      />
      <Options
      option = {option}
      />
      <ActionScreen />
    </div>
  )
}

export default AppScreen