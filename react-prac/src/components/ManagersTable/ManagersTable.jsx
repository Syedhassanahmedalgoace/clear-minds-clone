// import React from "react";

// const ManagersTable = () => {
//   const managers = [
//     {
//       id: 1,
//       invoice: "INV001",
//       status: "Paid",
//       method: "Cr: Card",
//       amount: "$250.00",
//     },
//     {
//       id: 2,
//       invoice: "INV002",
//       status: "Pending",
//       method: "PayPal",
//       amount: "$120.00",
//     },
//     {
//       id: 3,
//       invoice: "INV003",
//       status: "Failed",
//       method: "Bank Transfer",
//       amount: "$300.00",
//     },
//   ];

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ marginBottom: "10px" }}>A list of your recent invoices</h2>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead style={{ backgroundColor: "#f3f4f6" }}>
//           <tr>
//             <th style={thStyle}>Invoice</th>
//             <th style={thStyle}>Status</th>
//             <th style={thStyle}>Method</th>
//             <th style={{ ...thStyle, textAlign: "right" }}>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {managers.map((row) => (
//             <tr key={row.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
//               <td style={tdStyle}>{row.invoice}</td>
//               <td style={tdStyle}>{row.status}</td>
//               <td style={tdStyle}>{row.method}</td>
//               <td style={{ ...tdStyle, textAlign: "right" }}>{row.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Some basic inline styles
// const thStyle = {
//   padding: "12px",
//   textAlign: "left",
//   fontWeight: "bold",
//   color: "#4b5563",
// };

// const tdStyle = {
//   padding: "12px",
//   color: "#374151",
// };

// export default ManagersTable;

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import SearchForm from "../../components/SearchForm/SearchForm";

const ManagersTable = () => {
  const managers = [
    {
      id: 1,
      invoice: "INV001",
      status: "Paid",
      method: "Cr: Card",
      amount: "$250.00",
    },
    {
      id: 2,
      invoice: "INV002",
      status: "Pending",
      method: "PayPal",
      amount: "$120.00",
    },
    {
      id: 3,
      invoice: "INV003",
      status: "Failed",
      method: "Bank Transfer",
      amount: "$300.00",
    },
  ];

  return (
    <>
      <SearchForm />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-2 py-3">
                Avator{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Users added
              </th>
              <th scope="col" className="px-6 py-3">
                Limits of users
              </th>
              <th scope="col" className="px-6 py-3">
                Valid till
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img />{" "}
              </th>
              <td className="px-6 py-4">John Smith</td>
              <td className="px-6 py-4">Algoace</td>
              <td className="px-6 py-4">Lony467@gmail.com</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">1000</td>
              <td className="px-6 py-4">Thurs Feb 26 2026</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img src="" alt="" />{" "}
              </th>
              <td className="px-6 py-4">Soren Durham</td>
              <td className="px-6 py-4">10 pearl</td>
              <td className="px-6 py-4">jonasimith675@gmail.com</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4">Sun June 30 2024</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img src="" alt="" />{" "}
              </th>
              <td className="px-6 py-4">Wendy Paterson</td>
              <td className="px-6 py-4">Looney Toones</td>
              <td className="px-6 py-4">wendy45@gmail.com</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4">990</td>
              <td className="px-6 py-4">Fri 21 May 2023</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Watches</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">No</td>
              <td className="px-6 py-4">$199</td>
              <td className="px-6 py-4">0.12 lb.</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple iMac
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">PC</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">7.0 lb.</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple AirPods
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">No</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">$399</td>
              <td className="px-6 py-4">38 g</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                iPad Pro
              </th>
              <td className="px-6 py-4">Gold</td>
              <td className="px-6 py-4">Tablet</td>
              <td className="px-6 py-4">No</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">$699</td>
              <td className="px-6 py-4">1.3 lb.</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Keyboard
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">453 g</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple TV 4K
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">TV</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">No</td>
              <td className="px-6 py-4">$179</td>
              <td className="px-6 py-4">1.78 lb.</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AirTag
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">No</td>
              <td className="px-6 py-4">$29</td>
              <td className="px-6 py-4">53 g</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManagersTable;
