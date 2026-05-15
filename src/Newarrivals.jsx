import  { useContext } from "react";
import { useState, useEffect } from "react";
import './Newarrivals.css'
import { toast } from "react-toastify";
import { CartContext } from "./Cartcontext";
import { useNavigate } from "react-router-dom";

function Newarrivals() {


  let [items, setitems] = useState([]);
  let {addToCart} = useContext(CartContext);

  let navigate = useNavigate();
  useEffect(() => {
    fetch("/data.json")
      .then(res => (res.json()))
      .then(data => setitems(data.newArrivals))
      .catch(error => console.log("error occured")
      )
  }, [])

let handleaddtocart = (item)=>{
  try{
    addToCart(item);
    toast.success("added To The Cart")
  }
  catch(e){
    toast.error("Failed To Add to Cart")
    console.log("Error",e);
    
  }
}
  return (
    <div className="arrivals" >
      <div className="head" > <h1>"Fresh Finds,Just Landed"</h1></div>
      <div className="arrivals-grid" >
        {items.map(item => (
          <div className="items" key={item.id}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <h4>Category:{item.category}</h4>
            <p>Price:{item.price}</p>
            <p>{item.description}</p>
            <div className='button-grouop' >
              <button className='btn add-cart' onClick={() => handleaddtocart(item)} >Add to cart</button>
              <button className='btn buy-now' onClick={()=>navigate('/buy-now',{state:{item}})} >Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Newarrivals