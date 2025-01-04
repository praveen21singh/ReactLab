import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import StyleCard from './components/StyleCard';
import ProfileCard from './components/ProfileCard';
import IconComponent from './components/IconComponent';


const App = () => {

  return (
    <div style={{ position: "absolute", right: '100px', top: '100px', left: '100px', zIndex: 1, color: "black" }}>
   <h1>Inline Style Example</h1>
   
   <StyleCard/>
   <ProfileCard/>
   <IconComponent size='50px' color='gold'/>
     
    </div>
  )
}

export default App