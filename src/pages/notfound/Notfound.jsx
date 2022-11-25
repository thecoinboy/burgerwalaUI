import React from 'react'
import { MdError } from 'react-icons/md'
import {Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='bg-red-100'>
        <main className='flex py-20 flex-col mx-auto w-[90%] md:w-[70%] gap-4 px-0 md:px-20 justify-center items-center min-h-screen'>
            <MdError size={50} />
            <h1 className='text-5xl font-bold'> 404 </h1>
            <p className='text-sm mt-10'> Page not found click below to go to home page.</p>
            <Link className="bg-red-700 text-white py-1 px-5 text-sm" to='/'>Goto Home </Link>
        </main>
    </div>
  )
}

export default Notfound