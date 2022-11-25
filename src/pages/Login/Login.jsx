import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import {MdOutlinePassword} from 'react-icons/md'
import {FiMail} from 'react-icons/fi'
import axios from 'axios'

const Login = () => {    
    const [loginUser, setLoginUser] = useState({
        email:"",
        password:"",
    })
    const handleLogin = (e) =>{
        const {name, value } = e.target
        setLoginUser({...loginUser, [name]:value})
    }
    const funcLogin = async(e) =>{
        e.preventDefault();
        const {email, password} = loginUser;
        try {
            if(email && password){
                await axios.post('/api/v1/login', loginUser).then((res) =>{ 
                    if(res.status === 200){
                        const message = res.data.message;
                        console.log(res)
                        alert(message)    
                    }               
                })
            }
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    return (
        <div className='bg-red-100 pt-20'>
        <main className='bg-white md:w-[50%] w-full mx-auto min-h-screen'>
            <h1 className='text-4xl text-center font-extrabold w-full text-white bg-gradient-to-r py-5 from-red-600 to-orange-500'> Login </h1>
            <form className='flex px-20 flex-col justify-center mt-20 items-center gap-5' >
                <div className='flex flex-row py-1 justify-center items-center gap-3 pt-5 w-full border-b-2'>
                    <FiMail />
                    <input type="email" name="email" placeholder='Enter email' value={loginUser.email} className='outline-none text-sm w-full' onChange={handleLogin} />
                </div>
                <div className='flex flex-row py-1 justify-center items-center gap-3 pt-5 w-full border-b-2'>
                    <MdOutlinePassword />
                    <input type="text" name="password" placeholder='Enter password' value={loginUser.password} className='outline-none text-sm w-full' onChange={handleLogin} />
                </div>
                <button className='bg-gradient-to-r py-1 mt-4 from-red-600 to-orange-500 text-white w-full' onClick={funcLogin}> Login </button>
                <p className='text-sm font-semibold'>Click hare to Ragister <Link to='/ragister' className='text-red-700'> Ragister Now </Link> </p>
            </form>
        </main>
    </div>
    )
}

export default Login;
