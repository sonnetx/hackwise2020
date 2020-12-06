import React, {useState} from 'react'
import { act } from 'react-dom/test-utils'
import ActionScreen from './ActionScreen'
import MainMenu from './MainMenu'
import Options from './Options'

const AppScreen = () => {
  const [option, setOption] = useState('')
  const [happiness, setHappiness] = useState(80)
  const [actionScreenView, setActionScreenView] = useState(null)
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
      happiness = {happiness}
      setHappiness = {setHappiness}
      setActionScreenView = {setActionScreenView}
      />
      <ActionScreen
        actionScreenView = {actionScreenView}
      />
    </div>
  )
}

export default AppScreen