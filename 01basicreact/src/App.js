import React, {useState} from "react";
// import "./styles.css";
import "./App.css";

function App() {

  const [counter, setCounter]  = useState(15) // to porpogate the changes

  // let counter = 15;

  const addValue = () => {
    if (counter < 20)
    {
      setCounter(counter + 1);
      console.log("counter value: ",counter);
    }
    else
    {
      console.log("counter reached max value: ",counter);
    }
    
    
  }

  const removeValue = () => {
    if (counter > 0)
    {
      setCounter(counter - 1);
      console.log("counter value: ",counter);
    }
    else
    {
      console.log("counter reached min value: ",counter);
    }
   
  }
  
  return (
    <div>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <div>
        <button onClick={addValue} style={{padding: 2 + 'em'}}>+ {counter}</button>
        <button onClick={removeValue} style={{padding: 2 + 'em'}}>- {counter}</button>
      </div>
   
    </div>
  )
}


export default App;

