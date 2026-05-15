import React, { useState, useEffect } from "react";
import "./Orders.css";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const removeOrder = (id) => {

    const updatedOrders = orders.filter(order => order.id !== id);

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="order-grid">

      <div className="order-head">
        <h1>Your Orders</h1>
      </div>

      <div className="order-product">

        {orders.map((order) => (

          <div className="order-card" key={order.id}>

            <div className="order-details">
              <h3>{order.product.name}</h3>
              <h2>₹ {order.product.price}</h2>
              <img src={order.product.image} alt={order.product.name} />
              <p>{order.product.description}</p>
              <p>Product Will Arrive In Two Days</p>
            </div>

            <div className="btn-order">
              <button onClick={() => removeOrder(order.id)}>
                Cancel Order
              </button>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Orders;