import React from 'react'
import Footer from '../../Component/footer/Footer'
import Header from '../../Component/Header/Header'

export const Contact = () => {
    return (
        <div className='bg-gradient-to-r from-red-700 to-red-200 pb-16 pt-16'>
            <form className='w-[18rem] m-auto p-5 lg:p-16 h-auto lg:w-[35rem] bg-white'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-center font-bold text-3xl mb-10'>Contact Us  </h1>
                    <input type="text" name="name" placeholder='name' className='border-b-2 rounded-sm text-black p-2 text-sm  ' />
                    <input type="email" name="email" placeholder='email' className='rounded-sm border-b-2 text-black p-2 text-sm  ' />
                    <textarea type="text" name="message" placeholder='message' className='rounded-sm border-b-2 text-black p-2 text-sm  ' />
                    <p className='rounded-sm text-white cursor-pointer hover:bg-red-800 transition-all bg-red-700 p-2 text-sm text-center'> Sumbit </p>
                </div>
            </form>
        </div>
    )
}
