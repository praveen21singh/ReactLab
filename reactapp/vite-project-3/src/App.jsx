import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import StyleCard from './components/StyleCard';
import ProfileCard from './components/ProfileCard';
import IconComponent from './components/IconComponent';


const App = () => {

  return (
    <div style={{ position: "absolute", top: '20%', left: '40%', zIndex: 1, color: "black" }}>
   <h1>Inline Style Example</h1>
   
   <StyleCard/>
   <ProfileCard/>
   <IconComponent/>
     
    </div>
  )
}

export default App