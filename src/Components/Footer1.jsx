import React from "react";

const Footer1 = () => {
  return (
    <div>
      <div className="w-400 h-auto bg-linear-to-l from-[rgb(79,57,246)] to-[rgb(149,20,250)] justify-center items-center text-center p-30 space-y-4">
        <h1 className="text-[#ffffffFF] font-bold text-4xl">Ready To Transform Your Worlflow?</h1>
        <p className="text-[#ffffffFF]">
          Join thousands of professionals who are already using Digitools to
          work smarter.<br></br> Start your free trial today.
        </p>

        <div className="flex justify-center items-center text-center gap-3 mt-8">
            <button className="btn bg-[#ffffffFF] border border-gray-100 shadow-sm hover:bg-gray-50 font-bold rounded-3xl">
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Explore Products
                </span>
              </button>

              <button className="btn bg-linear-to-r from-blue-600 to-purple-600 shadow-sm hover:bg-gray-50 font-bold rounded-3xl">
                <span className="text-[#ffffffFF]">
                  View Pricing
                </span>
              </button>
        </div>

        <p className="text-[#ffffffFF]">14-day free trial • No credit card required • Cancel anytime</p>
        
      </div>
    </div>
  );
};

export default Footer1;
