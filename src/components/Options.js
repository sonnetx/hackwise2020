import React from 'react'
import CatsRoomOptions from './optionComponents/CatsRoomOptions'
import DiaryOptions from './optionComponents/DiaryOptions'
import HelpOptions from './optionComponents/HelpOptions'
import AchievementsOptions from './optionComponents/AchievementsOptions'
import DefaultOptions from './optionComponents/DefaultOptions'

const Options = ({option, happiness, setHappiness, setActionScreenView}) => {
  let displayedOption

  const handleNewEntry = () => {
    setActionScreenView('create entry')
  }

  const handleViewEntries = () => {
    setActionScreenView('view entries')
  }

  const handleSaveCurrentEntry = () => {
    setActionScreenView('save entry')
  }

  const handlePet = () => {
    setHappiness(happiness + 2)
    setActionScreenView('pet')
  }

  const handleFeed = () => {
    setHappiness(happiness + 5)
    setActionScreenView('feed')
  }

  const handlePlay = () => {
    setHappiness(happiness + 3)
    setActionScreenView('play')
  }

  const handleHelpDiary = () => {
    setActionScreenView('helpdiary')

  }

  const handleHelpCat = () => {
  setActionScreenView('helpcat')
  return(
    <>
      <p>
        There are 3 options - all of them increase the happiness of the cat, but some of them require food.
        We get it by doing tasks that are useful for our mental health - in this case, writing in diary.
      </p>
   </>
  )
  }

  if (option === '')
    displayedOption = <DefaultOptions />
  if (option === 'CatsRoom')
    displayedOption = <CatsRoomOptions
    handlePet = {handlePet}
    handleFeed = {handleFeed}
    handlePlay = {handlePlay}
    />
  if (option === 'Diary')
    displayedOption = <DiaryOptions
      handleNewEntry = {handleNewEntry}
      handleViewEntries = {handleViewEntries}
      handleSaveCurrentEntry = {handleSaveCurrentEntry}
    />
  if (option === 'Help')
    displayedOption = <HelpOptions
      handleHelpCat = {handleHelpCat}
      handleHelpDiary = {handleHelpDiary}
      />
  if (option === 'Achievements')
    displayedOption = <AchievementsOptions
    happiness = {happiness}
    />


  return (
    <div id = 'Options'>
        {displayedOption}
    </div>
  )
}

export default Options