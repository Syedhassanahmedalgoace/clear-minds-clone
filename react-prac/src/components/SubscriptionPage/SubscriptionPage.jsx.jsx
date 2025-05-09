import { useState } from "react";
import { CheckCircle, ChevronRight, X } from "lucide-react";

export default function SubscriptionPage() {
  const [plan, setPlan] = useState("Standard Plan");
  const [price, setPrice] = useState("8.99");
  const [autoRenew, setAutoRenew] = useState(true);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      price: "4.99",
      features: [
        "25 pages for your users",
        "Ideal for small teams",
        "Basic features",
      ],
    },
    {
      name: "Standard Plan",
      price: "8.99",
      features: [
        "50 pages for your users",
        "Ideal for medium sized teams",
        "Comprehensive features",
      ],
    },
    {
      name: "Premium Plan",
      price: "14.99",
      features: [
        "Unlimited pages",
        "Enterprise-level support",
        "Advanced analytics",
        "Priority support",
      ],
    },
  ];

  const handlePlanChange = (planName, planPrice) => {
    setPlan(planName);
    setPrice(planPrice);
    setShowPlanModal(false);
  };

  const handleCancelRenewal = () => {
    setAutoRenew(false);
    setShowCancelModal(false);
  };

  const handleRestoreRenewal = () => {
    setAutoRenew(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <button className="mr-2 lg:hidden" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <img
            src="https://www.figma.com/design/IhQ1207wwxX4bi1VFBmQ4Y/ClearMindsHypnotherapy?node-id=6283-19644&t=6oyxs6nuTYJJpWbZ-4"
            alt="Clear Minds"
            className="mr-2"
          />
        </div>
        <div className="flex items-center">
          <button className="p-2 text-gray-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          <button className="ml-2 p-1">
            <img
              src="/api/placeholder/24/24"
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow relative">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Left Sidebar */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 transform lg:translate-x-0 lg:static lg:inset-auto transition duration-200 ease-in-out w-64 lg:w-48 bg-white border-r border-gray-200 z-50`}
        >
          <div className="p-4 text-xs text-gray-500 font-medium">DASHBOARD</div>
          <ul>
            <li className="px-4 py-2 text-gray-600 flex items-center hover:bg-gray-50 cursor-pointer">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              Analytics
            </li>
            <li className="px-4 py-2 bg-blue-50 text-blue-600 font-medium flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
              Plans
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-4 md:p-6 overflow-y-auto">
          <h1 className="text-xl font-medium mb-4">
            <strong>My Subscription</strong>
          </h1>
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-500 mb-2">
              Current Plan
            </h2>
            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4 md:p-6">
              <div className="flex flex-wrap items-center mb-4">
                <div className="flex items-center mb-2 sm:mb-0">
                  <span className="text-blue-600">clear-minds</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600 text-sm">{plan}</span>
                </div>
                <div className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
                  <button
                    onClick={() => setShowPlanModal(true)}
                    className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md flex items-center"
                  >
                    Change plan
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-semibold">${price}</span>
                <span className="text-gray-500 text-sm ml-1">/mo</span>
              </div>

              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  FEATURES
                </h3>
                <ul className="space-y-2">
                  {plans
                    .find((p) => p.name === plan)
                    ?.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={16}
                          className="text-blue-500 mr-2 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
                <div className="mb-3 sm:mb-0">
                  {autoRenew
                    ? "Automatically renewed every year"
                    : "Auto-renewal is off"}
                </div>
                {autoRenew ? (
                  <button
                    onClick={() => setShowCancelModal(true)}
                    className="text-red-500 border border-red-500 px-3 py-1 rounded-md w-full sm:w-auto text-center"
                  >
                    Cancel Renewal
                  </button>
                ) : (
                  <button
                    onClick={handleRestoreRenewal}
                    className="text-blue-500 border border-blue-500 px-3 py-1 rounded-md w-full sm:w-auto text-center"
                  >
                    Restore Renewal
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Area with User Profile */}
      <div className="px-4 py-3 bg-white border-t border-gray-200">
        <div className="flex flex-wrap items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="relative mr-3">
              <img
                src="/api/placeholder/32/32"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 text-white text-xs px-1 rounded-sm">
                Pro
              </span>
            </div>
            <div>
              <div className="text-sm font-medium">Osama Rashid</div>
              <div className="text-xs text-gray-500">
                Osamarashid.algoace@gmail.com
              </div>
            </div>
          </div>
          <button className="ml-auto bg-gray-900 text-white text-sm px-3 py-1 rounded-md">
            Upgrade to Pro
          </button>
        </div>
      </div>

      {/* Change Plan Modal */}
      {showPlanModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Change Plan</h3>
              <button
                onClick={() => setShowPlanModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              {plans.map((planOption, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 mb-3 cursor-pointer ${
                    planOption.name === plan
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() =>
                    handlePlanChange(planOption.name, planOption.price)
                  }
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{planOption.name}</h4>
                    <span className="text-lg font-semibold">
                      ${planOption.price}/mo
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {planOption.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={14}
                          className="text-blue-500 mr-2 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex justify-end p-4 border-t">
              <button
                onClick={() => setShowPlanModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md mr-2 text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Renewal Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Cancel Auto-Renewal</h3>
              <button
                onClick={() => setShowCancelModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Are you sure you want to cancel the automatic renewal of your
                subscription? Your subscription will remain active until the end
                of the current billing period.
              </p>
              <p className="text-gray-600">
                You can restore auto-renewal at any time before your
                subscription expires.
              </p>
            </div>
            <div className="flex justify-end p-4 border-t">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md mr-2 text-sm"
              >
                Keep Renewal
              </button>
              <button
                onClick={handleCancelRenewal}
                className="px-4 py-2 bg-red-500 text-white rounded-md text-sm"
              >
                Cancel Renewal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
