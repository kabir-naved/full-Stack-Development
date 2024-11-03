import React from 'react'

function Marquee({imagesUrl}) {
  return (
    <div className='w-full flex py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imagesUrl.map((url, index) => (
            <img src={url} alt=""  className='w-22 flex-shrink-0'/>
        ))}
        {imagesUrl.map((url, index) => (
            <img src={url} alt=""  className=''/>
        ))}
    </div>
  )
}

export default Marquee