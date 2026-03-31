import React from "react";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    
      <div className="container mx-auto navbar bg-base-100 shadow-sm flex justify-between">
        <div>
            <h1 className=" text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DigiTools
        </h1>
        </div>
        

        <div className="flex gap-4">
        <h3 className="font-semibold">Products</h3>
        <h3 className="font-semibold">Features</h3>
        <h3 className="font-semibold">Pricing</h3>
        <h3 className="font-semibold">Testimonials</h3>
        <h3 className="font-semibold">FAQ</h3>
        </div>


        <div className="flex gap-3">
                <h3 className="flex items-center gap-2 font-semibold"> <IoCartOutline />Login</h3>
            
            <button className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-3xl">Get Started</button>
        </div>
      </div>

      
    
  );
};

export default NavBar;
