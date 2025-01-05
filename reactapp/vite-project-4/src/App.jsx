
const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random()*10))
  return <button onClick={handleClick} >Click</button>
}
 

const Copy  = () => {
  const copyHandler = () => console.log("Stop Stealing my Content!😒")
  return <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod repellendus iste quos architecto. Sit at voluptatibus, impedit modi illo fugit nulla deleniti quae quos harum soluta dolore aspernatur quidem.</p>
}


const Move = () => {

  const moveHandler = () => {console.log("Mouse Moved!"); alert("Mouse Moved, event fired"); }
  return <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab enim, sit at sapiente exercitationem pariatur officiis ratione porro. Aliquid dolorum animi neque, alias reprehenderit quae iure magni natus nulla?
  </p>
}


const Input = ()=> {
const inputHandler = ()=> {console.log("Enter your name")}
  return <input onInput={inputHandler}  name="myInput"/>
}

const App = () => {
  return (
    <div>
    
      <Button/>
      <Copy/>
      <Move/>
      <Input/>
      
    </div>
  )
}

export default App