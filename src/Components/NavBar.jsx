import React from "react";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between items-center px-4 md:px-28 py-3 sticky top-0 z-50">
      
      
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DigiTools
        </h1>
      </div>

      
      <div className="hidden md:flex gap-6 lg:gap-10">
        <h3 className="font-semibold cursor-pointer">Products</h3>
        <h3 className="font-semibold cursor-pointer">Features</h3>
        <h3 className="font-semibold cursor-pointer">Pricing</h3>
        <h3 className="font-semibold cursor-pointer">Testimonials</h3>
        <h3 className="font-semibold cursor-pointer">FAQ</h3>
      </div>

      
      <div className="flex items-center gap-3 md:gap-6">
        <h3 className="flex items-center gap-2 font-semibold cursor-pointer">
          <IoCartOutline className="text-2xl" />
          <span className="hidden sm:inline">Login</span>
        </h3>
        
        <button className="btn btn-sm md:btn-md bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-3xl">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default NavBar;