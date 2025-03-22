import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Dashboard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      setName(userName);
    }

    // const fetchUserName = async () => {
    //   try {
    //   } catch (error) {}
    // };
  });

  return (
    <>
      <main>
        <div className="flex gap-2 mt-10 ml-8 items-center text-black mb-12">
          <div className="bg-[#656363] w-7 h-7 rounded-full"></div>
          <p className="text-xl">{name || "Loading..."}</p>
          <MdKeyboardArrowDown className="text-xl" />
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3  place-items-center place-content-center">
            <div className="bg-[#DEDEDE] w-[470px] h-[945px] rounded-md shadow-lg flex flex-col p-4">
              <div className="flex justify-center">
                <div className="bg-[#B4B4B4] text-center w-40 p-2 rounded-md text-white">
                  <p className="text-2xl">To do</p>
                </div>
              </div>
            </div>
            <div className="bg-[#DEDEDE] w-[470px] h-[945px] rounded-md shadow-lg p-4 ">
              <div className="flex justify-center">
                <div>
                  <div className="bg-[#B4B4B4] text-center w-40 p-2 rounded-md text-white">
                    <p className="text-2xl">In Progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#DEDEDE] w-[470px] h-[945px] rounded-md shadow-lg p-4">
              <div className="flex justify-center">
                <div>
                  <div className="bg-[#B4B4B4] text-center w-40 p-2 rounded-md text-white">
                    <p className="text-2xl">Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
