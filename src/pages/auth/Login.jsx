import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error sebelum submit

    axios
      .post("https://dummyjson.com/user/login", {
        username: "emilys", // Username yang benar
        password: "emilyspass", // Password yang benar
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message); // Tampilkan error jika status bukan 200
          return;
        }

        // Jika login berhasil, arahkan ke halaman Dashboard
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred"); // Tampilkan error
        } else {
          setError(err.message || "An unknown error occurred"); // Tampilkan error umum
        }
      })
      .finally(() => {
        setLoading(false); // Setelah selesai, set loading ke false
      });
  };

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          disabled={loading}
        >
          Login
        </button>
      </form>

      {/* Tombol ke Halaman Forgot Password dan Register */}
      <div className="flex justify-between mt-4">
        <button
          className="text-sm text-gray-600 hover:text-green-500"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </button>
        <button
          className="text-sm text-gray-600 hover:text-green-500"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
}
