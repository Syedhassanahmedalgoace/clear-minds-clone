import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; //yay firebase ka function hay jo loggin kay liyay use hota hay
import { auth } from "../../firebase"; // yay firebase configuration ka object hay jahan pay authentication handle hoteee hay
import { useNavigate } from "react-router-dom"; // 🔥 react-router se navigate hook import

export default function Login() {
  const [error, setError] = useState(""); // agar login fail hojaye to error show hogaa
  const [success, setSuccess] = useState(""); // jab login succesfull ho to message show karany kay liyay
  const [email, setEmail] = useState(""); // yay user input ko store krny liyay hay
  const [password, setPassword] = useState(""); // user input ko store krnay kay liyay hay

  const navigate = useNavigate(); // 👈 hook to redirect user after login

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Login successful 🎉");

      // 👇 Redirect to dashboard after short delay
      setTimeout(() => {
        setSuccess("");
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 relative">
      {success && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded shadow z-50 animate-fade-in-out">
          {success}
        </div>
      )}

      <div className="w-full md:w-1/2 bg-teal-700 text-white flex items-center justify-center py-10">
        <h1 className="text-3xl md:text-4xl font-bold">clearminds</h1>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm space-y-6 bg-white p-6 sm:p-8 rounded shadow"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Sign In to Clearminds
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
            placeholder="Password"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full w-full sm:w-auto transition-all"
            >
              Sign In
            </button>
          </div>

          <div className="text-sm text-center text-teal-600">
            <a href="/forgot-password" className="hover:underline">
              Forgot Password?
            </a>
            <div className="text-sm text-center text-teal-600">
              <a href="/signup">
                Don’t have an account?{" "}
                <span className="hover:underline">Sign Up</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
