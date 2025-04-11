// src/pages/VerifyEmail.jsx
export default function VerifyEmail() {
  return (
    <div className="flex h-screen flex flex-col md:flex-row h-screen">
      <div className="w-1/2 bg-teal-700 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">clearminds</h1>
      </div>
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold">Email Verification</h2>
          <div className="flex justify-between gap-2">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                maxLength={1}
                className="w-12 h-12 text-center border rounded"
              />
            ))}
          </div>
          <button className="bg-teal-600 text-white w-full py-3 rounded hover:bg-teal-700 transition">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
