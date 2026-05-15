import React from 'react'
import Landingpage from './Landingpage'
import Navbar from './Navbar'
import {  BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Newarrivals from './Newarrivals'
import Cart from './Cart'
import Products from './Products'
import { CartProvider } from './Cartcontext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Checkout'
import Orders from './Orders'
import Account from './Account'
import Errorpage from './Errorpage'
import Product from './Product'




function App() {
  return (
   <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element = {<Landingpage/>}/>
        <Route path="/shop" element = {<Products/>}/>
        <Route path="/new-arrivals" element = {<Newarrivals/>}/>
        <Route path = "/cart" element = {<Cart />}/>
        <Route path = "/account" element = {<Account/>}/>
        <Route path = "/buy-now" element = {<Checkout/>}/>
        <Route path = "/orders"  element = {<Orders/>}/>
        <Route path = "/product/:id" element = {<Product/>}/>
        <Route path='*' element = {<Errorpage/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
   </CartProvider>
  )
}

export default App