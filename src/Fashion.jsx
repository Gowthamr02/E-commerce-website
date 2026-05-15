import React from 'react'
import { useState, useEffect, useContext } from 'react'
import './Fashion.css'
import { toast } from 'react-toastify';
import { CartContext } from './Cartcontext';
import { useNavigate,Link } from 'react-router-dom';


function Fashion({ search }) {  

  let navigate = useNavigate();
  let [items, setitems] = useState([]);
  let { addToCart } = useContext(CartContext)
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setitems(data.fashion))
      .catch(err => console.log("error Occured"))
  }, []);



  let filteritems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  )

  let handlecart = (item) => {
    try {
      addToCart(item);
      toast.success("Item Added To the Cart")
    }
    catch (e) {
      toast.error("Failed To Add To the Cart ")
    }
  }
  return (
    <div className='fasion' >
      <h1 className='fashion-head'>Fashion</h1>
      <div className='fashion-grid' >
        {filteritems.map(item => (
          <div className='fashion-card' key={item.id}  >
            <img src={item.image} alt={item.name} className="fashion-image" />
            <h3  ><Link to={`/product/${item.id}`}  state = {{item}} className='prdctname' >{item.name}</Link></h3>
            <h4>Category : {item.category}</h4>
            <p className='p' ><b>Price: ₹{item.price}</b></p>
            <p>{item.description}</p>
            <div className='button-group' >
              <button className='btn add-cart' onClick={() => handlecart(item)} >Add to Cart</button>
              <button className='btn buy-now' onClick={() => navigate('/buy-now', { state: { item } })} >Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fashion