import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import ProfilePic from '../../assets/founder.webp'
import axios from 'axios'

const Profile = () => {
    
//     return (
//         <div className='bg-red-200 py-20'>
//             <main className='flex w-[80%] mx-auto py-10 flex-col md:flex-row md:px-20 px-5 bg-white'>
//                 <div className='flex items-center flex-col gap-5 md:border-r-4 md:pr-5'>
//                     <motion.img src={ProfilePic} alt="" className='w-52 rounded-full h-auto' />
//                     <motion.h5
//                         className='text-xl font-semibold'>
//                         Coinboy
//                     </motion.h5>
//                 </div>
//                 <div className='flex flex-col px-5 py-5'>
//                     <div className='flex flex-col items-center md:flex-row gap-5'>
//                         <div className='bg-black text-white flex flex-row text-sm gap-2 justify-center items-center h-8 w-32'>
//                             <MdDashboard size={20} />
//                             <Link to="/" > Dashboard  </Link>
//                         </div>
//                         <button to="/orders" className=' bg-red-700 hover:bg-red-800 text-center  text-sm text-white h-8 w-32 self-center '> Orders </button>
//                         <button className=' bg-red-700 hover:bg-red-800 text-center h-8 w-32 text-sm text-white self-center'> Logout </button>
//                     </div>
//                     <div className='mt-5'>
//                         <h1 className='text-2xl font-semibold'> About coinboy </h1>
//                         <p className='text-sm mt-2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, quam illum quidem dolore quisquam est quasi itaque nulla asperiores id sunt.</p>
//                     </div>
//                 </div>

//             </main>
//         </div>
//     )
}
export default Profile;
