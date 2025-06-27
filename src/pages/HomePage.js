import React from "react";
import { useInView } from "../hooks/useInView";
import steakGif from "../images/steak.gif"; // Import the GIF

const HomePage = () => {
  const [mapRef, mapIsInView] = useInView({ threshold: 0.5 });

  return (
    <div
      className={`transition-colors duration-1000 ${
        mapIsInView ? "bg-black" : "bg-gray-100"
      }`}
    >
      {/* Top Section with GIF background */}
      <div className="relative h-screen">
        {/* Use a standard img tag for the GIF */}
        <img
          src={steakGif}
          alt="Sizzling steak"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/4 p-8 flex flex-col justify-center text-white bg-black bg-opacity-75">
            <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
            <p className="leading-relaxed text-center">
              Welcome to The Sizzling Steak, where we serve only the finest cuts
              of meat, cooked to perfection. Our mission is to provide an
              unforgettable dining experience with exceptional service and a
              cozy atmosphere.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white text-center p-8">
            <h1 className="text-5xl md:text-7xl font-bold">SizzleSteakHouse</h1>
            <p className="text-lg md:text-2xl mt-4">
              Experience the best steak in town
            </p>
          </div>

          <div className="w-full md:w-1/4 p-8 flex flex-col justify-center text-white bg-black bg-opacity-75">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Hours & Contact
            </h2>
            <div className="text-lg text-center space-y-4 ">
              <div>
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p>Monday - Friday: 5:00 PM - 10:00 PM</p>
                <p>Saturday - Sunday: 4:00 PM - 11:00 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@thesizzlingsteak.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div ref={mapRef} className="py-20">
        <div
          className={`container mx-auto px-6 md:px-12 text-center transform transition-transform duration-1000 ${
            mapIsInView ? "scale-105" : ""
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-8 transition-colors duration-1000 ${
              mapIsInView ? "text-white" : "text-gray-800"
            }`}
          >
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9 shadow-2xl">
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
