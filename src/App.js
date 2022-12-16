import React,{useEffect} from 'react'
import {LoadUser} from './store/action/userAction.js'
import {useDispatch, useSelector} from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/footer/Footer';
import Header from './Component/Header/Header';
import Cart from './pages/cart/Cart';
import { Contact } from './pages/Contact/Contact';
import Home from './pages/Homepage/Home';
import Shipping from './pages/shipping/Shipping';
import ConfirmOrder from './pages/ConfirmOrder/ConfirmOrder'
import Ordersuccess from './pages/OrderPlaced/Ordersuccess';
import Login from './pages/Login/Login';
import Profile from './pages/profile/Profile';
import Orders from './pages/Orders/Orders';
import Orders2 from './pages/Orders2/Orders2';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/Users/Users';
import About from './pages/About/About';
import Notfound from './pages/notfound/Notfound';
import Loader from './pages/Loader/Loader';
import Ragister from './pages/ragister/Ragister';

const App = () => {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(LoadUser())
}, [dispatch])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/cart' element={<Cart /> } />
        <Route path='/shipping' element={<Shipping />  } />
        <Route path='/confirmorder' element={<ConfirmOrder /> } />
        <Route path='/ordersuccess' element={<Ordersuccess /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/ragister' element={<Ragister /> } />
        <Route path='/me' element={<Profile /> } />
        <Route path='/orders' element={<Orders /> } />
        <Route path='/orders2' element={<Orders2 /> } />
        <Route path='/orderdetails' element={<OrderDetails /> } />  
        <Route path='/dashboard' element={<Dashboard /> } />  
        <Route path='/users' element={<Users /> } />  
        <Route path='/*' element={<Notfound /> } />  
        <Route path='/loader' element={<Loader /> } />  
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

