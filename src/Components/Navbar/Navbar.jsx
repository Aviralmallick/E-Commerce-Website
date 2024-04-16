import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose, IoHome, IoHomeOutline } from 'react-icons/io5';
import { FaLaptop, FaShoppingCart, FaTags } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router';
import { FaHouseChimney } from 'react-icons/fa6';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
        <div className='parentnav'>
      <h1 id='logo'>EVERYthing</h1>
    
      <div className="navicons">
        <a href="/" className='childnavicons'><FaHouseChimney />Home</a>
        <div  onClick={()=>{navigate(`/products/Laptops`)}} href="/" className='childnavicons'><FaLaptop /> Laptops</div>
        <a href="/categories" className='childnavicons'><FaTags /> Categories</a>
        <a href="/cart" className='childnavicons'><FaShoppingCart /> Cart</a>
      
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
          
           <FaBars />
      </div>
      </div>
      {showMenu && (
        <div className="overlay">
          <div className="dialog">
            <div className="close-icon" onClick={toggleMenu}><IoClose /></div>
            <a href="/" className='childnavicons'><FaHouseChimney /> Home</a>
            <a href="/" className='childnavicons'><FaLaptop /> Laptops</a>
            <a href="/categories" className='childnavicons'><FaTags /> Categories</a>
            <a href="/cart" className='childnavicons'><FaShoppingCart /> Cart</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
