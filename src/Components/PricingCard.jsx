import React from "react";

const PricingCard = () => {
  return (
    <div className="w-full h-auto shadow-sm">
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-[#627382FF] max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <div className="card w-full max-w-md bg-base-100 shadow-sm border border-gray-100 h-full flex flex-col justify-between">
          <div className="card-body flex flex-col h-full">
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-2">Starter</h2>
              <p className="text-[#627382FF] mb-5">
                Perfect for getting started
              </p>
              <div className="flex items-baseline">
                <span className="text-3xl font-semibold">$0</span>
                <p className="text-gray-500 text-sm">/Month</p>
              </div>
              <ul className="mt-8 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#627382FF] font-semibold">
                    Access to 10 free tools
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#627382FF] font-semibold">
                    Basic templates
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#627382FF] font-semibold">
                    Community support
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#627382FF] font-semibold">
                    1 project per month
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <button className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white w-full rounded-3xl">
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        <div className="card w-full max-w-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm border border-gray-100 h-full flex flex-col justify-between">
          <div className=" relative card-body flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-[#FEF9C3] text-[#854D0E] text-xs font-bold px-4 py-1 rounded-full shadow-md border border-yellow-200 whitespace-nowrap">
                Most Popular
              </span>
            </div>
            <div className="flex-grow">
              <h2 className="text-3xl text-white font-bold mb-2">Pro</h2>
              <p className="text-white mb-5">Best for professionals</p>
              <div className="flex items-baseline">
                <span className="text-3xl text-white font-semibold">$29</span>
                <p className="text-white text-sm">/Month</p>
              </div>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-semibold">
                  Access to all premium tools
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-semibold">
                  Unlimited templates
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-semibold">
                  Priority support
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-semibold">
                  Unlimited projects
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-semibold">Cloud sync</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-semibold">
                  Advanced analytics
                </span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <button className="btn bg-white border border-gray-100 shadow-sm hover:bg-gray-50 font-bold w-full rounded-3xl">
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Start Pro Trial
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="card w-full max-w-md bg-base-100 shadow-sm border border-gray-100 h-full flex flex-col justify-between">
          <div className="card-body flex flex-col h-full">
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-2">Enterprise </h2>
              <p className="text-[#627382FF] mb-5">For teams and businesses</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-semibold">$99</span>
                <p className="text-gray-500 text-sm">/Month</p>
              </div>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#627382FF] font-semibold">
                  Everything in pro
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#627382FF] font-semibold">
                  Teams collaboration
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#627382FF] font-semibold">
                  Custom integrations
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#627382FF] font-semibold">
                  Dedicated support
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#627382FF] font-semibold">
                  SLA guarantee
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#627382FF] font-semibold">
                  Custom branding
                </span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <button className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white w-full rounded-3xl">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PricingCard;
