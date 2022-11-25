import React from 'react'
import { MdOutlineFindReplace } from 'react-icons/md'
import { Link } from 'react-router-dom'
import founder from '../../assets/founder.webp'

const About = () => {
    return (
        <div className='bg-red-100'>
            <main className='flex bg-white flex-col mx-auto w-[90%] md:w-[60%] '>
                <h1 className='text-4xl font-bold py-2 px-5 text-white bg-red-700'> About Us </h1>
                <div className='text-center md:px-32 px-5 py-20'>
                    <h3 className='text-2xl font-bold text-gray-400'> MBA BURGER WALA </h3>
                    <p className='text-sm -tracking-[-3px] mt-10'> We are mba burger wala. The place for testy burgers </p>
                    <p className='text-sm -tracking-[-3px] mt-10'> Explore the  various type of burger and food. Click below to see the menu </p>
                    <Link to='/' className='text-red-800'> <MdOutlineFindReplace size={30} className='mx-auto mt-10' />  </Link>
                </div>
                <div className='bg-black flex flex-col justify-center py-20 px-5 items-center flex-wrap'>
                    <h2 className='text-3xl text-white font-bold'> Founder </h2>
                    <div className='flex justify-center items-center gap-10'>
                        <div className='text-center'>
                            <img src={founder} alt="" className='h-32 w-32 rounded-full' />
                            <h2 className='text-lg font-bold mt-3 text-white'> Coinboy </h2>
                        </div>
                        <div className=''>
                            <p className='text-sm -tracking-[-2px] text-white'> I am coinboy. The founder of mba burgerwala </p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default About