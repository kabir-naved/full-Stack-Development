import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black') // Background color for the screen
  const [parentColor, setParentColor] = useState('white') // Background color for the parent div

  const handleClick = (selectedColor) => {
    setColor(selectedColor) // Set the background color of the screen
    if (selectedColor === 'white') {
      setParentColor('black') // If white button clicked, set parent div to black
    } else {
      setParentColor('white') // Otherwise, set parent div to white
    }
  }

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}> 
        <div style={{ backgroundColor: parentColor }} className="max-w-[1230px] xl:m-auto flex flex-wrap justify-center gap-5 relative top-10 py-2 rounded-lg mx-8">

          <div className="shadow-md rounded-3xl bg-red-500">
            <button onClick={() => handleClick('red')} className="w-full px-5 py-2 text-white">
              Red
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-blue-500">
            <button onClick={() => handleClick('blue')} className="w-full px-5 py-2 text-white">
              Blue
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-green-500">
            <button onClick={() => handleClick('green')} className="w-full px-5 py-2 text-white">
              Green
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-purple-500">
            <button onClick={() => handleClick('purple')} className="w-full px-5 py-2 text-white">
              Purple
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-pink-500">
            <button onClick={() => handleClick('pink')} className="w-full px-5 py-2 text-white">
              Pink
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-white">
            <button onClick={() => handleClick('white')} className="w-full px-5 py-2 text-black">
              White
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-black">
            <button onClick={() => handleClick('black')} className="w-full px-5 py-2 text-white">
              Black
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-yellow-500">
            <button onClick={() => handleClick('yellow')} className="w-full px-5 py-2 text-white">
              Yellow
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-violet-500">
            <button onClick={() => handleClick('violet')} className="w-full px-5 py-2 text-white">
              Violet
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-gray-500">
            <button onClick={() => handleClick('gray')} className="w-full px-5 py-2 text-white">
              Gray
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-cyan-500">
            <button onClick={() => handleClick('cyan')} className="w-full px-5 py-2 text-white">
              Cyan
            </button>
          </div>

          <div className="shadow-md rounded-3xl bg-amber-900">
            <button onClick={() => handleClick('brown')} className="w-full px-5 py-2 text-white">
              Amber
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
