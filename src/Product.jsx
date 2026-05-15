import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Product.css'
function Product() {

    let location = useLocation();
    let navigate = useNavigate();
    let{item} = location.state || {};
  return (
    <div className='product-container' >
       <div className='product-header' >
        <h1>Product Details</h1>
       </div>
       <div className='product-details'>
        <h1>{item.name}</h1>
        <img src={item.image} alt="" />
        <h2>₹ {item.price}</h2>
        <h2>{item.category}</h2>
        <h2>{item.description}</h2>
       </div>
    </div>
  )
}

export default Product