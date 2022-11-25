import React from 'react'
import {motion } from 'framer-motion'
import burger3 from '../../assets/burger3.png'

const Hero = () => {
    const option = {
        initial:{
            x:"-100%",
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1,
        }
    }

  return (
    <div className='flex flex-wrap px-10 lg:px-32 gap-20 justify-center mt-[5rem] lg:mt-0 md:justify-between h-auto lg:h-[80vh] items-center'>
        <div className="flex flex-col items-center md:items-start">
            <motion.h1 {...option}
             className='text-5xl font-bold overflow-hidden'> MBA BURGER WALA  </motion.h1>
            <motion.p
             {...option }
                transition={{
                    delay:0.5
                }}
            
             className='text-lg'> Crazy test find burgerwala </motion.p>
            <a href="#menu" className='px-8 w-[150px] mt-12 py-2 text-white cursor-pointer bg-red-700'> Find test </a>
        </div>
        <motion.div
        initial={{ x:"100", opacity:0}}
        whileInView={{x:0, opacity:1}}
        >
           <img src={burger3} alt="burgerwala" className="text-red-700 w-[250px] lg:w-[450px] h-auto"  />
        </motion.div>
    </div>
  )
}

export default Hero;

