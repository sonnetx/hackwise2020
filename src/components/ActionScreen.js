import React, { useState } from 'react'
import DefaultCat from '../img/Default.gif'
import Feed from '../img/feed.gif'
import PetCat from '../img/Computer.gif'
import ShakeContainer from '../img/ShakeContainer.gif'

const ActionScreen = ({actionScreenView}) => {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setText('')
    content = (<> {event.target.value} </>)
    console.log('WIP')
  }
  const defineView = (viewType) => {
    if (viewType === 'helpdiary')
    return (
        <p>
          By writing in the diary, you get more food, that you can feed to the cat. (WIP)
          This motivates players to return to the game and form a new habit (writing everyday to the diary).
        </p>
    )

    if (viewType === 'helpcat')
    return(
        <p>
          There are 3 options - all of them increase the happiness of the cat, but some of them require food.
          We get it by doing tasks that are useful for our mental health - in this case, writing in diary.
        </p>
    )

    if (viewType === 'create entry')
    return (
      <form onSubmit = {handleSubmit}>
        <textarea className = 'text'
        onChange = {handleChange}
        value = {text}
        > </textarea>
        <button> save diary entry</button>
      </form>
    )

    if (viewType === 'view entries')
    return (
      <>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>
    )

    if (viewType === 'save entry')
    return (
      <>
      <p>
       entry not saved, but will be in the future!
       </p>
      </>
    )

     if (viewType === 'feed')
     return (
      <img src = {Feed} id = 'CatGif' alt = "Cat" />
     )

     if (viewType === 'pet')
     return (
      <img src = {PetCat} id = 'CatGif' alt = "Cat" />
     )

     if (viewType === 'play')
     return (
      <img src = {ShakeContainer} id = 'CatGif' alt = "Cat" />
     )
  }
  let content = actionScreenView
  ? defineView(actionScreenView)
  : <img src = {DefaultCat} id = 'CatGif' alt = "Cat" />
  return (

    <div id = 'ActionScreen'>
      <img src = {DefaultCat} alt = 'Funny cat'/>
    </div>
  )
}

export default ActionScreen