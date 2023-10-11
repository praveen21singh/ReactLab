import { useState } from 'react'

import './App.css'
import InputBox from './components/InputBox'

function App() {
  
  return (
    <>
    <div className='w-full max-w-md mx-auto h-full max-h-96 my-auto shadow-md rounded-lg px-8 py-24  text-center  text-orange-500 bg-gray-700'>
      
     <h1 className='text-3xl top-auto bg-orange-300'>Currency Converter App</h1>
    <InputBox/>
    
    </div>
       
    </>
  )
}

export default App
