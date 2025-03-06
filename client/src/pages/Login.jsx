import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data", formData);
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-screen">
          <form onSubmit={handleSubmit} className="w-[500px]">
            <h2 className="text-center text-xl mb-8">Login</h2>
            <div className="flex flex-col mb-8">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
                className=" p-2 rounded-md border"
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className=" p-2 border rounded-md"
              />
            </div>
            <button className="w-full p-3 bg-black text-white border rounded-md">
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
