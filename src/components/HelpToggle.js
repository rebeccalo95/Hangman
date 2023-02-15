//HelpToggle component
import React from 'react'
import "./HelpToggle.css";
import Help from "./Help";

//Helptoggle component is passed the toggle and onToggle props and returns the toggle slider
function HelpToggle({toggle, onToggle}){
  return (
    <label className="toggle" >
        <input type="checkbox" checked={toggle} onChange={onToggle}/>
        <span className="slider"/>
        {toggle && <Help />} {/*if toggle is true then, an instance of the Help function will return help information*/}
    </label>
  )
}

export default HelpToggle