import React, { useState } from "react";
import Navbar from "../divs/Navbar.js";
import { useParams } from "react-router-dom";
import Landingpage from "../Landingpage.js";
import { BiMap } from "react-icons/bi";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaHeart } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";

const Showproduct = () => {
  const { images1, images2, productname, location } = useParams();

  const [bigImgSrc, setBigImgSrc] = useState("/" + images1 + "");

  const changeImg = (src) => {
    setBigImgSrc(src);
  };

  return (
    <div className="Showproduct">
      <link
        href="https://fonts.googleapis.com/css?family=Inter"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>
      <div className="nav-pr">
        <Navbar> </Navbar>
      </div>
      <div className="imagedesc">
        <div className="imagecontainer">
          <div className="showproduct">
            <div className="container.img">
              <div>
                <img
                  className="primg"
                  src="/8.jpg"
                  onClick={() => changeImg("/8.jpg")}
                />
              </div>
              <div>
                <img
                  className="primg"
                  src="/5.jpg"
                  onClick={() => changeImg("/5.jpg")}
                />
              </div>
              <div>
                <img
                  className="primg"
                  src={"/" + images2 + ""}
                  onClick={() => changeImg("/" + images2 + "")}
                />
              </div>
              <div>
                <img
                  className="primg"
                  src="/7.jpg"
                  onClick={() => changeImg("/7.jpg")}
                />
              </div>
            </div>
            <div className="bigimg">
              <img src={bigImgSrc} alt="" className="bigimgprd" />
            </div>
          </div>
        </div>
        <div className="description-cont">
          <div className="product-desc">
            <p>{productname}</p>
          </div>
          <div className="product-location flex">
            <div className=" mr-4">
              <BiMap />
            </div>
            <div>
              <p>{location}</p>
            </div>
          </div>
          <div className="product-Reviews">
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <div className="product-stars ">
            <div className="flex gap-2 items-center">
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" /> (150 Reviews)
            </div>
          </div>
          <div className="reserve">
            <AwesomeButton className="resvbut" type="primary">
              reserve
            </AwesomeButton>
            <span class="button-space"> </span>
            <AwesomeButton className="likebut" type="primary">
              {" "}
              <FaHeart />
            </AwesomeButton>
          </div>
        </div>
      </div>
      <div className="w-full h-80 bg-[#658899] flex ">
        <div>
          {" "}
          <img
            src="/prof.jpg "
            className=" h-56 w-56 rounded-full mt-16 ml-28"
          ></img>
        </div>
        <div className=" mt-24 ml-20 text-left">
          <p className="mb-16 text-2xl">User name</p>
          <p className="mb-4"> Phone number</p>
          <p> Email</p>
        </div>
      </div>
    </div>
  );
};

export default Showproduct;
