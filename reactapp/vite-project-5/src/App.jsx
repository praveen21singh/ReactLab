
import State from './components/State'
import Friends from './components/Friends'
import Movies from './components/Movies'
import ObjectArrays from './components/ObjectArrays'
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'

import { useState } from 'react'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'

const App = () => {

  const styles =
  { 
    borderRadius: '2rem', 
    backgroundColor:'lightgray', 
    position: "absolute", 
    right: '100px', 
    top: '100px', 
    left: '100px', 
    zIndex: 1, 
    color: "black"
  }

  const [count, setCount] = useState(0);

  return (
    <div className='center' style={styles}>
      {/* <State /> */}
      {/* <Friends /> */}
      {/* <Movies/> */}
      {/* <ObjectArrays/> */}
      {/* <ComponentOne count = {count} onClickHandler={()=> setCount(count+1)}/>
      <ComponentTwo count = {count} onClickHandler={()=> setCount(count-1)} /> */}
      {/* <Counter/> */}
      {/* <TodoList/> */}
      {/* <Profile/> */}
      <ShoppingList/>
      
    </div>
  )
}

export default App