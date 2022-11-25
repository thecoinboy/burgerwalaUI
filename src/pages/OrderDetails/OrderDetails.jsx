import React from 'react'

const OrderDetails = () => {

  return (
    <div className='bg-red-100'>
        <main className='flex flex-col gap-5 py-10 w-[22rem] md:w-[40rem] bg-white mx-auto text-center'> 
            <h1 className='text-3xl uppercase'> Order details </h1>
            <div>
                <h1 className='text-lg font-semibold -tracking-[-5px] uppercase'> Shipping</h1>
                <p className='text-sm'> 
                    <b> Address </b>
                    {"New 14-A/b new delhi"}
                </p>
            </div>
            <div>
                <h1 className='text-lg -tracking-[-5px] uppercase  font-semibold '> Contact </h1>
                <p className='text-sm'> 
                    <b> Name </b>
                    {"coinboy"}
                </p>
                <p className='text-sm'> 
                    <b> Phone No. </b>
                    {"+91999494949"}
                </p>
            </div>
            <div>
                <h1 className='text-lg -tracking-[-5px] uppercase font-semibold '> Status </h1>
                <p className='text-sm'> 
                    <b> Order Status </b>
                    {"Processing"}
                </p>
                <p className='text-sm'> 
                    <b> Placed </b>
                    {"23.10.2022"}
                </p>
                <p className='text-sm'> 
                    <b> Deliverd At </b>
                    {"23.11.2022"}
                </p>
            </div>
            <div>
                <h1 className='text-lg -tracking-[-5px] uppercase font-semibold '> Payment </h1>
                <p className='text-sm'> 
                    <b> Payment Mathod </b>
                    {"Online"}
                </p>
                <p className='text-sm'> 
                    <b> Payment Reference </b>
                    {"4349349238438"}
                </p>
                <p className='text-sm'> 
                    <b> Paid At </b>
                    {"25.11.2022"}
                </p>
            </div>
            <div>
                <h1 className='text-lg -tracking-[-5px] uppercase font-semibold '> Amount </h1>
                <p className='text-sm'> 
                    <b> Items Total </b>
                    {"$20"}
                </p>
                <p className='text-sm'> 
                    <b> Shipping Charges </b>
                    {"$1"}
                </p>
                <p className='text-sm'> 
                    <b> Tax </b>
                    {"$1"}
                </p>
                <p className='text-sm'> 
                    <b> Total Amount </b>
                    {"$22 "}
                </p>
            </div>
            <div className='flex flex-col gap-2 px-10 mt-4'>
                <h1 className='text-2xl -tracking-[-5px] uppercase font-semibold self-start'>ORDER ITEMS</h1>
                <div className='flex flex-row justify-between bg-gray-100 items-center p-1'>
                    <p className='text-sm'> Cheese Burger </p>
                    <p className='text-sm'> 12x100 </p>
                </div>
                <div className='flex flex-row justify-between bg-gray-100 items-center p-1'>
                    <p className='text-sm'> Veg Cheese burger </p>
                    <p className='text-sm'> 2x200 </p>
                </div>
                <div className='flex flex-row justify-between bg-gray-100 items-center p-1'>
                    <p className='text-sm'> Burger Fries </p>
                    <p className='text-sm'> 3x150 </p>
                </div>
                <div className='flex flex-row justify-between bg-gray-100 items-center p-1'>
                    <p className='text-sm font-bold'> Subtotal </p>
                    <p className='text-sm font-bold'> $244 </p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default OrderDetails;