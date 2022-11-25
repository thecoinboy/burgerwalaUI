import React from 'react'
import {BsWhatsapp, BsTwitter, BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex justify-evenly items-center flex-wrap bg-black px-10 py-10 text-white'>
        <div className="flex gap-2 flex-col">
        <h2 className='font-bold text-3xl text-red-700'> MBA Burger Wala</h2>
        <p className='text-sm'>We are trying to give you best test. </p>
        <span className='text-md mt-5'>We give attantion <b>  All right recieved @mbaburgerwala </b> </span>
        </div>
        <div className='flex mt-16 lg:mt-0 gap-5 flex-wrap'>
            <BsFacebook size={25} />
            <BsWhatsapp size={25} />
            <BsTwitter size={25} />
        </div>
    </div>
  )
}

export default Footer