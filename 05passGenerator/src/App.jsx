import { useRef } from 'react';
import { useEffect, useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, SetnumberAllowed] = useState(false);
  const [charAllowed, SetcharAllowed] = useState(false);
  const [password, SetPassword] = useState();

  //useref hook

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str+= "0123456789";
    if (charAllowed) str+= "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    
SetPassword(pass)

  },[length,numberAllowed,charAllowed,SetPassword])

const copyPasswordToClip = useCallback(() =>{
  passwordRef.current?.select();
  passwordRef.current?.SetSelectionRange(0,3);
  window.navigator.clipboard.writeText(password)
},[password])
// #test

  useEffect(() => {PasswordGenerator()},[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <>



      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-48 text-center  text-orange-500 bg-gray-700'>


      <h2 className=' text-2xl text-orange-500 px-14 mt-12'> Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden'>
        <input type="text" value={password} className='outline-none rounded-l-lg w-full py-2 px-2 my-3' placeholder='password' readOnly ref={passwordRef}/>
        <button onClick={copyPasswordToClip} className='outline-non rounded-r-lg bg-blue-700 text-white px-7 py-0.5 my-3 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2 mb-8'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length:{length}</label>
        </div>
        
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed}  id='numberInput' onChange={()=>{SetnumberAllowed((prev) =>!prev)}} />
          <label>Numbers</label>
        </div>
       
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed}  id='charInput' onChange={()=>{SetcharAllowed((prev) =>!prev)}} />
          <label>Characters</label>
        </div>

      </div>



</div>



    </>
  )
}

export default App
