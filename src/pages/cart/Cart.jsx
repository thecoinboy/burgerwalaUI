import React from 'react'
import Footer from '../../Component/footer/Footer.jsx';
import Header from '../../Component/Header/Header.jsx';
import CartItem from './CartItem.jsx';
import burger1 from '../../assets/burger1.png'
import { Link } from 'react-router-dom';

const Cart = () => {

    const increment = () => {

    }

    const decrement = () => {

    }
    return (
        <div className='bg-red-200 pt-16 pb-16'>
            <div className='bg-white lg:w-[60%] m-auto sm:w-[100%] flex flex-col md:w-[70%] h-auto p-5'>
                <CartItem title="burger" img={burger1} value={0} increment={increment} decrement={decrement} />
                <CartItem title="burger" img={burger1} value={0} increment={increment} decrement={decrement} />
                <CartItem title="burger" img={burger1} value={0} increment={increment} decrement={decrement} />
                <div className='flex flex-col'>
                    <div className='flex mt-10 lg:px-10 sm:px-1 flex-wrap justify-between items-center'>
                        <div className="flex flex-col">
                            <h4 className='font-semibold text-md'> Sub Total </h4>
                            <h4 className='font-semibold text-md'> Tax </h4>
                            <h4 className='font-semibold text-md'> Shipping Charges </h4>
                            <h4 className='font-semibold text-md'> Total </h4>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-md'> 3900 </p>
                            <p className='text-md'> 100 </p>
                            <p className='text-md'> 1000 </p>
                            <p className='text-md'> 5000 </p>
                        </div>
                    </div>
                    <Link to="/checkout" className='text-white ml-auto w-[100%] md:w-[25%] text-center  bg-red-700 hover:bg-red-800 px-12 py-1 text-sm mt-5' > Checkout </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;

