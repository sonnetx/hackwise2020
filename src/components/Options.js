import React from 'react'
import CatsRoomOptions from './optionComponents/CatsRoomOptions'
import DiaryOptions from './optionComponents/DiaryOptions'
import HelpOptions from './optionComponents/HelpOptions'
import AchievementsOptions from './optionComponents/AchievementsOptions'
import DefaultOptions from './optionComponents/DefaultOptions'

const Options = () => {
  return (
    <div id = 'Options'>
      this is options menu
      <DefaultOptions />
      <CatsRoomOptions />
      <DiaryOptions />
      <HelpOptions />
      <AchievementsOptions />
    </div>
  )
}

export default Options