// src/pages/ResetPassword.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { auth } from "../../firebase";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const oobCode = searchParams.get("oobCode");

  useEffect(() => {
    const verifyCode = async () => {
      try {
        const userEmail = await verifyPasswordResetCode(auth, oobCode);
        setEmail(userEmail);
        setConfirmed(true);
      } catch (err) {
        console.error(err);
        setError("Invalid or expired reset link.");
      }
    };

    if (oobCode) {
      verifyCode();
    }
  }, [oobCode]);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      alert("✅ Password has been reset! You can now log in.");
    } catch (err) {
      console.error(err);
      setError("Failed to reset password. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded border border-red-300 mb-4">
          {error}
        </div>
      )}

      {confirmed ? (
        <form onSubmit={handleReset} className="w-full max-w-md space-y-4">
          <p className="text-sm text-gray-600">Resetting password for: <strong>{email}</strong></p>

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="bg-teal-600 text-white w-full py-3 rounded hover:bg-teal-700 transition"
          >
            Reset Password
          </button>
        </form>
      ) : (
        !error && <p>Verifying link...</p>
      )}
    </div>
  );
}
