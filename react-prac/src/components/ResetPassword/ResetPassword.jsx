// src/pages/ResetPassword.jsx
export default function ResetPassword() {
  return (
    <div className="flex h-screen flex flex-col md:flex-row h-screen">
      <div className="w-1/2 bg-teal-700 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">clearminds</h1>
      </div>
      <div className="w-1/2 flex items-center justify-center p-8">
        <form className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold">Reset Password</h2>
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded"
          />
          <button className="bg-teal-600 text-white w-full py-3 rounded hover:bg-teal-700 transition">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
