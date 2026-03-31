import React from "react";
import { CiPlay1 } from "react-icons/ci";

const BannerSection = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h3 className="flex items-center gap-2 px-4 py-1 rounded-full font-semibold text-purple-600 bg-[#eef2ff] w-fit border border-purple-100">
          <span className="w-2 h-2 rounded-full bg-purple-600 outline outline-offset-2 outline-purple-300"></span>
          New: AI-Powered Tools Available
        </h3>

        <h1 className="font-bold text-6xl">Supercharge Your Digital Workflow</h1>

        <h3 className="text-[#627382FF]">Access premium AI tools, design assets, templates, and productivity software-all in one place. Start creating faster today. Explore Products
        </h3>

        <button className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-3xl">
          Explore Products
        </button>
        <button className="btn rounded-full border-2 border-blue-600 bg-transparent px-6 ml-3">
          <div className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
            <CiPlay1 className="text-blue-600" /> Watch Demo
          </div>
        </button>
      </div>

      <div>
        <img sr></img>
      </div>
    </div>
  );
};

export default BannerSection;
