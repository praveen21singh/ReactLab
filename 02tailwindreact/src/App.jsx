import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 
let myObj = {
  username:'Praveen',
  department:'IT',
  country:'India',
  countryCode:'IN(+91)'
}

let myArray = [1,2,3,4];
  return (
    <>
    <h1 className='bg-yellow-400 p-10 rounded-2xl text-sky-900 mb-8'>Welcome to Tailwind first project</h1>
    <Card session='codewithreact' author='praveen'  MyArr={myObj} OtherArray={myArray}/>
    <Card session='codewithpraveen' author='KS Praveen' BtnAction='Purchase it'/>


    </>
  )
}

export default App
