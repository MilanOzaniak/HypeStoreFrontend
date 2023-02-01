import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';



const Navbar = ({toogle}) => {
  const currentUser = localStorage.getItem("userName");
  const [isVisible, setIsVisible] = useState(currentUser === null);

  const handleLogOut = event =>{
    localStorage.clear();
    window.location.reload(false);
  }



  return (
    <>
      <div className='nav' >
        <div className='NavbarContainer'>
          <Link className='HomeLink' to='/'>HYPESTORE</Link>
          <div className='MobileIcon' onClick={toogle}>
            <FaBars/>
          </div> 
          <ul className='NavMenu'>
            <li className='NavItem'>
              <Link className='NavLinks' to='/shoes'>Shoes</Link>
            </li>
            <li className='NavItem'>
              <Link className='NavLinks' to='/clothing'>Clothing</Link>
            </li>
            <li className='NavItem'>
              <Link className='NavLinks' to='/accessories'>Accessories</Link>
            </li>
          </ul>

          <nav className='NavBtn'>
            <Link className='NavBtnLink' to='/createitempage'>Add product</Link>
          </nav>
            
          <div className="dropdown">
            <li className='dropbtn' style={{display: isVisible? 'block' : 'none'}}>
              <Link className='NavLinks' to='/signup'>Log in</Link>
            </li>
            <div className='drop'>
              <div style={{display: isVisible? 'none' : 'flex'}} >
                <a className="dropbtn">{currentUser}</a>
              </div>

              <div className="dropdown-content">
                <Link to={`/currentUser/${currentUser}`} >Profile</Link>
                <Link onClick={handleLogOut}>Log Out</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;