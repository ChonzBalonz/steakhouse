import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-red-500">
          Your Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-400">{item.selectedOption}</p>
                  <p className="text-red-500">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.selectedOption)}
                  className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
