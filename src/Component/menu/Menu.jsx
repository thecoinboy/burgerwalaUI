import React from 'react'
import { motion } from 'framer-motion'
import burger2 from '../../assets/burger2.png'


const burgerCard = [
  {
    Num: "1",
    img: burger2,
    price: 25,
    title: "cheez burger"
  },
  {
    Num: "1",
    img: burger2,
    price: 25,
    title: "cheez burger"
  },
  {
    Num: "1",
    img: burger2,
    price: 25,
    title: "cheez burger"
  },
  {
    Num: "1",
    img: burger2,
    price: 25,
    title: "cheez burger"
  },
]

const Menu = () => {

  return (
    <div className='px-5 mt-24 mb-16 lg:mt-14' id='menu'>
      <h1 className='text-3xl text-center font-bold'> Menu </h1>
      <div className="flex flex-wrap gap-10 justify-center items-center mt-12">
        {
          burgerCard.map((item, i) => {
            return (
              <motion.div
                initial={{ x:"-100%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                className='flex flex-col items-center pb-5 overflow-hidden rounded-2xl border-4 border-gray-200  w-[18rem] lg:w-[20rem] h-auto'>
                <h2 className="self-start bg-red-700 pl-5 py-2 text-white w-full">
                  #item {item.Num}
                </h2>
                <main className='flex flex-col gap-2 items-center justify-center'>
                  <img src={item.img} alt="" className='w-auto h-[15rem] object-contain' />
                  <h5 className='text-md font-bold'> Rs.{item.price} </h5>
                  <p className='text-md'>{item.title} </p>
                  <button className='bg-red-700 text-white text-sm py-1 w-[100%] rounded-lg hover:bg-red-800 transition-all'> Buy Now </button>
                </main>
              </motion.div>
            )
          })
        }
      </div>
    </div>

  )
}

export default Menu;