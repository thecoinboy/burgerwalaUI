import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/burger3.png'
import { BsCart2 } from 'react-icons/bs'
import { AiOutlineLogin, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaHamburger } from 'react-icons/fa'
import {motion } from 'framer-motion'


const isAuthenticated = false
const menu = [

    {
        name: "Home",
        url: "/"
    },
    {
        name: "Contact",
        url: "/contact"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: <BsCart2 />,
        url: "/cart"
    },
    {
        name: isAuthenticated ? <CgProfile /> : <AiOutlineLogin /> ,
        url: `${isAuthenticated ? "/me" : "/login"}`
    }
]

const Header = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <nav>
            <div className='flex justify-between items-center px-10 lg:px-32 border-b-2 py-3 bg-white'>
                <motion.div className='text-red-700'> <FaHamburger size={40} /> </motion.div>
                <div className='hidden lg:flex gap-14 justify-center items-center'>
                    {
                        menu.map((curElem, i) => <Link className='text-xl font-semibold hover:text-red-800' key={i} to={curElem.url}> { curElem.name}  </Link>  )
                    }
                </div>
                <div className="justify-end lg:hidden text-2xl font-bold cursor-pointer" onClick={()=> setToggle(!toggle)} > {toggle ? <AiOutlineMenu /> : <AiOutlineClose /> } </div>
                <div className={`lg:hidden absolute ${toggle ? "left-[-100%]" : "left-[50%]" } flex top-28 flex-col gap-14 justify-center items-center`}>
                    {
                        menu.map((curElem, i) => <Link className='text-xl font-semibold hover:text-red-800' key={i} to={curElem.url}> { curElem.name}  </Link>  )
                    }
                </div>
            </div>
        </nav>
    )
}
export default Header;
