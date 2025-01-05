
import State from './components/State'
const App = () => {

  const styles =
  { 
    borderRadius: '2rem', 
    backgroundColor:'cyan', 
    position: "absolute", 
    right: '100px', 
    top: '100px', 
    left: '100px', 
    zIndex: 1, 
    color: "black"
  }


  return (
    <div className='center' style={styles}>
      <State />
      
    </div>
  )
}

export default App