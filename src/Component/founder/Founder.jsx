import React from 'react'
import Mypic from '../../assets/founder.webp'
import {motion} from 'framer-motion'

const Founder = () => {
  return (
    <div className='flex justify-center h-[80vh] bg-red-700 mt-20 lg:mt-0'>
        <motion.div 
        initial={{x:'-100%', opacity:0}}
        whileInView={{x:'0%', opacity:1}}
        className="flex flex-col lg:w-[50%] w-[100%] px-12 justify-center items-center mx-auto">
            <img src={Mypic} alt="" className='h-32 w-32 rounded-full' />
            <h3 className='text-4xl font-bold text-white mt-3'>Rahul kumar</h3>
            <p className='text-gray-300 text-sm mt-5 tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus quaerat culpa atque voluptas! Incidunt nulla accusantium.</p>
        </motion.div>
    </div>
  )
}

export default Founder;