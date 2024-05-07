import Navbar from "./Navbar";
import "../singup.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import { FaGoogle } from "react-icons/fa6";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";
import Signin from "../divs/Signin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

const Singup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword1, setShowPassword1] = useState(false);
  const [password1, setPassword1] = useState("");

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  return (
    <div className="sign">
      <Navbar></Navbar>

      <div className="singup ">
        <div className="singup-form h-[687px] ">
          <link
            href="https://fonts.googleapis.com/css?family=Inter"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Jost"
            rel="stylesheet"
          ></link>
          <div className="caa">
            <h1 className="font-bold text-3xl mb-6">Create an account</h1>
          </div>
          <div className="as flex ">
            <div>
              {" "}
              <p>Already have an account? </p>
            </div>
            <div>
              <NavLink to={`/Signin`}>
                <a className="fc ml-1 ">Sign in</a>
              </NavLink>
            </div>
          </div>
          <div>
            <button type="submit" className="google-button">
              <div className="google">
                <FaGoogle className="google-icon" />
                <div className="google-text">Sign up with google</div>
              </div>
            </button>
          </div>
          <div className="or-with-lign">
            <div className="or-lign">
              <div class="line"></div>
              <div class="text-or">Or</div>
              <div class="line"></div>
            </div>
          </div>
          <div className="boxes">
            <div>
              <p className="input-name">email</p>
              <input
                type="email"
                className="text-sign mb-4  bg-[#ede5dc] rounded-[2px]"
              />{" "}
            </div>
            <div className="mb-4">
              <p className="input-name">password</p>
              <div className=" ">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] "
                />
                <button onClick={togglePasswordVisibility} className=" eye  bottom-[140px]">
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="input-name">password</p>
              <div className=" ">
                <input
                  type={showPassword1 ? "text" : "password"}
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  placeholder=""
                  className="text-sign mb-4  bg-[#ede5dc] rounded-[2px] "
                />
                <button onClick={togglePasswordVisibility1} className=" eye1  bottom-[140px]">
                  {showPassword1 ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="cont-button">
              <button type="submit" className="continue-button">
                continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=""> 
      <h3>Your Reservation Form</h3>

<div className="bg-gray-400 mx-20 rounded-lg p-8">
  <div className="flex justify-between mb-8">
    <div className="w-1/2 mr-4">
      <label htmlFor="firstName" className="input-name block mb-2 text-black">First Name</label>
      <input id="firstName" type="text" placeholder="John" className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
    <div className="w-1/2 ml-4 text-right">
      <label htmlFor="lastName" className="input-name block mb-2 text-white">Last Name</label>
      <input id="lastName" type="text" placeholder="Doe" className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
  </div>
  <div className="flex justify-between mb-8">
    <div className="w-1/2 mr-4">
      <label htmlFor="wilaya" className="input-name block mb-2 text-white">Wilaya</label>
      <input id="wilaya" type="text" placeholder="Algiers" className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
    <div className="w-1/2 ml-4 text-right">
      <label htmlFor="commune" className="input-name block mb-2 text-white">Commune</label>
      <input id="commune" type="text" placeholder="Bab El Oued" className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
  </div>
  <div className="flex justify-between mb-8">
    <div className="w-1/2 mr-4">
      <label htmlFor="productNumber" className="input-name block mb-2 text-white">N° of product</label>
      <input id="productNumber" type="number" placeholder="5" className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
    <div className="w-1/2 ml-4 text-right">
      <label htmlFor="phoneNumber" className="input-name block mb-2 text-white">Phone Number</label>
      <input id="phoneNumber" type="tel" placeholder="123456789" className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
  </div>
  <h2>the owner will contact u soo n</h2>
  <div className="flex justify-center">
    <button type="submit" className="continue-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Confirm</button>
  </div>
</div>


      </div>
      <div class="max-w-md mx-auto py-6 px-4shadow-md rounded-md">
        <h2 class="text-2xl font-semibold mb-4">User Registration Form</h2>
        <div className=" bg-slate-50 h-96 w-full">
          <div className="flex">
            <div class="mb-4">
              <label
                for="firstName"
                class="block text-sm font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div class="mb-4">
              <label
                for="lastName"
                class="block text-sm font-medium text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="mb-4">
            <label
              for="userName"
              class="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="flex">
            <div class="mb-4">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div class="mb-4">
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="mb-4">
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="flex">
            <div class="mb-4">
              <label
                for="currentPassword"
                class="block text-sm font-medium text-gray-700"
              >
                Current Password:
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div class="mb-4">
              <label
                for="newPassword"
                class="block text-sm font-medium text-gray-700"
              >
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="mb-4">
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-700"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Singup;
