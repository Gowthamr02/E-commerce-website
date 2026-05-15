import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landingpage.css';

function Landingpage() {
  const navigate = useNavigate();

  return (
    <div className="landingpage">
      <div className="hero">
        <h1>Welcome to Ecomify</h1>
        <p>Discover the latest fashion, electronics, and accessories.</p>
        <img src="https://i.pinimg.com/736x/06/26/13/062613231a04bcea7bdbe83a8ad1c63c.jpg" alt="" />
        <button onClick={() => navigate("/shop")}>Shop Now</button>
      </div>
    </div>
  );
}

export default Landingpage;
