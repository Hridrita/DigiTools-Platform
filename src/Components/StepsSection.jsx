import React from "react";
import UserImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import RocketImg from "../assets/rocket.png";

const StepsSection = () => {
  return (
    <div className="w-full px-6">
      <div className="flex flex-col justify-center items-center text-center mt-20 mb-12">
        <h1 className="text-3xl font-bold">Get started In 3 Steps</h1>
        <p className="text-[#627382FF] max-w-md">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        <div className="relative card lg:card-side bg-base-100 shadow-sm flex flex-col justify-center items-center text-center p-22.5">
          <span className="flex items-center justify-center border border-purple-300 outline-none rounded-full bg-purple-600 w-8 h-8 absolute top-4 right-4 text-cente text-white">
            01
          </span>

          <img
            src={UserImg}
            alt="User"
            className="w-16 h-16 border border-purple-300 outline-none rounded-full p-4 bg-purple-100"
          />

          <div className="card-body items-center text-center p-0 mt-5">
            <h2 className="card-title font-bold text-xl mb-3 justify-center">
              Create Account
            </h2>

            <p className="text-[#627382FF] leading-relaxed max-w-60 mx-auto">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="relative card lg:card-side bg-base-100 shadow-sm flex flex-col justify-center items-center text-center p-22.5">
          <span className="flex items-center justify-center border border-purple-300 outline-none rounded-full bg-purple-600 w-8 h-8 absolute top-4 right-4 text-cente text-white">
            02
          </span>

          <img
            src={packageImg}
            alt="Package"
            className="w-16 h-16 border border-purple-300 outline-none rounded-full p-4 bg-purple-100"
          />

          <div className="card-body items-center text-center p-0 mt-5">
            <h2 className="card-title font-bold text-xl mb-3 justify-center">
              Choose Products
            </h2>

            <p className="text-[#627382FF] leading-relaxed max-w-60 mx-auto">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="relative card lg:card-side bg-base-100 shadow-sm flex flex-col justify-center items-center text-center p-22.5">
          <span className="flex items-center justify-center border border-purple-300 outline-none rounded-full bg-purple-600 w-8 h-8 absolute top-4 right-4 text-cente text-white">
            03
          </span>

          <img
            src={RocketImg}
            alt="User"
            className="w-16 h-16 border border-purple-300 outline-none rounded-full p-4 bg-purple-100"
          />

          <div className="card-body items-center text-center p-0 mt-5">
            <h2 className="card-title font-bold text-xl mb-3 justify-center">
              Start Creating
            </h2>

            <p className="text-[#627382FF] leading-relaxed max-w-60 mx-auto ">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
