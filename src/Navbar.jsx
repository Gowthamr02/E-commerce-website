import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({search,setsearch}) {
  const navigate = useNavigate();

  return (
    <div className='Navbar'>
      <div className='logo2'>
        <h1 onClick={() => navigate("/")}>Eco<b>m</b>ify</h1>
      </div>
      <div className='nav'>
        <div className='search'>
          <input type="text" placeholder="Search products..." value={search}  onChange={(e)=>setsearch(e.target.value)}  />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </div>
        <div className='nav_items'>
          <p onClick={() => navigate("/new-arrivals")}>New Arrivals</p>
          <p onClick={() => navigate("/orders")}>Orders</p>
          <p onClick={() => navigate("/cart")}>Cart</p>
          <p onClick={() => navigate("/account")}>Account</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
