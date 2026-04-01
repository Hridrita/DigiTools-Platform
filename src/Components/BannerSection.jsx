import React from "react";
import { CiPlay1 } from "react-icons/ci";
import BannerImg from '../assets/banner.png';

const BannerSection = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-20">
      <div className="space-y-4 mt-10">
        <h3 className="flex items-center gap-2 px-4 py-1 rounded-full font-semibold text-purple-600 bg-[#eef2ff] w-fit border border-purple-100">
          <span className="w-2 h-2 rounded-full bg-purple-600 outline outline-offset-2 outline-purple-300"></span>
          New: AI-Powered Tools Available
        </h3>

        <h1 className="font-bold text-6xl leading-normal">Supercharge Your Digital Workflow</h1>

        <h3 className="text-[#627382FF] leading-relaxed">Access premium AI tools, design assets, templates, and productivity <br></br>software-all in one place. Start creating faster today.<br></br> Explore Products
        </h3>
        
        <div className="flex items-center gap-4">
          <button className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-3xl">
          Explore Products
        </button>
        <button className="btn rounded-full border-2 border-blue-600 bg-transparent px-6 ml-3">
          <div className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
            <CiPlay1 className="text-blue-600" /> Watch Demo
          </div>
        </button>

        </div>
        
      </div>

      <div className="justify-self-end">
        <img src={BannerImg} ></img>
      </div>

    </div>

    <div className="flex flex-col md:flex-row gap-10 md:gap-40 justify-center items-center text-center bg-linear-to-l from-[rgb(79,57,246)] to-[rgb(149,20,250)] text-white py-15 px-10 w-full mt-20">
      
      
      <div>
        <h1 className="font-bold text-5xl md:text-6xl">50K+</h1>
        <p>Active Users</p>
      </div>

      
      <div className="hidden md:block border border-gray-400 h-16"></div>
      
      <div className="md:hidden border-b border-gray-400 w-20 opacity-50"></div>
      
      
      <div>
        <h1 className="font-bold text-5xl md:text-6xl">200K+</h1>
        <p>Premium Tools</p>
      </div>

      <div className="hidden md:block border border-gray-400 h-16"></div>
      <div className="md:hidden border-b border-gray-400 w-20 opacity-50"></div>

      
      <div>
        <h1 className="font-bold text-5xl md:text-6xl">4.9</h1>
        <p>Rating</p>
      </div>

</div>
    </div>
    

    
  );
};

export default BannerSection;
