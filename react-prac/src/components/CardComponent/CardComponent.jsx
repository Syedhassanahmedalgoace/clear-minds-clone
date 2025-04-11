import React from "react";

const StatsCard = ({ subtitle, title, percentage, days = "Last 7 days" }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            {title}
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 text-center">
          {percentage}
          <svg
            className="w-3 h-3 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-700 mt-5 pt-5">
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 inline-flex items-center"
          >
            {days}
            <svg
              className="w-2.5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center text-blue-600 hover:text-blue-700 dark:hover:text-blue-500"
          >
            Users Report
            <svg
              className="w-2.5 h-2.5 ml-1.5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
