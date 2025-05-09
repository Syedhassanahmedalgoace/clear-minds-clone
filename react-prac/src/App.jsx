// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/SignUp/SignUp";
// import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
// import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
// import ResetPassword from "./components/ResetPassword/ResetPassword";
// import Dashboard from "./components/Dashboard/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import NotFound from "./components/NotFound/NotFound";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/verify-email" element={<VerifyEmail />} />
//         <Route path="/reset-password" element={<ResetPassword />} />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotFound from "./components/NotFound/NotFound";
import ManagersTable from "././components/ManagersTable/ManagersTable";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/managers"
          element={
            <ProtectedRoute>
              <ManagersTable />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
