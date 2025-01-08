import { useState } from "react"

const ComponentOne = ({count,onClickHandler}) => {

    
  return (
    <div>
      <h2>Accessing useState updating the parent component from child component 1</h2>
      <p>{count}</p>
      <button onClick={onClickHandler}>Increase Count</button>



    </div>
  )
}

export default ComponentOne