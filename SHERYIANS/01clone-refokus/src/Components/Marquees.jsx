import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    const images = [
                    ["./public/assets/marquee-1/basf1.svg","./public/assets/marquee-1/bcg-1.svg", "./public/assets/marquee-1/flow-1.svg", "./public/assets/marquee-1/inte-1.svg", "./public/assets/marquee-1/lavender-1.svg", "./public/assets/marquee-1/remind-1.svg", "./public/assets/marquee-1/sing-1.svg", "./public/assets/marquee-1/ypo-1.svg"],
                    ["./public/assets/marquee-2/accel-1.svg","./public/assets/marquee-2/doxel-1.svg", "./public/assets/marquee-2/haufe-1.svg", "./public/assets/marquee-2/mural-1.svg", "./public/assets/marquee-2/rainfall-1.svg", "./public/assets/marquee-2/rainfall-1.svg", "./public/assets/marquee-2/rocket-1.svg", "./public/assets/marquee-2/spotify-1.svg", "./public/assets/marquee-2/webflow-1.svg", "./public/assets/marquee-2/weglot-1.svg", "./public/assets/marquee-2/yahoo-1.svg"]
    ]
  return (
    <div className='mt-32 py-20 w-full relative overflow-hidden'>
        {images.map((item, index) => (
            <Marquee key = {index} direction ={index===0 ? "left" : "right"} imagesUrl = {item}/>
        ))}
    </div>
  )
}

export default Marquees