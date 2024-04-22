import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './divs/Navbar.js';
import Windowbar from './divs/Windowbar';
import Searchbar from './divs/Searchbar';

import Slider from 'react-slick';
import './index.css';
import './card.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter ,Router ,Route, Link ,NavLink, Routes} from 'react-router-dom'
import Showproduct from './divs/Showproduct.js';
import { HiShoppingBag } from "react-icons/hi2";
import { GrServices } from "react-icons/gr";
import Showservices from './divs/Showservices';
import  { Component } from "react";
import ContactUs from './divs/ContactUs';
import './contact.css';
import './contact.css';
import './footer.css';
import {Image} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import { AiFillAliwangwang } from "react-icons/ai";




function Landingpage() {
  const data =[
    {
      name: `paris jackit`,
      img1: `cl2-removebg-preview.png`,
      img2:`55.jpg`,
      review: ``,
      description:``,
      location:`city122`,
      profilname:`mouaad`
    },
    {
      name: `messi t-shirt`,
      img1: `6-removebg-preview.png`,
      img2:`66.jpg`,
      review: ``,
      description:``,
      location:`london`,
      profilname:`mohhamed`
    },
    {
      name: `Man high sport puma t-shirt`,
      img1: `7-removebg-preview.png`,
      img2:`77.jpg`,
      review: ``,
      description:``,
      location:`alger`,
      profilname:`leo`
    },
    {
      name: `football shoe`,
      img1: `8-removebg-preview.png`,
      img2:`88.jpg`,
      review: ``,
      description:``,
      location:`mosta`,
      profilname:`luis`
    },
    {
      name: `under armor cap`,
      img1: `9-removebg-preview.png`,
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
    
      
      <Navbar></Navbar>
      <div className="yyy  ">
        <Windowbar></Windowbar>
      
      </div>
      <div><h1 className=' trend-text text-5xl text-left ml-12 mt-24  text-[23414b] flex' ><AiFillAliwangwang  className=' mr-6'/>Latest Looks</h1></div>
      <div className="max-w-[1500px] gap-8 grid grid-cols-12 grid-rows-2 px-8  mt-28  ">
    <Card className="col-span-12 sm:col-span-4 h-[700px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
        <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="pro6.jpg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[700px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="pro2.jpg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[700px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="pro8.jpg"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[500px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-2xl">Acme camera</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="pro11.jpg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[500px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="pro7.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src=".jpg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
  </div>
      <div className=' prob'><h2 className='sidename flex gap-2 items-center'> <HiShoppingBag/>  Our products</h2>
      <div className="cont-card">

    
      <div className='slider'>
        <div className="slider-cont">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="product-card bg-orange-50">
            
            <NavLink to={`/Showproduct/${d.img1}/${d.img2}/${d.name}/${d.location}`}><img src={d.img1}  className="product-image bg-orange-50 " /></NavLink>
            <div className="product-details">
              <h3 className="productname">{d.name}</h3>
              <div className="seller-info">
              <div><NavLink to={`/Profil`}><img src={d.img1} className="seller-profile-pic" /></NavLink></div>
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
      <h2 className='sidename flex gap-2 items-center'> <GrServices/>  Our Services</h2>
      <div className="cont-card">

    
      <div className='slider'>
        <div className="slider-cont">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="product-card shadow-xl  bg-orange-50">
            
            <NavLink to={`/Showservices/${d.img1}/${d.name}/${d.location}`}><img src={d.img1}  className="product-image  bg-orange-50" /></NavLink>
            <div className="product-details">
              <h3 className="productname">{d.name}</h3>
              <div className="seller-info">
                <div><NavLink to={`/Profil`}><img src={d.img1} className="seller-profile-pic" /></NavLink></div>
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
      
      </div></div>
      <div className="Contact mt-72">
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



