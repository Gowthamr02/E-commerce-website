import React from 'react'
import './Landingpage.css'
import { useNavigate } from 'react-router-dom'

function Hero() {
  let navigate = useNavigate();
  return (
    <div className='hero' >
       <div className='mainpg'>
         <h1>Effortless Shopping   Awaits.</h1>
        <p>Discover curated colletions and find exactly what you're looking for.Fast,simple,and secure</p>
        <button onClick={()=>navigate('/shop')} >Start Exploring</button>
       </div>
       <div className='imge' >
            <img src="https://i.pinimg.com/736x/7f/f9/b0/7ff9b0080bf325dff6f125643c859533.jpg" alt="" />
       </div>
       <div className='footer' >
        <p>© 2025 Ecomify . All rights reserved</p>
       </div>
    </div>
  )
}

export default Hero