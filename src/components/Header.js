//header component
import React, { useState }  from 'react'
import HelpToggle from './HelpToggle'

function Header() {
  const[toggle, setToggle] = useState(false); //initialising state of toggle as false

  //returning the name of the game, creating an instance of the HelpToggle component and passing it props
  return (
    <div>
        <h1>Let's play Hangman!</h1>
        <HelpToggle toggle={toggle} onToggle={() => setToggle(!toggle)}/>
        {/* toggle props - passing it the false state and an ontoggle props that calls the callback function that sets the toggle state as the opposite of false (true) */}
        <p>Guess the word:</p>
    </div>
  )
}

export default Header


