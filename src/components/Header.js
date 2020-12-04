import React from 'react'
import '../App.css'

const Header = () => {
  // different buttons should be visible in header
  // when we are logged in and when we aren't

  // use axios library to send request to server
  // use json-server library to simulate having data on the server
  const handleLoginClick = () => {
    console.log('this button handles logging in')
  }
  // more handlers to add...
  return (
    <div id = 'Header'>
      this is header
      <button
      onClick = {() => console.log('...')}
      >
        sign up
      </button>
      <button
      onClick = {handleLoginClick}
      >
        log in
      </button>
      <button
      onClick = {() => console.log('...')}
      >
        log out
      </button>
    </div>
  )
}

export default Header