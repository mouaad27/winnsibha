import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Navbar from './divs/Navbar.js';
import Windowbar from './divs/Windowbar';
import Searchbar from './divs/Searchbar';
import Showservices from './divs/Showservices';
import Card from './divs/Card.js';
import Slider from 'react-slick';
import './card.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter ,Router ,Route, Link ,NavLink, Routes} from 'react-router-dom'
import Showproduct from './divs/Showproduct.js';
import Landingpage from '../src/Landingpage.js';
import Singup from './divs/Singup.js';
import Profil from './divs/Profil.js';
function App() {
  
  return (
    
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage />}/>
        <Route path="/Showproduct/:images1?/:images2?/:productname?/:location?/:images3?/:images4?/:desc?/" element={<Showproduct/>}/>
        <Route path="/Singup" element={<Singup/>}/>
        <Route path="/Showservices/:images1?/:productname?/:location?/:desc?/" element={<Showservices/>}/>
        <Route path="/Profil" element={<Profil/>}/>
      </Routes>
      
</BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;