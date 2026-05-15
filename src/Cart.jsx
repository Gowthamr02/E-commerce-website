import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {

  let { cartItems, removeFromCart } = useContext(CartContext);

  let navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p><b>Category:</b> {item.category}</p>
                <p><b>Description:</b> {item.description}</p>
                <p className="cart-price"><b>Price:</b> ₹{item.price}</p>

                <button className="remove-btn"   onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
                <button className="btn buy-now" onClick={()=>navigate('/buy-now',{state:{item}})} >Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
