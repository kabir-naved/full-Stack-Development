import React from 'react'
import Button from './Button'

function Product({val, mover, count}) {
    const {title, description} = val
  return (
    <div className='w-full py-20 h-[23rem] text-white'>
        <div onMouseEnter={()=> {mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-medium'>{title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-8'>{description}</p>
               <div className='flex items-center justify-between pl-4 pr-6 cursor-pointer'>
                    {val.live && <Button box = "Get Started"/>}
                    {val.case && <Button box = "Case Study"/>}
               </div>
               
            </div>
        </div>
    </div>
  )
}

export default Product