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
import { RxAvatar } from "react-icons/rx";

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
                Valid Till
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
                <span>
                  <RxAvatar />
                </span>{" "}
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
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
                <span>
                  <RxAvatar />
                </span>
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
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
                <span>
                  <RxAvatar />
                </span>{" "}
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
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
                <span>
                  <RxAvatar />
                </span>{" "}
              </th>
              <td className="px-6 py-4">Jason Hemmings</td>
              <td className="px-6 py-4">Heimings</td>
              <td className="px-6 py-4">jason.hemmings@gmail.com</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">50</td>
              <td className="px-6 py-4">Mon Aug 21 2024</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
                <span>
                  <RxAvatar />
                </span>{" "}
              </th>
              <td className="px-6 py-4">Una Dyer</td>
              <td className="px-6 py-4">Dyer's Group</td>
              <td className="px-6 py-4">Una124@gmail.com</td>
              <td className="px-6 py-4">6</td>
              <td className="px-6 py-4">20</td>
              <td className="px-6 py-4">Wed July 22 2021</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
                <span>
                  <RxAvatar />
                </span>{" "}
              </th>
              <td className="px-6 py-4">Gavin slater</td>
              <td className="px-6 py-4">Gavin's Group</td>
              <td className="px-6 py-4">gavin.slater@gmail.com</td>
              <td className="px-6 py-4">8</td>
              <td className="px-6 py-4">30</td>
              <td className="px-6 py-4">Sun June 30 2024</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
                <span>
                  <RxAvatar />
                </span>{" "}
              </th>
              <td className="px-6 py-4">Dexter Shepherd</td>
              <td className="px-6 py-4">Dycoders</td>
              <td className="px-6 py-4">Louis.khapal124@gmail.com</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">20</td>
              <td className="px-6 py-4">Fri0 Aug 21 2025</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
                <span>
                  <RxAvatar />
                </span>{" "}
              </th>
              <td className="px-6 py-4">Chase Day</td>
              <td className="px-6 py-4">Travel Service</td>
              <td className="px-6 py-4">jimmie.garbhold124@gmail.com</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">20</td>
              <td className="px-6 py-4">Sun June 30 2024</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
                <span>
                  <RxAvatar />
                </span>{" "}
              </th>
              <td className="px-6 py-4">Sorein Durham</td>
              <td className="px-6 py-4">Brain Trust</td>
              <td className="px-6 py-4">constantiti91@yahoo.com</td>
              <td className="px-6 py-4">20</td>
              <td className="px-6 py-4">100</td>
              <td className="px-6 py-4">Thurs Feb 26 2026</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
                <span>
                  <RxAvatar />
                </span>{" "}
              </th>
              <td className="px-6 py-4">Jaqueline brandin</td>
              <td className="px-6 py-4">Softonic</td>
              <td className="px-6 py-4">Julia456@gmail.com</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">Sun June 23 2026</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <BsThreeDotsVertical
                    style={{ width: "24px", height: "24px" }}
                  />
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
