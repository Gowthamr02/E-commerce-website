import React from 'react'
import { useState } from 'react'
import  { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import './checkout.css'



function Checkout() {

    let navigate = useNavigate();
    let location = useLocation();
    
    let item = location.state?.item;
    
    let [form,setform] = useState({
        name:"",email : "",number : "",address:""
    }) ;

   let handlesubmit = (e) => {
  e.preventDefault();

  let order = { ...form, product: item };

  let existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

  existingOrders.push(order);

  localStorage.setItem("orders", JSON.stringify(existingOrders));

  toast.success("Ordered Successfully");

  navigate("/shop");
};
  return (
    <div className='checkout'>
        <div className='headline'>
            <h1>Enter The Details To Place The Order</h1>
        </div>

          {item && (
        <div className="product-preview">
          <img src={item.image} alt={item.name} className='preview-img' />
          <div className='preview-info'>
            <h3>{item.name}</h3>
            <p><b>Category:</b> {item.category}</p>
            <p><b>Price:</b> ₹{item.price}</p>
            <p>{item.description}</p>
          </div>
        </div>
      )}

        <div>
           <form action="" onSubmit={handlesubmit} >
             <label htmlFor="">Name</label>
            <input type="text"  placeholder='Enter the Name' onChange={(e)=>setform({...form,name:e.target.value})}  required />
            <label htmlFor="">Email</label>
            <input type="text"  placeholder='Enter The EmailAddress' onChange={(e)=>setform({...form,email:e.target.value})} required />
            <label htmlFor="">MobileNumber</label>
            <input type="number" placeholder='Enter The Number' onChange={(e)=>setform({...form,number:e.target.value})} required />
            <label htmlFor="">Address</label>
            <input type="text" placeholder='Enter The Addresss' onChange={(e)=>setform({...form,address:e.target.value})}  required />
            <button type='submit'className='btn buy-now' >Place Order</button>
           </form>
        </div>
    </div>
  )
}

export default Checkout