import React from 'react'
import CatsRoomOptions from './optionComponents/CatsRoomOptions'
import DiaryOptions from './optionComponents/DiaryOptions'
import HelpOptions from './optionComponents/HelpOptions'
import AchievementsOptions from './optionComponents/AchievementsOptions'
import DefaultOptions from './optionComponents/DefaultOptions'

const Options = ({option}) => {
  let displayedOption
  if (option === '')
    displayedOption = <DefaultOptions />
  if (option === 'CatsRoom')
    displayedOption = <CatsRoomOptions />
  if (option === 'Diary')
    displayedOption = <DiaryOptions />
  if (option === 'Help')
    displayedOption = <HelpOptions />
  if (option === 'Achievements')
    displayedOption = <AchievementsOptions />


  return (
    <div id = 'Options'>
        {displayedOption}
    </div>
  )
}

export default Options