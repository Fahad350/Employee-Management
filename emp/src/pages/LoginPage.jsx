import React, { useState } from "react";
import OUTLOOK from "../assets/ms-outlook-svgrepo-com.svg";
import { FcGoogle } from "react-icons/fc";
import axiosSetup from "../../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [employeId, setEmployeId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axiosSetup.post("/login", {
        email: employeId,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/");
      }, 1200);
      console.log("Employes Details", `${(employeId, password)}`);
    } catch (error) {
      toast.error("Invalid Credentials!");
      error;
    }
  };

  const handleGoogleLogin = () => alert("Redirecting to Google Auth...");
  const handleOutlookLogin = () => alert("Redirecting to Outlook Auth...");
  return (
    <>
      <div className="min-h-screen bg-gray-200 flex justify-center items-center px-4">
        <div className=" ">
          <div className="mt-10 p-6 text-cenetr w-[90%] sm:w-[400px] md:w-[450px] lg:w-[500px] h-min-screen rounded-2xl  bg-white">
            <form onSubmit={handleSubmit}>
              <div>
                <h1 className="text-cyan-500 text-3xl text-center font-bold tracking-wider ">
                  GIZMO
                </h1>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Employee Access Gateway</p>
              </div>
              <div className="mt-8 relative">
                <label
                  className="absolute left-4 -top-2.5 text-sm text-cyan-500 transition-all 
                bg-white px-1
                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-cyan-200/50
                peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-600"
                  htmlFor="employeId"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={employeId}
                  className="peer text-gray-500 px-2 w-full h-10 rounded-md bg-transparent border border-cyan-400/50 focus:outline-cyan-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
                  onChange={(e) => setEmployeId(e.target.value)}
                />
              </div>
              <br />
              <div className="relative">
                <label
                  className="absolute left-4 -top-2.5 text-sm text-cyan-500 transition-all 
                bg-white px-1
                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-cyan-200/50
                peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  className="peer text-gray-500 px-2 w-full h-10 rounded-md bg-transparent border border-cyan-400/50 focus:outline-cyan-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center mt-6">
                <button className="bg-cyan-500 text-white text-xl font-semibold w-full space-y-5 h-10 rounded-lg cursor-pointer">
                  Login
                </button>
              </div>
              <div className="flex items-center my-6 mt-10">
                <hr className="flex-grow border-cyan-600" />
                <span className="text-cyan-500 mx-3 text-sm">
                  or continue with
                </span>
                <hr className="flex-grow border-cyan-600" />
              </div>

              <div>
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <button
                    onClick={handleGoogleLogin}
                    className="bg-gray-200 flex gap-4 py-2 md:w-1/2 w-full text-black rounded-lg px-3 cursor-pointer"
                  >
                    <FcGoogle className="size-6 flex mt-1" />
                    Sign in with Google
                  </button>
                  <button
                    onClick={handleOutlookLogin}
                    className="bg-gray-200 flex gap-4 py-2 md:w-1/2 w-full  text-black  rounded-lg px-3 cursor-pointer"
                  >
                    <img
                      src={OUTLOOK}
                      alt="outlook"
                      className="size-6 flex mt-1"
                    />
                    Sign in with Outlook
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
