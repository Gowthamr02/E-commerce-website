import React, { useState } from 'react'
import './Products.css'
import Fashion from './Fashion'
import Navbar from './Navbar'
import Electonics from './Electonics'
import Accessories from './Accessories'
function Products() {
  let [search, setsearch] = useState("");

  return (
    <>
      <Navbar search={search} setsearch={setsearch} />
      <div className='products'   >
        <div>
          <h1>Explore Our Collections</h1>
          <p>Find everything you need, from high-performance tech to the latest trends.</p>
        </div>
      </div>
      <Fashion search={search} />
      <Electonics search={search} />
      <Accessories search={search} />
      <div className='copyright' >
        <p>© 2025 Ecomify | All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Products