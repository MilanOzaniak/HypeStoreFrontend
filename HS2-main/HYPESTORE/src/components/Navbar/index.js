import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = ({toogle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>HYPESTORE</NavLogo>
          <MobileIcon onClick={toogle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/shoes'>Shoes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/clothing'>clothing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/accessories'>accessories</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/signup'>Signup</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/shoes'>AddProduct</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;