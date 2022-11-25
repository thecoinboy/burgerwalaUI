import React from 'react'
import { Country, State, City }  from 'country-state-city';


const Shipping = () => {

    console.log(Country.getAllCountries());

    return (
        <div className='py-14 bg-red-200'>
            <main className=''>
                <form className='gap-7 bg-white py-14 flex m-auto flex-col justify-between items-center px-10 md:px-20 md:[80%] sm:[100%] lg:w-[70%]'>
                <h1 className='text-center text-4xl py-5'> SHIPPING DETAILS </h1>
                    <div className="flex flex-row gap-5 lg:gap-10 items-center w-full lg:px-24 mx-auto">
                        <label className='whitespace-nowrap  w-[6rem]'> H. No </label>
                        <input type="text" id="" className='w-[100%] border-2 px-2 text-sm' placeholder='Enter House Number' />
                    </div>
                    <div className="flex flex-row gap-5 lg:gap-10 items-center w-[100%] lg:px-24 mx-auto">
                        <label className='whitespace-nowrap w-[6rem]'> City </label>
                        <input type="text" id="" className='w-[100%] border-2 px-2 text-sm' placeholder='Enter City' />
                    </div>
                    <div className="flex flex-row gap-5 lg:gap-10 items-center w-full lg:px-24 mx-auto">
                        <label className='whitespace-nowrap w-[6rem]'> Country </label>
                        <select className='w-[100%] border-2 text-sm'>
                            <option id="" > Country </option>
                            {
                                Country && Country.getAllCountries().map((data) => <option> {data.name} </option> )
                            }
                        </select>
                    </div>
                    <div className="flex flex-row gap-5 lg:gap-10 items-center w-full lg:px-24 mx-auto">
                        <label className='whitespace-nowrap w-[6rem] '> State </label>
                        <select className='w-[100%] border-2 text-sm'>
                            <option id="" > State </option>
                            {
                                State && State.getStatesOfCountry("IN").map((data) => <option> {data.name} </option> )
                            }
                        </select>
                    </div>
                    <div className="flex flex-row gap-5 lg:gap-10 items-center w-[100%] lg:px-24 mx-auto">
                        <label className='whitespace-nowrap w-[6rem]'> Pincode </label>
                        <input type="text" id="" className='w-[100%] border-2 px-2 text-sm' placeholder='Enter Pin' />
                    </div>
                    <div className="flex flex-row gap-5 lg:gap-10 items-center w-[100%] lg:px-24 mx-auto">
                        <label className='whitespace-nowrap w-[6rem]'> Phone No</label>
                        <input type="text" id="" className='w-[100%] border-2 px-2 text-sm' placeholder='Enter Phone' />
                    </div>
                    <button className='md:w-36 w-[100%] text-white hover:bg-red-800 cursor-pointer h-8 bg-red-700'>Confirm Order</button>
                </form>
            </main>
        </div>
    )
}

export default Shipping;
