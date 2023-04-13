import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";





const Navbar = ({toogle}) => {
  const currentUser = localStorage.getItem("userName");
  const [isVisible] = useState(currentUser === null);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleLogOut(){
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
            HYPESTORE
        </Link>
        <div className='menu-icon' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/Shoes' className='nav-links'onClick={toggleMenu}>Topánky</Link>
          </li>
          <li className='nav-item'>
            <Link to='/clothing' className='nav-links'onClick={toggleMenu} > Oblečenie</Link>
          </li>
          <li className='nav-item'>
            <Link to='/accessories' className='nav-links'onClick={toggleMenu}> Doplnky</Link>
          </li>
          <div className='dropdown'>
            <li className='dropbtn' style={{display: isVisible? 'block' : 'none'}}>
              <Link className='dropbtn' to='/signup'>Log in</Link>
            </li>
            <div className='drop' onClick={toggleMenu}> 
              <a className="dropbtn" >{currentUser}</a>
              <div className='dropdown-content' onClick={toggleMenu}>
                <Link to={`/currentUser/${currentUser}`}>Profile</Link>
                <Link to={`/Options/${currentUser}`}>Options</Link>
                <Link to='/' onClick={handleLogOut}>Log Out</Link>
              </div>
            </div>
          </div>
        </ul>

        <div className='addproduct-button' style={{display: isVisible? 'none' : 'block'}}>
          <Link to={'/createitempage'} className='btn'>Pridať&nbsp;produkt</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;