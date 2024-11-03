import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='mt-32 w-full'>
        <div className='max-w-screen-xl py-20  mx-auto flex gap-5 text-white'>
           <Card/>
           <Card/>
        </div>
    </div>
  )
}

export default Cards