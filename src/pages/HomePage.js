import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?steak')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold">The Sizzling Steak</h1>
          <p className="text-lg md:text-2xl mt-4">
            Experience the best steak in town
          </p>
          <Link to="/menu">
            <button className="mt-8 px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300">
              Order Now
            </button>
          </Link>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Welcome to The Sizzling Steak, where we serve only the finest cuts
            of meat, cooked to perfection. Our mission is to provide an
            unforgettable dining experience with exceptional service and a cozy
            atmosphere. Join us for a meal you won't forget.
          </p>
        </div>
      </div>

      {/* Hours and Contact Info Section */}
      <div className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Hours & Contact
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-lg">
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
              <p>Monday - Friday: 5:00 PM - 10:00 PM</p>
              <p>Saturday - Sunday: 4:00 PM - 11:00 PM</p>
            </div>
            <div className="text-lg">
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <p>Phone: (123) 456-7890</p>
              <p>Email: contact@thesizzlingsteak.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.618035248981!2d-73.98567888459312!3d40.74844097932837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2596f6a7f7d3d%3A0x4a4f28c9a3e2d1a!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
