import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import './Electronics.css'
import { toast } from 'react-toastify';
import { CartContext } from './Cartcontext';
import { Link,useNavigate } from 'react-router-dom';


function Electonics({ search }) {

  let navigate = useNavigate();
  let [items, setitems] = useState([]);
  let { addToCart } = useContext(CartContext);


  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
       
        setitems(data.electronics)
      })
      .catch(error => console.log("Error Occured"))
  }, []);

  let handleaddtocart = (item) => {
    try {
      addToCart(item);
      toast.success("Added to the Cart")
    }
    catch (error) {
      toast.error("Failed to Add to cart")
      console.log(error);

    }
  }
  let filteritems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='electronics' >
      <h1>Electronic Items</h1>
      <div className='product-grid' >
        {filteritems.map(item => (
          <div className='product-card' key={item.id} >
            <img src={item.image} alt={item.name} className="product-image" />
            <h3><Link className="prdctname" to={`/product/${item.id}`}  state = {{item}} >{item.name}</Link></h3>
            <h4>Category:{item.category}</h4>
            <p className='p' ><b>Price: ₹{item.price}</b></p>
            <p>{item.description}</p>
            <div className='button-group' >
              <button className='btn add-cart' onClick={() => handleaddtocart(item)} >Add to Cart</button>
              <button className='btn buy-now' onClick={()=>navigate('/buy-now',{state:{item}})} >Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Electonics