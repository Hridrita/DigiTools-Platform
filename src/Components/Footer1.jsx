import React from "react";

const Footer1 = () => {
  return (
    <div>
      <div className="w-full h-auto bg-linear-to-l from-[rgb(79,57,246)] to-[rgb(149,20,250)] flex flex-col justify-center items-center text-center py-16 px-6 md:py-24 md:px-12 space-y-6">
        <h1 className="text-white font-bold text-3xl md:text-5xl max-w-3xl leading-tight">Ready To Transform Your Worlflow?</h1>
        <p className="text-[#ffffffFF]">
          Join thousands of professionals who are already using Digitools to
          work smarter.<br></br> Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 w-full">
            <button className="btn bg-white border-none shadow-lg font-bold rounded-full px-8 py-3 w-full sm:w-auto">
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Explore Products
                </span>
              </button>

              <button className="btn bg-transparent border-2 border-white text-white  font-bold rounded-full px-8 py-3 w-full sm:w-auto">
                <span className="text-[#ffffffFF]">
                  View Pricing
                </span>
              </button>
        </div>

        <p className="text-[#ffffffFF] text-xs md:text-sm pt-4">14-day free trial • No credit card required • Cancel anytime</p>
        
      </div>
    </div>
  );
};

export default Footer1;
