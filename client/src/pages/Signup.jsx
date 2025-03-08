import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/signup",
        formData
      );
      alert("Successfully created an account");
      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.log("Error logging in: ", error);
      alert("Error logging in.");
    }
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-screen">
          <form onSubmit={handleSubmit} className="w-[500px]">
            <h2 className="text-center">Signup</h2>
            <div className="flex flex-col">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="off"
                className="p-2 rounded m-d border"
              />
              <label htmlFor="">Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
                className="p-2 rounded m-d border"
              />
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="off"
                className="p-2 rounded m-d border"
              />
            </div>
            <button className="p-3 bg-black text-white w-full my-8 border rounded-md cursor-pointer active:opacity-65">
              Signup
            </button>
            <h2>
              Already have an account?
              <Link to="/" className="underline ml-2 text-purple-400">
                Login here
              </Link>
            </h2>
          </form>
        </div>
      </main>
    </>
  );
};

export default Signup;
