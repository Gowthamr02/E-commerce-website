import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

 
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

 
  const addToCart = (item) => {

    const existingItem = cartItems.find(i => i.id === item.id);

    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success("Added to Cart");
  };


  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(i => i.id !== id);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success("Product Removed Successfully");
  };


  const updateQuantity = (id, newQty) => {

    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(newQty,1) } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}