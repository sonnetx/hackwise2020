import React from 'react'

const DiaryOptions = ({handleNewEntry, handleViewEntries, handleSaveCurrentEntry}) => {
  return (
    <div id = 'Diary_options'>
        <div>
          <button
            onClick = {handleNewEntry}
            className = 'OptionsButton'
            id = 'PinkOptionButton'
          >
            Create a new entry
          </button>
        </div>
        <div>
          <button
          className = 'OptionsButton'
          id = 'PurpleOptionButton'
          onClick = {handleViewEntries}>
            View old entries
          </button>
        </div>
        <div>
          <button
          id = 'GreenOptionButton'
          className = 'OptionsButton'
          onClick = {handleSaveCurrentEntry}>
            Save the current entry
          </button>
        </div>
      </div>
  )
}

export default DiaryOptions