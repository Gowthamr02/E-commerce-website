import React from 'react'
import './Account.css'

function Account() {
  return (
    <div className='account' >
              <h1>Account Details</h1>
      <div className="details">
        <p><strong>Name:</strong> Ranjith S</p>
        <p><strong>Email:</strong> ranjith@example.com</p>
        <p><strong>Mobile:</strong> 9876543210</p>
        <p><strong>Address:</strong> 123, MG Road, Chennai, India</p>
      </div>

    </div>
  )
}

export default Account