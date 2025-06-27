import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.id === item.id && i.selectedOption === item.selectedOption
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id && i.selectedOption === item.selectedOption
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId, selectedOption) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === itemId && item.selectedOption === selectedOption)
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
