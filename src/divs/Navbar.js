import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import {Image} from "@nextui-org/react";
import {Badge, Button} from "@nextui-org/react";
import "../index.css";


const Navbar = () => {
 
    return ( 
        <nav className="Navbar">
          <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <img className="logo"src="/2.png" alt="winnsibha"></img>
            <div className="elem">
                <a href="/" className="sa">home</a>
                <a href="/" className="sa">products</a>
                <a href="/" className="sa">services</a>
                <NavLink to="/Singup" className={"sa hover:bg-red-500"}>sign up</NavLink>
                </div>
               <div className="likeser">
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>

<form action="">
  <input className="input6" type="search" required></input>
  <i class="fa fa-search"></i>
  <a href="javascript:void(0)" id="clear-btn"></a>
</form>

<Badge content="95+" shape="circle" color="red" className="mr-10" >
      <Button
        radius="full"
        isIconOnly
        aria-label="more than 99 notifications"
        variant="light"
      >
        <FaHeart size={24} color="white" />
      </Button>
    </Badge>

               </div>
               
        </nav> 
        
    );
}
export default Navbar;
