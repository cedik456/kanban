import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
        "http://localhost:4000/api/user/login",
        formData
      );
      console.log(response.data);

      alert("Login Successfully!");

      setFormData({
        email: "",
        password: "",
      });
      navigate("/dashboard");
    } catch (error) {
      console.log("Error logging in:", error);
      alert("Error logging in. Check the console");
    }
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-screen">
          <form onSubmit={handleSubmit} className="w-[500px]">
            <h2 className="text-center text-xl mb-8">Login</h2>
            <div className="flex flex-col">
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
            <button className="w-full p-3 bg-black my-8 text-white border rounded-md cursor-pointer active:opacity-65">
              Login
            </button>
            <h2>
              Dont have an account?
              <Link to="/signup" className="underline ml-2 text-purple-400">
                Sign up!
              </Link>
            </h2>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
