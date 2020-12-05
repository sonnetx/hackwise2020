import React from 'react'
import ActionScreen from './ActionScreen'
import MainMenu from './MainMenu'
import Options from './Options'

const AppScreen = () => {
  return (
    <div id = 'AppScreenWrapper'>
      <MainMenu />
      <Options />
      <ActionScreen />
    </div>
  )
}

export default AppScreen