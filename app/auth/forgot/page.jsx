'use client';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50  px-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Forgot password</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:ring-teal-800 focus:border-teal-800"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-800 text-white py-2 rounded hover:bg-teal-900 transition"
          >
            Send Reset Link
          </button>
           <p className="mt-4 text-center text-sm text-gray-500">
            Go back to{" "}
            <a href="/auth/login " className="text-teal-800 hover:underline">
              Login
            </a>
          </p>
        </form>
        {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
      </div>
      
    </div>
  );
}
