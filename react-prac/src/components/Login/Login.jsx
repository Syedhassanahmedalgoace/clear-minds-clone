import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Logged In Successfully 🎉");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.error("Login error:", err);
      switch (err.code) {
        case "auth/user-not-found":
          setError("User not found. Please sign up first.");
          break;
        case "auth/wrong-password":
          setError("Incorrect Password. please try again.");
          break;
        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        default:
          setError("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 relative">
      {/* Success Toast */}
      {success && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded shadow z-50">
          {success}
        </div>
      )}

      <div className="w-full md:w-1/2 bg-teal-700 text-white flex items-center justify-center py-10">
        <h1 className="text-4xl font-bold">clearminds</h1>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm space-y-6 bg-white p-8 rounded shadow"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Sign In
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded border border-red-300 text-sm">
              {error}
            </div>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full w-full transition-all"
          >
            Sign In
          </button>

          <div className="text-sm text-center text-teal-600">
            <a href="/signup" className="hover:underline">
              Don't have an account? Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
