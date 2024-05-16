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
import { useCookies, cookies, setCookie, removeCookie } from "react-cookie";

const Singup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword1, setShowPassword1] = useState(false);
  const [password1, setPassword1] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  let handleSubmit = async () => {
    let data = {
      email: email,
      password: password,
    };
    let result = await fetch(
      "http://127.0.0.1:8000/api/register",

      {
        method: "POST", // *GET, POST, PUT, DELETE, etc
        body: JSON.stringify(data), // body data type must match "Content-Type" header
        mode: "cors",
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    result = await result.json();
    console.log(result);
    let accessToken = result["access_token"];
    let refreshToken = result["refresh_token"];
    setCookie("access_token", accessToken);
    setCookie("refresh_token", refreshToken);

    if (result.status == 201) {
      console.log("user Created Succesfully ");
    } else {
      console.log("sorry");
    }
  };
  return (
    <div className="sign">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                <button
                  onClick={togglePasswordVisibility}
                  className=" eye  bottom-[140px]"
                >
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
                <button
                  onClick={togglePasswordVisibility1}
                  className=" eye1  bottom-[140px]"
                >
                  {showPassword1 ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="cont-button">
              <button
                type="submit"
                className="continue-button"
                onClick={() => handleSubmit()}
              >
                continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex mx-20 ">
          <img src="rec.jpg" className="mr-4" />
          <div>
            <h2 className="  font-poppins text-sm text-col ">
              Your Reservation Form
            </h2>
          </div>
        </div>

        <div className="bg-gry mx-20 rounded-lg p-8">
          <div className="flex justify-between mb-8">
            <div className="w-1/2 mr-4 text-left">
              <label
                htmlFor="firstName"
                className="input-name block mb-2 text-col font-bold font-montserrat "
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="eg.Alaa"
                className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-gry text-base italic"
              />
            </div>
            <div className="w-1/2 ml-4 text-left">
              <label
                htmlFor="lastName"
                className="input-name block mb-2 text-col font-bold font-montserrat"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="eg.Mohamed"
                className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-gry text-base italic"
              />
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="w-1/2 mr-4 text-left">
              <label
                htmlFor="wilaya"
                className="input-name block mb-2 text-col  font-bold font-montserrat"
              >
                Wilaya
              </label>
              <input
                id="wilaya"
                type="text"
                placeholder="eg.Bejaia"
                className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-gry text-base italic"
              />
            </div>
            <div className="w-1/2 ml-4 text-left">
              <label
                htmlFor="commune"
                className="input-name block mb-2 text-col font-bold   font-montserrat"
              >
                Commune
              </label>
              <input
                id="commune"
                type="text"
                placeholder="eg.Amizour"
                className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-gry text-base italic"
              />
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="w-1/2 mr-4  text-left">
              <label
                htmlFor="productNumber"
                className="input-name block mb-2 text-col  font-bold font-montserrat"
              >
                N° of product
              </label>
              <input
                id="productNumber"
                type="number"
                placeholder="eg.2"
                className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-gry text-base italic"
              />
            </div>
            <div className="w-1/2 ml-4 text-left">
              <label
                htmlFor="phoneNumber"
                className="input-name block mb-2 text-col font-bold font-montserrat"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className="text-sign1 input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 bg-no-repeat bg-left pl-8"
                style={{
                  backgroundImage: "url(Phone.jpg)",
                  backgroundPosition: "10px center",
                }}
              />
            </div>
          </div>

          <div className="flex items-center">
            <img src="rec.jpg" className="mr-4" />
            <div>
              <h2 className="text-lg   font-poppins text-sm text-col ">
                The owner will contact you as soon as possible
              </h2>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className=" bg-pink2 text-col font-bold font-poppins px-10 py-2 border border-col rounded shadow-md"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      <div className="bg-pink my-20 mx-10 px-8 justify-between ">
        <div className="flex justify-between ">
          <div className="flex items-center  ">
            <img src="yes.png" className="mr-4" />
            <div>
              <h2 className="text-lg font-bold font-poppins text-col">
                Add New Product
              </h2>
            </div>
          </div>

          <div className="flex justify-end space-x-8">
            <div className="">
              <button
                type="submit"
                className="bg-white text-col font-bold font-monserrat px-10 py-2 border border-col rounded shadow-md"
              >
                Cancel
              </button>
            </div>

            <div className=" mx-20">
              <button
                type="submit"
                className="bg-pink2 text-col font-bold font-monserrat px-10 py-2 border border-col rounded shadow-md flex"
              >
                <img src="yes.png" className="mr-3" />
                Add product
              </button>
            </div>
          </div>
        </div>

        <div className="flex  justify-between">
          <div className="bg-gry mx-20 rounded-lg p-8 my-20 justify-between ">
            <div className="font-bold   font-montserrat font-blue  ">
              <h3>General Informations</h3>
            </div>
            <div className="p-4 ">
              <label
                htmlFor="productName"
                className=" block mb-2 text-col font-bold   font-montserrat"
              >
                Product Name:
              </label>
              <input
                type="text"
                id="productName"
                placeholder="Havic HV G-92 Gamepad"
                name="productName"
                className=" p-8 border border-gr placeholder-poppins placeholder-gry text-base italic"
              />
            </div>
            <div className="">
              <label
                htmlFor="productDescription"
                className="block mb-2 text-col font-bold   font-montserrat"
              >
                Product Description:
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
                className="p-8 placeholder-poppins placeholder-gry text-base italic"
              ></textarea>
            </div>
          </div>

          <div className="bg-gry mx-20 rounded-lg p-8 my-20">
            <div className="mt-4">
              <label htmlFor="productImage" className="block mb-1 font-bold">
                Product Image:
              </label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                className=" border border-gray-300 rounded-md py-2 px-3 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Singup;
