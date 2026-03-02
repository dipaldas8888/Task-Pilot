import { useState } from "react";

export const AddAgent = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.prevent.default();
    console.log("Formdata submitted", formdata);
    setformdata({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };
  return (
    <div className="max-w-3xl m-3 bg-gray-800 rounded-xl border-gray-800 shadow-lg ">
      <h1 className="text-center font-bold text-white text-2xl">Add Agent </h1>
      <form className="space-y-4">
        <div className="flex items-center gap-2">
          <label className="text-sm  text-gray-400">Agent Name</label>
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded text-white bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none "
            placeholder="Enter Agent name"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-gray-400 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter email"
          />
        </div>

        {/* PHONE */}
        <div className="flex items-center">
          <label className="text-gray-400 text-sm">Phone</label>
          <input
            type="text"
            name="phone"
            value={formdata.phone}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-gray-400 text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter password"
          />
        </div>
      </form>
    </div>
  );
};
