import { useState } from "react";
import { User, BarChart2, Check } from "lucide-react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-teal-600 font-medium">clear minds</span>
          </div>

          <div className="flex items-center space-x-3">
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-600">OS</span>
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex flex-1">
        <aside className="hidden md:block w-48 bg-white border-r border-gray-200 p-4">
          <div className="text-sm font-medium text-gray-500 mb-6">
            DASHBOARD
          </div>
          <nav className="space-y-1">
            <a
              href="#"
              className="flex items-center px-2 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100"
            >
              <BarChart2 className="h-5 w-5 mr-3 text-gray-400" />
              Analytics
            </a>
            <a
              href="#"
              className="flex items-center px-2 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100"
            >
              <User className="h-5 w-5 mr-3 text-gray-400" />
              Users
            </a>
          </nav>

          <div className="mt-100 pt-8">
            <div className="flex items-center p-2">
              {/* <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                <span className="text-xs text-gray-600">OR</span>
              </div> */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-center">
                  Osama Rashid
                </span>
                <span className="text-xs text-gray-500 truncate">
                  osama.rashid@gmail.com
                </span>
              </div>
            </div>
            <button className="mt-2 w-35 bg-gray-800 text-white text-xs font-medium py-1 px-3 rounded-full h-8 ml-2">
              Upgrade to Pro
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Flexible Plans for your community's size and needs
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              Select a plan to empower your team
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center items-center mb-6">
              <span
                className={`mr-3 ${
                  billingCycle === "monthly"
                    ? "font-medium text-gray-900"
                    : "text-gray-500"
                }`}
              >
                MONTHLY
              </span>
              <button
                onClick={toggleBillingCycle}
                className="relative inline-flex h-6 w-11 items-center rounded-full"
              >
                <span
                  className={`transform transition bg-teal-500 w-11 h-6 rounded-full flex items-center ${
                    billingCycle === "yearly" ? "justify-end" : "justify-start"
                  }`}
                >
                  <span className="h-5 w-5 transform rounded-full bg-white shadow-md ml-0.5 mr-0.5"></span>
                </span>
              </button>
              <span
                className={`ml-3 ${
                  billingCycle === "yearly"
                    ? "font-medium text-gray-900"
                    : "text-gray-500"
                }`}
              >
                YEARLY
              </span>
              <span className="ml-2 text-xs font-medium text-green-500">
                SAVE 10%
              </span>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Starter Plan */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-120 w-80">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-teal-500 rounded flex items-center justify-center mr-3">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      Starter
                    </h2>
                  </div>

                  <div className="text-sm text-gray-600 mb-6">
                    Saving ${billingCycle === "monthly" ? "24" : "24"} a year
                  </div>

                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-gray-900">$</span>
                    <span className="text-4xl font-bold text-gray-900 mb-16">
                      6.99
                    </span>
                    <span className="text-gray-500 ml-1">/ mo</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 uppercase mb-4">
                      FEATURES
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">
                          10 seats for you users{" "}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">
                          Ideal for small teams{" "}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">
                          Affordable and efficient
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition">
                    Choose Starter
                  </button>
                </div>
                <div className="px-6 py-2 text-right">
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    All
                  </a>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative h-120 w-80">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 uppercase rounded-b">
                  Popular
                </div>
                <div className="p-6 pt-8">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-teal-500 rounded flex items-center justify-center mr-3">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      Premium
                    </h2>
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    Saving ${billingCycle === "monthly" ? "124" : "124"} a year
                  </div>

                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-gray-900">$</span>
                    <span className="text-4xl font-bold text-gray-900 mb-16">
                      8.99
                    </span>
                    <span className="text-gray-500 ml-1">/ mo</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 uppercase mb-4">
                      FEATURES
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">
                          50 Seats for your users
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">
                          Ideal for medium-sized teams
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">
                          Comprehensive Features
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition">
                    Choose Premium
                  </button>
                </div>
                <div className="px-6 py-2 text-right">
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
