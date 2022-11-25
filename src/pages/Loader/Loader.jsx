import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { GoPrimitiveDot } from 'react-icons/go'

const Loader = () => {

  return (
    <div className='bg-red-100'>
      <main className='min-h-screen flex justify-center items-center  flex-col'>
        <IoFastFoodOutline size={200} className="relative opacity-[.2]" />
        <div className='flex flex-row absolute   text-red-800 top-[60%] z-10 items-end'>
          <h3 className='text-4xl font-bold'> Loading </h3>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity }} > <GoPrimitiveDot /> </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity }} > <GoPrimitiveDot /> </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity }} > <GoPrimitiveDot /> </motion.span>
        </div>
      </main>
    </div>
  )
}

export default Loader;