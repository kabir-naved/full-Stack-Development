import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='mt-32 w-full'>
        <div className='max-w-screen-xl py-20  mx-auto flex gap-2'>
           <Card width = {"basis-1/3"} start = {false} para = {true}  hover = 'true' hover2 = {"hover:text-black"}/>
           <Card width = {"basis-2/3"} start ={true} para = {false} hover = 'true' hover2 = {"hover:text-black"}/>
        </div>
    </div>
  )
}

export default Cards