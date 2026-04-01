import React from "react";
import { CiPlay1 } from "react-icons/ci";
import BannerImg from '../assets/banner.png';

const BannerSection = () => {
  return (
    <div className="w-full">
      
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 px-6 items-center gap-10">
        
        <div className="space-y-6 mt-5 md:mt-10 text-center md:text-left">
          
          <h3 className="flex items-center gap-2 px-4 py-1 rounded-full font-semibold text-purple-600 bg-[#eef2ff] w-fit border border-purple-100 mx-auto md:mx-0 text-sm md:text-base">
            <span className="w-2 h-2 rounded-full bg-purple-600 outline outline-offset-2 outline-purple-300"></span>
            New: AI-Powered Tools Available
          </h3>

         
          <h1 className="font-bold text-4xl md:text-6xl leading-tight md:leading-normal text-gray-900">
            Supercharge Your <br className="hidden md:block" /> Digital Workflow
          </h1>

          
          <p className="text-[#627382FF] leading-relaxed max-w-lg mx-auto md:mx-0">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>
          
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full px-8 border-none hover:opacity-90 w-full sm:w-auto">
              Explore Products
            </button>
            <button className="btn rounded-full border-2 border-blue-600 bg-transparent px-8 hover:bg-blue-50 w-full sm:w-auto">
              <div className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                <CiPlay1 className="text-blue-600" /> Watch Demo
              </div>
            </button>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <img src={BannerImg} alt="Banner" className="w-full max-w-[500px] h-auto object-contain" />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center text-center bg-linear-to-l from-[rgb(79,57,246)] to-[rgb(149,20,250)] text-white py-12 px-6 w-full mt-20">
        
        <div className="w-full md:w-auto">
          <h1 className="font-bold text-4xl md:text-6xl">50K+</h1>
          <p className="text-blue-100 uppercase tracking-wide text-sm mt-1">Active Users</p>
        </div>

        
        <div className="hidden md:block border-l border-white/20 h-16"></div>
        <div className="md:hidden border-b border-white/20 w-24"></div>
        
        <div className="w-full md:w-auto">
          <h1 className="font-bold text-4xl md:text-6xl">200K+</h1>
          <p className="text-blue-100 uppercase tracking-wide text-sm mt-1">Premium Tools</p>
        </div>

        <div className="hidden md:block border-l border-white/20 h-16"></div>
        <div className="md:hidden border-b border-white/20 w-24"></div>
        
        <div className="w-full md:w-auto">
          <h1 className="font-bold text-4xl md:text-6xl">4.9</h1>
          <p className="text-blue-100 uppercase tracking-wide text-sm mt-1">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;