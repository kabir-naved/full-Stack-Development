import { useState } from 'react'
import './App.css'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

   let changeName = () => {
    setCount(count + 10)
   }
   let changeNames = () => {
    // if(count != 0) {
    // setCount(count - 10)
    // }

    (count > 0) ? setCount(count - 10) : count

   }

  return (
    <>
       <div className='flex justify-center items-center gap-3 pt-5'>
        <h1 className='text-center bg-red-200 p-2'>{count}</h1>
        <button onClick={changeName} className='bg-blue-400 rounded-md p-2'>Change</button>
        <button onClick={changeNames} className= 'bg-blue-400 rounded-md p-2'> BACK</button>
        <Home />
       </div>


    <Home/>

    </>
  )
}

export default App
