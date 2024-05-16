import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaGoogle } from "react-icons/fa6";
import { useCookies, setCookie } from "react-cookie";
import { Navigate } from "react-router-dom"; // Import Redirect component

const Signin = ({ isSignedIn, setIsSignedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, , setCookie] = useCookies(["access_token", "refresh_token"]);

  const handleSubmit = async () => {
    let data = {
      email: email,
      password: password,
    };

    const result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.status === 201) {
      let accessToken = await result.json();
      setCookie("access_token", accessToken);
      setIsSignedIn(true);
      localStorage.setItem("isSignedIn", true);
    } else {
      setIsSignedIn(false);
      localStorage.setItem("isSignedIn", false);

      console.log("Sign-in failed");
    }
  };

  if (isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="sign">
      <div className="singup">
        <div className="singup-form">
          <div className="caa">
            <link
              href="https://fonts.googleapis.com/css?family=Inter"
              rel="stylesheet"
            ></link>
            <link
              href="https://fonts.googleapis.com/css?family=Jost"
              rel="stylesheet"
            ></link>
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
