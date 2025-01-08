
const ComponentTwo = ({count,onClickHandler}) => {
    
  return (
    <div>
      <h2>Accessing useState updating the parent component from child component 2</h2>
      <p>{count}</p>
      <button onClick={onClickHandler}>Decrease Count</button>




    </div>
  )
}

export default ComponentTwo