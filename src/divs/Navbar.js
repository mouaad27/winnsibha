import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
    return ( 
        <nav className="Navbar">
          <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <img className="logo"src="/2.png" alt="winnsibha"></img>
            <div className="elem">
                <a href="/" className="sa">home</a>
                <a href="/" className="sa">products</a>
                <a href="/" className="sa">services</a>
                <a href="/" className="sa">sign up</a>
                </div>
               <div className="likeser">
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>

<form action="">
  <input className="input6" type="search" required></input>
  <i class="fa fa-search"></i>
  <a href="javascript:void(0)" id="clear-btn"></a>
</form>

<button class="heart-btn">
  <FaHeart />

  
</button>
               </div>
               
        </nav> 
        
    );
}
export default Navbar;
