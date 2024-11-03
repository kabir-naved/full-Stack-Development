import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] h-16 flex gap-2 justify-between items-center px-4 py-8 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600'>
        <span>  <img src={val.url} alt="" /></span>
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe