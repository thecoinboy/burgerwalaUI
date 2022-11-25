import React, {useState} from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {MdOutlinePassword} from 'react-icons/md'
import {Link } from 'react-router-dom'
import axios from 'axios'

const Ragister = () => {
    const [userData, setUserData] = useState({
        name:"", email:"", password:"", cpassword:""
    });

    const HandleChange = (e) =>{
        const {name, value } =  e.target
        setUserData({...userData, [name]: value })  
    }

    const ragister = (e) =>{
        e.preventDefault()
        const { name, email, password, cpassword} = userData;
        if(name && email && password && (password === cpassword)){
            axios.post("/api/v1/ragister", userData).then((res) =>{
                console.log(res)
            })

        }else(
            alert("invalid value")
        )
    }

  return (
    <div className='bg-red-100 pt-20'>
        <main className='bg-white md:w-[50%] w-full mx-auto min-h-screen'>
            <h1 className='text-4xl text-center font-extrabold w-full text-white bg-gradient-to-r py-5 from-red-600 to-orange-500'> Ragister </h1>
            <form action="" className='flex mt-10 px-20 flex-col justify-center items-center gap-5' onSubmit={ragister} >
                <div className='flex flex-row py-1 justify-center items-center gap-3 pt-10 w-full border-b-2'>
                    <FaUserAlt />
                    <input type="text" name="name"  placeholder='Enter name' value={userData.name} className='outline-none text-sm w-full' onChange={HandleChange}  />
                </div>
                <div className='flex flex-row py-1 justify-center items-center gap-3 pt-5 w-full border-b-2'>
                    <FiMail />
                    <input type="email" name="email" placeholder='Enter email' value={userData.email} className='outline-none text-sm w-full' onChange={HandleChange} />
                </div>
                <div className='flex flex-row py-1 justify-center items-center gap-3 pt-5 w-full border-b-2'>
                    <MdOutlinePassword />
                    <input type="text" name="password" placeholder='Enter password' value={userData.password} className='outline-none text-sm w-full' onChange={HandleChange} />
                </div>
                <div className='flex flex-row py-1 justify-center items-center gap-3 pt-5 w-full border-b-2'>
                    <MdOutlinePassword />
                    <input type="" name="cpassword" placeholder='Confirm password' value={userData.cpassword} className='outline-none text-sm w-full' onChange={HandleChange} />
                </div>
                <button className='bg-gradient-to-r py-1 mt-4 from-red-600 to-orange-500 text-white w-full'> Ragister </button>
                <p className='text-sm font-semibold'>Click hare to Login <Link to='/login' className='text-red-700'> Login Now </Link> </p>
            </form>
        </main>
    </div>
  )
}

export default Ragister;