import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0f172a]">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl w-96 space-y-4"
      >
        <h2 className="text-2xl text-white font-bold text-center">
          Admin Login
        </h2>

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Enter email"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-900 text-white"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Enter password"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-900 text-white"
        />

        <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 text-white">
          Login
        </button>
      </form>
    </div>
  );
};
