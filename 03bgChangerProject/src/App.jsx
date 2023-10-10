import {useState} from 'react'

function App() {
  const [color, setColor] = useState("Green")

  return (
    <>
   
     <div className='w-screen h-screen duration-300' style={{backgroundColor:color}}>
      
      <div className='fixed flex flex-wrap justify-center top-20 inset-x-0 px-2'>
        <div className='transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-wrap justify-center py-6 bg-yellow-400 rounded-full px-10 m-10 shadow-2xl'>
        <h2 className=' antialiased hover:subpixel-antialiased text-xl px-12'> Background Changer using Vite + React Framework & Tailwind CSS</h2>
        </div>
    

      <div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl'>
      <button  onClick={()=>setColor("red")} className='outline-none px-4 py-1 text-white shadow-2xl rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' style={{backgroundColor:"red"}} >Red</button>
      <button  onClick={()=>setColor("green")}  className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor:"green"}} >Green</button>
      <button  onClick={()=>setColor("blue")}  className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor:"blue"}} >blue</button>
      <button  onClick={()=>setColor("black")}  className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor:"black"}} >black</button>
      <button  onClick={()=>setColor("Grey")}  className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor:"grey"}} >grey</button>
      <button  onClick={()=>setColor("cyan")}  className='outline-none px-4 py-1 text-black shadow-lg rounded-full' style={{backgroundColor:"cyan"}} >cyan</button>
      <button  onClick={()=>setColor("pink")}  className='outline-none px-4 py-1 text-black shadow-lg rounded-full' style={{backgroundColor:"pink"}} >pink</button>
      <button  onClick={()=>setColor("purple")}  className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor:"purple"}} >purple</button>
      <button  onClick={()=>setColor("lavender")}  className='outline-none px-4 py-1 text-black shadow-lg rounded-full' style={{backgroundColor:"lavender"}} >lavender</button>
      <button  onClick={()=>setColor("white")}  className='outline-none px-4 py-1 text-black shadow-lg rounded-full' style={{backgroundColor:"white"}} >white</button>
      <button  onClick={()=>setColor("brown")}  className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor:"brown"}} >brown</button>  
        </div>
        </div>

        <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>
        <div className=' transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-wrap justify-center py-3 bg-gray-400 rounded-full px-10 m-10 shadow-2xl'>
        <h2 className='px-12'> Made with &#10084; by KS Praveen</h2>
        </div>
     
          </div>
          <p className='fixed flex flex-wrap justify-center  bottom-20 inset-x-0 px-2'> for more code snippets visit - <a href='http://www.linktr.ee/ks_praveen'>linktr.ee/ks_praveen</a></p>
      </div>
    

    

     
 
    </>
  )
}

export default App
