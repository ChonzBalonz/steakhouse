import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-red-600 text-white text-center p-2 sticky top-[72px] z-40 overflow-hidden">
        <p className="font-bold marquee">Free delivery on orders over $25!</p>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
