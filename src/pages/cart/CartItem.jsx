import React from 'react'
import {AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'

const CartItem = ({title, img, value, increment, decrement }) => {
  return (
    <div className='flex lg:px-14 px-4 bg-gray-300 mt-2 flex-row justify-between items-center'>
        <h4> {title} </h4>
        <img src={img} alt={title} className="w-20 h-16 object-contain" />
        <div className='flex flex-row justify-between items-center bg-black'>
            <AiOutlinePlus onClick={increment} className='cursor-pointer text-white' />
            <input type="text" readOnly value={value} className="text-center w-10" />
            <AiOutlineMinus className='text-white cursor-pointer' />
        </div>
        
    </div>
  )
}

export default CartItem;