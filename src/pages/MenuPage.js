import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { menuData } from "../data/menuData";
import MenuItemCard from "../components/MenuItemCard";
import OrderForm from "../components/OrderForm";

const MenuPage = () => {
  const location = useLocation();
  const orderFormRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToOrderForm && orderFormRef.current) {
      orderFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-red-500">
          Our Menu
        </h1>

        {/* Appetizers Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold border-b-2 border-red-500 pb-2 mb-8">
            Appetizers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.appetizers.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Steaks Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold border-b-2 border-red-500 pb-2 mb-8">
            Steaks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.steaks.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Sides Section */}
        <div>
          <h2 className="text-4xl font-bold border-b-2 border-red-500 pb-2 mb-8">
            Sides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.sides.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <OrderForm ref={orderFormRef} />
      </div>
    </div>
  );
};

export default MenuPage;
