import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ColonLogo from "../assets/Colon.png";
import Google from "../assets/Google.png";
import Microsoft from "../assets/Microsoft.png";
import Apple from "../assets/apple.png";
import Slack from "../assets/Slack.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
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

      const { name } = response.data;

      localStorage.setItem("userName", name);

      alert("Login Successfully!");

      setFormData({
        email: "",
      });
      navigate("/dashboard");
    } catch (error) {
      console.log("Error logging in:", error);
      alert("Error logging in. Check the console");
    }
  };

  return (
    <>
      <main className="container mx-auto px-4">
        <div className="flex items-center justify-center h-screen">
          <form
            onSubmit={handleSubmit}
            className="w-[400px] shadow-xl p-12 flex justify-center flex-col "
          >
            <div className="flex items-center justify-center mb-3">
              <img src={ColonLogo} alt="" className="w-7 h-7" />
              <h1 className="text-2xl font-semibold">Colon</h1>
            </div>
            <h2 className="text-base text-center mb-4 ml-8">
              Login to continue
            </h2>
            <div className="flex flex-col">
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
                className=" p-2 rounded-sm border text-black text-sm border-gray-300"
              />
              {/* <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className=" p-2 border rounded-md"
              /> */}
              <label htmlFor="" className="text-sm my-3 flex gap-2">
                <input type="checkbox" className="text-gray-200" />
                <span className="text-gray-300">Remember me</span>
              </label>

              <button className="w-full p-3 bg-[#1D60E5] mb-3 text-white border rounded-md cursor-pointer active:opacity-65">
                Login
              </button>
            </div>
            {/* <h2>
              Dont have an account?
              <Link to="/signup" className="underline ml-2 text-purple-400">
                Sign up!
              </Link>
            </h2> */}
            <p className="text-center text-gray-300 mb-4 text-sm">
              Or Continue with
            </p>
            <div className="flex flex-col gap-3 mb-6 text-sm">
              <div className="p-2 border-gray-300 border-2 rounded-sm text-center flex gap-2 justify-center items-center ">
                <img src={Google} alt="" className="w-5 h-5" />
                Google
              </div>
              <div className="p-2 border-gray-300 border-2 rounded-sm text-center flex gap-2 items-center justify-center">
                <img src={Microsoft} alt="" className="w-5 h-5" />
                Microsoft
              </div>
              <div className="p-2 border-gray-300 border-2 rounded-sm text-center flex gap items-center justify-center gap-2 ">
                <img src={Apple} alt="" className="w-5 h-5" />
                Apple
              </div>
              <div className="p-2 border-gray-300 border-2 rounded-sm text-center flex gap-2 items-center justify-center ">
                <img src={Slack} alt="" className="w-5 h-5" />
                Slack
              </div>
            </div>
            <div className="text-[#1D60E5] mb-6">
              <div className="flex justify-evenly text-md ml-3">
                <h2>Can't Login</h2>
                <h2>Create an Account</h2>
              </div>
              <hr className="my-6 text-black" />
              <div className="flex justify-evenly text-sm">
                <h2>Privacy Policy</h2>
                <h2>User Notice</h2>
              </div>
            </div>
            <p className="text-xs text-center ">
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="underline"> Privacy Policy</span>
              and <span className="underline">Terms of Service </span> apply.
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
