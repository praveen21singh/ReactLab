import {useState} from "react";
import { GiFastForwardButton } from "react-icons/gi";
import { GiFastBackwardButton } from "react-icons/gi";


const State = () => {
    const [count,setCount] = useState(8);
    console.log(count);
    console.log(setCount);

    const increment = ()=> setCount(count+2);
    const decrement = ()=> setCount(count-2);
 

    return (
    <div>
      <h1>useState React Hook Example</h1>
      <h1 style={{marginLeft: '320px', paddingRight: '10rem'}}>{count}</h1>
      
      <GiFastBackwardButton onClick={decrement} size={70} style={{marginLeft: '200px', paddingRight: '10rem'}} />
      <GiFastForwardButton onClick={increment} size={70} styles={{paddingLeft: '10px'}}/>
      
    </div>
  )
}

export default State