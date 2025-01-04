import React from 'react'
import Cards from './components/Cards';

const App = () => {
  return (
    
    <div style={{ position: "absolute", top: 30, left: 500, zIndex: 1, color: "black" }}>
    
    <h1>Welcome to React Course</h1>
    <Cards>
      <h1> This is my Card</h1>
    </Cards>
    
    </div>
  )
}

export default App;