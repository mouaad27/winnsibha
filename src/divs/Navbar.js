import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import {Image} from "@nextui-org/react";
import {Badge, Button} from "@nextui-org/react";
import "../index.css";
import Fav from "../divs/Fav.js";
import { useCount } from '../divs/Fav.js';
import { useState } from "react";


const Navbar = ({ color, backgroundStyle }) => {
  const count = useCount();
  const [query,setQuery] = useState('')
  const count1=count

  let handleSubmit = async () => {
    console.log('sending request');
    const result = await fetch(
      "http://127.0.0.1:8000/api/search?query=" + query,
      {
        method: "GET", 
            mode:"cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data =  await result.json();
    let products = data['products']
    console.log(products);
    if(result.status == 200){
      console.log("good search in ");
    }
   else{
     console.log('something went wrong');
   } 
  };
 
    return ( 
        <nav className="Navbar " style={{ backgroundColor: color, ...backgroundStyle}}>
          <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <img className="logo"src="/2.png" alt="winnsibha"></img>
            <div className="elem">
                <a href="/" className="sa">home</a>
                <NavLink
                      to={`/Products`}
                    ><a href="/" className="sa">products</a></NavLink>
                <a href="/" className="sa">services</a>
                <NavLink to="/Singup" className={"sa hover:bg-red-500"}>sign up</NavLink>
                </div>
               <div className="likeser">
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>

<form action="">
  <input className="input6" type="search" required value={query} onChange={
    (e)=>{
      setQuery(e.target.value) 
    }
  }  onSubmit={()=>handleSubmit()}></input>
  <i  onClick={()=>handleSubmit()}  class="fa fa-search"></i>
  <a href="javascript:void(0)" id="clear-btn"></a>
</form>

                
             
<Badge content={count1} shape="circle" color="red" className="mr-10 " >

      <Button
        radius="full"
        isIconOnly
        aria-label="more than 99 notifications"
        variant="light"
      >
        <NavLink to={`/Fav`} className="rounded-full bg-transparent"><FaHeart size={24} color="white" /></NavLink>
      </Button>
      
    </Badge>

               </div>
               
        </nav> 
        
    );
}
export default Navbar;
