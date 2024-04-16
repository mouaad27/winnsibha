import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './divs/Navbar.js';
import Windowbar from './divs/Windowbar';
import Searchbar from './divs/Searchbar';
import Card from './divs/Card.js';
import Slider from 'react-slick';
import './index.css';
import './card.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter ,Router ,Route, Link ,NavLink, Routes} from 'react-router-dom'
import Showproduct from './divs/Showproduct.js';
import { HiShoppingBag } from "react-icons/hi2";
import { GrServices } from "react-icons/gr";

import  { Component } from "react";
import ContactUs from './divs/ContactUs';
import './contact.css';
import './contact.css';
import './footer.css'



function Landingpage() {
  const data =[
    {
      name: `paris jackit`,
      img1: `5.jpg`,
      img2:`55.jpg`,
      review: ``,
      description:``,
      location:`city122`,
      profilname:`mouaad`
    },
    {
      name: `messi t-shirt`,
      img1: `6.jpg`,
      img2:`66.jpg`,
      review: ``,
      description:``,
      location:`london`,
      profilname:`mohhamed`
    },
    {
      name: `Man high sport puma t-shirt`,
      img1: `7.jpg`,
      img2:`77.jpg`,
      review: ``,
      description:``,
      location:`alger`,
      profilname:`leo`
    },
    {
      name: `football shoe`,
      img1: `8.jpg`,
      img2:`88.jpg`,
      review: ``,
      description:``,
      location:`mosta`,
      profilname:`luis`
    },
    {
      name: `under armor cap`,
      img1: `9.jpg`,
      img2:`99.jpg`,
      review: ``,
      description:``,
      location:`amizour`,
      profilname:`clix`
    },
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    
    <div className="App">
    
      <NavLink to="Showproduct"></NavLink>
      <Navbar></Navbar>
      <div className="yyy">
        <Windowbar></Windowbar>
      
      </div>
      <h2 className='sidename'> <HiShoppingBag/> &nbsp;&nbsp; Our products</h2>
      <div className="cont-card">

    
      <div className='slider'>
        <div className="slider-cont">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="product-card">
            
            <NavLink to={`/Showproduct/${d.img1}/${d.img2}/${d.name}/${d.location}`}><img src={d.img1}  className="product-image" /></NavLink>
            <div className="product-details">
              <h3 className="productname">{d.name}</h3>
              <div className="seller-info">
                <div><img src={d.img1} className="seller-profile-pic" /></div>
                <div className="seller-details">
                  <p className='profilname'>{d.profilname}</p>
                  <span className='profillocation'>{d.location}</span>
                </div>
              </div>
            </div>
          </div>
          ))}
          </Slider>
        </div>
        
      </div>
      
      </div>
      <h2 className='sidename'> <GrServices/> &nbsp;&nbsp; Our Services</h2>
      <div className="cont-card">

    
      <div className='slider'>
        <div className="slider-cont">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="product-card">
            
            <NavLink to={`/Showproduct/${d.img1}/${d.img2}/${d.name}/${d.location}`}><img src={d.img1}  className="product-image" /></NavLink>
            <div className="product-details">
              <h3 className="productname">{d.name}</h3>
              <div className="seller-info">
                <div><img src={d.img1} className="seller-profile-pic" /></div>
                <div className="seller-details">
                  <p className='profilname'>{d.profilname}</p>
                  <span className='profillocation'>{d.location}</span>
                </div>
              </div>
            </div>
          </div>
          ))}
          </Slider>
        </div>
        
      </div>
      
      </div>
      <div className="Contact">
        <ContactUs></ContactUs>



        
      </div>
      <div class="part1">
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <h3> Do you want to expose your Products or services ?</h3>
       <button className='accountbutton'onclick="fonction jsp()">CREAT AN ACCOUNT </button>
</div>



<div class="part2">
     <div class="list">
     <img className="logo2"src="/22.png" alt="winnsibha"></img>
        <p className='underlogo'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. </p>
     </div>
   
    <div class="list">
         <ul>
             <li class="titles"> company       </li>
              <li className='endinfo'> home      </li>
             <li className='endinfo'> products      </li>
             <li className='endinfo'> sevices       </li>
          </ul>
    </div>


    <div class="list">
      <ul>
          <li class="titles"> contact     </li>
           <li className='endinfo'>Why Win Nsibha?    </li>
          <li className='endinfo'> Partner with us      </li>
          <li className='endinfo'>FAQ's       </li>
          <li className='endinfo'>Blog      </li>
       </ul>
 </div>



 <div class="list">
  <ul>
      <li class="titles"> Meet Us      </li>
       <li className='endinfo'> +00 92 1234 56789    </li>
      <li className='endinfo'> info@travlog.com      </li>
      <li className='endinfo'>205. R Street, New York      </li>
      <li className='endinfo'>BD23200    </li>
   </ul>
</div>

</div>

      















      
    </div>
    
    
  );
}
export default Landingpage;



