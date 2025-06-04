import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent.');
      navigate('/login');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
      <form onSubmit={handleReset} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">E-Mail Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="w-full bg-black text-white py-2 rounded">
          Send Reset Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
