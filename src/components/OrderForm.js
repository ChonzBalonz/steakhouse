import React from "react";

const OrderForm = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-gray-800 p-8 rounded-lg shadow-lg mt-16">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Place Your Order
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-gray-700 text-white rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-700 text-white rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-white font-bold mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full bg-gray-700 text-white rounded p-2"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
});

export default OrderForm;
