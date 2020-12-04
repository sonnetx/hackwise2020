import React from 'react'
import ActionScreen from './ActionScreen'
import MainMenu from './MainMenu'
import Options from './Options'

const AppScreen = () => {
  return (
    <div id = 'AppScreenWrapper'>
      <div id = 'MenuWrapper'>
        <MainMenu />
        <Options />
      </div>
      <div id = 'ActionScreenWrapper'>
        <ActionScreen />
      </div>
    </div>
  )
}

export default AppScreen