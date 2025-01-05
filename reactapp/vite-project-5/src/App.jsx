
import State from './components/State'
import Friends from './components/Friends'
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


  return (
    <div className='center' style={styles}>
      {/* <State /> */}
      <Friends />
      
    </div>
  )
}

export default App