import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.agreed) {
      alert("You must agree to the Privacy Policy.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // Save full name in Firebase user profile
      await updateProfile(userCredential.user, {
        displayName: formData.firstName + ' ' + formData.lastName,
      });

      navigate('/');
    } catch (err) {
      alert('Registration failed: ' + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border shadow-sm rounded-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Register Account</h2>
      <p className="text-sm mb-6">
        If you already have an account with us, please <Link to="/login" className="text-blue-600 underline">login at the login page</Link>.
      </p>

      <form onSubmit={handleRegister} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm">E-Mail</label>
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm">Contact Number</label>
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm">Password Confirm</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Password Confirm"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="accent-black"
          />
          <label className="text-sm">
            I have read and agree to the <Link to="/privacy" className="underline text-blue-600">Privacy Policy</Link>.
          </label>
        </div>

        <button className="w-full bg-black text-white py-2 font-semibold">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

