import React from 'react'
const ConfirmOrder = () => {

  return (
    
    <div className='bg-red-200'>
        <main className='md:w-[45rem] w-[23rem] bg-white mx-auto py-20'> 
            <h1 className='text-3xl text-center'> Confirm Order  </h1>
            <form className='md:px-20 px-10 mt-10 flex flex-col gap-5'>
                <div className='flex flex-row justify-between bg-gray-300 py-1 px-2'> 
                    <label className='text-sm font-semibold'> Cash On Delivery </label>
                    <input type="radio" name="payment" />   
                </div>
                <div className='flex flex-row justify-between bg-gray-300 py-1 px-2'> 
                    <label className='text-sm font-semibold'> Online Payment </label>
                    <input type="radio" name="payment" />   
                </div>
                <button className='bg-red-700 hover:bg-red-800 text-center w-full text-white md:w-[6rem] self-center py-1'> Submit </button>
            </form>
        </main>
    </div>
  )
}

export default ConfirmOrder;

