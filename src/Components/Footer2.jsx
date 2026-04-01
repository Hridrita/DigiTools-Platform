import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <div className="w-400 h-auto bg-[#101727FF] p-30">
      <div className="container mx-auto  grid grid-cols-5 gap-3">
        <div className="space-y-3">
          <h1 className="text-[#ffffffFF] font-bold text-2xl">DigiTools</h1>
          <p className="text-[#ffffffFF]">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-[#ffffffFF] font-bold">Product</h3>
          <h3 className="text-[#ffffffFF]">Features</h3>
          <h3 className="text-[#ffffffFF]">Pricing</h3>
          <h3 className="text-[#ffffffFF]">Templates</h3>
          <h3 className="text-[#ffffffFF]">Integrations</h3>
        </div>

        <div className="space-y-3">
          <h3 className="text-[#ffffffFF] font-bold">Company</h3>
          <h3 className="text-[#ffffffFF]">About</h3>
          <h3 className="text-[#ffffffFF]">Blog</h3>
          <h3 className="text-[#ffffffFF]">Careers</h3>
          <h3 className="text-[#ffffffFF]">Press</h3>
        </div>

        <div className="space-y-3">
          <h3 className="text-[#ffffffFF] font-bold">Resources</h3>
          <h3 className="text-[#ffffffFF]">Documentation</h3>
          <h3 className="text-[#ffffffFF]">Help Center</h3>
          <h3 className="text-[#ffffffFF]">Community</h3>
          <h3 className="text-[#ffffffFF]">Contact</h3>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white font-bold text-xl">Social Links</h3>
          <div className="flex gap-4">
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <RiInstagramFill className="text-black size-6" />
            </div>

            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <FaFacebookSquare className="text-black size-6" />
            </div>

            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <FaXTwitter className="text-black size-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-30 border border-gray-600 w-320"></div>

      <div className="container mx-auto mt-8">
        <div className="flex justify-between">
        <p className="text-gray-400 text-sm">
          &copy; 2026 Digitools. All rights reserved.
        </p>

        <div className="flex gap-5">
            <h3 className="text-gray-400">Privacy Policy</h3>
            <h3 className="text-gray-400">Terms of Service</h3>
            <h3 className="text-gray-400">Cookies</h3>
        </div>

      </div>
      </div>

      
    </div>
  );
};

export default Footer2;
