import { motion } from 'framer-motion'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"

function Card({width, start, para, hover='false', hover2}) {

  return (
    <motion.div whileHover ={{backgroundColor: hover=== 'true' && '#ffffff', padding: '25px'}} className= {`bg-zinc-800 p-5 rounded-xl bg-purple-600 ${width} text-white ${hover2} min-h-[25rem] flex flex-col justify-between`}>
       <div className='w-full'>
            <div className='flex justify-between items-center'>
                    <h3>One Heading</h3>
                    <IoIosArrowRoundForward />
            </div>
            <div className=''>
                    <h1 className='text-3xl font-medium mt-5'>whatever heading</h1>
            </div>
        </div>
        <div className='down w-full'>
            {   
                start ? (
                <>
                    <h1 className='text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
                    <button className= {` border-black rounded-full py-2 px-5 border-[1px] mt-5`}> contact us</button>
                </>
                ) : null
            }
            {   
                para ? (
                <>
                    <p className='text-sm text-zinc-800 font-medium'>Lorem ipsum dolor sit amet consectetur.</p>
                </>
                ) : null
            }
        </div>
    </motion.div>
  )
}

export default Card

