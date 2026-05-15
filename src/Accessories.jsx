import React, { useState, useEffect, useContext } from 'react';
import './Accessories.css';
import { CartContext } from './Cartcontext';
import { toast } from 'react-toastify';
import { Link,useNavigate } from 'react-router-dom';

function Accessories({search}) {
  let [items, setItems] = useState([]);

  let {addToCart} = useContext(CartContext); 

  let[msg,setmsg] = useState(""); 

  let navigate = useNavigate(); 

  let handleaddtocart = (item)=>{
    
    try{
      addToCart(item);
      toast.success("Added to the Cart")
    }
    catch(e){
      toast.error("Failed to add to Cart")
      
      
    }
  }

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setItems(data.accessories))
      .catch(error => console.log("Error Occurred"));
  }, []);


  let filteritems = items.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()) ||
  item.category.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div className="accessories-container">
      <h1>Accessories</h1>
      <div className="accessories-grid">
        {filteritems.map(item => (
          <div className="accessory-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3><Link className='prdctname' to={`/product/${item.id}`} state = {{item}}  >{item.name}
            </Link></h3>
            <h4>Category:{item.category}</h4>
            <p className='p' ><b>Price: ₹{item.price}</b></p>
            <p>{item.description}</p>
            <div className='button-grouop' > 
              <button className='btn add-cart'onClick={()=> handleaddtocart(item)} >Add to cart</button>
              <button className='btn buy-now'  onClickCapture={()=>navigate('/buy-now',{state:{item}})} >Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accessories;
