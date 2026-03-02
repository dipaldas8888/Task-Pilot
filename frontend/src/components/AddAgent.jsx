import { useState } from "react";
import API from "../api/axios.js";

export const AddAgent = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/agents", formdata);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setformdata({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
  };

  return (
    <div className="col-span-12 bg-gray-800 p-6 m-5 rounded-2xl border border-gray-700 shadow-lg">
      <h2 className="text-xl font-bold text-white mb-6">➕ Add New Agent</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6">
          <label className="text-sm text-gray-400">Agent Name</label>
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter agent name"
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter email"
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="text-sm text-gray-400">Phone</label>
          <input
            type="text"
            name="mobile"
            value={formdata.mobile}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter phone number"
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="text-sm text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter password"
          />
        </div>

        <div className="col-span-12 flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold shadow-md"
          >
            Add Agent
          </button>
        </div>
      </form>
    </div>
  );
};
