import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [passwordStatus,setPasswordStatus]=useState(false)

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className=' bg-rose-400 p-6 rounded-lg flex gap-3'>
        <input type={  passwordStatus ? 'text' : 'password' }  className='outline-[#0095ff] rounded-sm pl-2'/>
        <button onClick={()=>  setPasswordStatus(!passwordStatus) } className='w-[70px] bg-blue-300 rounded-lg px-4 py-2 text-white'>{ passwordStatus ? '❌' : '✔️' }</button>
      </div>
    </div>
     
  )
}

export default App
