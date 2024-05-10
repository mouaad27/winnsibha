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
import { useState } from "react";
import {
  useCookies,
  cookies,
  setCookie,
  removeCookie
} from 'react-cookie';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['user']);



  let handleSubmit = async () => {
    let data = {
      email: email,
      password: password,
    };
    console.log(data)
    const result = await fetch(
      "http://127.0.0.1:8000/api/login",

      {
        method: "POST", // *GET, POST, PUT, DELETE, etc
        body: JSON.stringify(data), // body data type must match "Content-Type" header
            mode:"cors",
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let accessToken  =   result['access_token'];
    let refreshToken =  result['refresh_token'];
    setCookie("access_token",accessToken);
    setCookie("refresh_token",refreshToken);
    if(result.status == 201){
      console.log("user logged in ");
    }
   else{
     console.log('sorry');
   } 
  };
  return (
    <div className="sign">
      <Navbar></Navbar>

      <div className="singup">
        <div className="singup-form ">
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
          <div className="as">
            <p>
              Already have an account? <a className="fc">Sign in</a>
            </p>
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
              <p className="input-name1">email</p>
              <input
                type="email"
                value={email}
                onChange={(value) => setEmail(value.currentTarget.value)}
                className="text-sign mb-4"
              />{" "}
            </div>
            <div>
              <p className="input-name1">password</p>
              <input
                type="password"
                className="text-sign"
                value={password}
                onChange={(value) => setPassword(value.currentTarget.value)}
              />
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
    </div>
  );
};

export default Signin;
