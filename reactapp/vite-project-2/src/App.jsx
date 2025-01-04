import React from 'react'
import Cards from './components/Cards';
import Password from './components/Password';
import Weather from './components/Weather';
import UserStatus from './components/UserStatus';
import Greeting from './components/Greeting';

const App = () => {
  const name = 'Praveen'
  return (
    
    <div style={{ position: "absolute", top: 30, left: 500, zIndex: 1, color: "black" }}>
    
   
  
    <UserStatus loggedIn={true} isAdmin={true}/>
    <Greeting timeOfDay={'afternoon'} message={'Hello ' +  name}/>
    <Weather temp = {16}/>

  
    </div>
  )
}

export default App;