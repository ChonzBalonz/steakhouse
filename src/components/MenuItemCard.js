import React, { useState } from "react";

const MenuItemCard = ({ item }) => {
  const [cookingOption, setCookingOption] = useState(
    item.options ? item.options[0] : null
  );

  const handleAddToOrder = () => {
    // We will use this in a later step
    // const itemToAdd = {
    //   ...item,
    //   selectedOption: cookingOption,
    // };
    alert(`${item.name} added to order!`);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-400 mb-4">{item.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-red-500">
            ${item.price.toFixed(2)}
          </span>
          {item.options && (
            <select
              value={cookingOption}
              onChange={(e) => setCookingOption(e.target.value)}
              className="bg-gray-700 text-white rounded p-2"
            >
              {item.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
        <button
          onClick={handleAddToOrder}
          className="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
