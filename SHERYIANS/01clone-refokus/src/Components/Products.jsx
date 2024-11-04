import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

function Products() {
    const product = [
                   {title: "arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false},
                   {title: "ttr", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false},
                   {title: "yir 2022", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: false},
                   {title: "yahoo!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true},
                   {title: "rainfall", description: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live: true, case: true}
    ];

    const [position, setPosition] = useState(0)

    const mover = (val) => {
      setPosition(val*23)
    }

  return (
    <div className='mt-32 relative'> 
      {product.map((elem,index) => (
         <Product val = {elem} mover ={mover} count = {index}/>
      ))}
      <div className='w-full h-full absolute top-0 pointer-events-none'>
          <motion.div initial= {{y: position, x: "-50%"}} 
          animate = {{y: position+ `rem`}}
          transition={{ease: [0.76, 0, 0.24, 1], duration: .6}}
          className='window w-[32rem] h-[23rem] absolute left-[43%]  overflow-hidden rounded-2xl'>
              <motion.div animate= {{y: -position+`rem`}} 
              transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
              className='window w-full h-full '>
              <video autoPlay muted loop src="public\assets\video\arqitel.mp4"></video>
              </motion.div>
              <motion.div animate= {{y: -position+`rem`}}  
              transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
              className='window w-full h-full '>
             <video autoPlay muted loop src="public\assets\video\ttr.mp4"></video>
              </motion.div>
              <motion.div animate= {{y: -position+`rem`}}  
              transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
              className='window w-full h-full '>
               <video autoPlay muted loop src="public\assets\video\yir.mp4"></video>
              </motion.div>
              <motion.div animate= {{y: -position+`rem`}}  
              transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
              className='window w-full h-full '>
               <video autoPlay muted loop src="public\assets\video\yahoo.mp4"></video>
              </motion.div>
              <motion.div animate= {{y: -position+`rem`}}  
              transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
              className='window w-full h-full '>
               <video autoPlay muted loop src="public\assets\video\rainfall.mp4"></video>
              </motion.div>
          </motion.div>
      </div>
    </div>
  )
}

export default Products