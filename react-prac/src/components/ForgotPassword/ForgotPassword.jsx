// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email, {
        // 👇 Optional: Send them to your custom page
        url: "http://localhost:5173/reset-password", // or your production link
        handleCodeInApp: true,
      });
      setSuccess("Reset link sent to your email");
      setEmail("");
    } catch (err) {
      console.error(err);
      setError("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-teal-700 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">clearminds</h1>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold">Forgot Password</h2>

          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded border border-green-300">
              {success}
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded border border-red-300">
              {error}
            </div>
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="bg-teal-600 text-white w-full py-3 rounded hover:bg-teal-700 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
