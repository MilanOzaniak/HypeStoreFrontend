import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #141215;
  height: 80px;
  display: flex;

  display: flex;
  justify-content: center;
  align-items: 1rem;
  position: sticky;
  top: 0;
  padding: 0.5rem calc((100vw - 1000px) / 8);
  z-index: 10;

  @media screen and (max-width: 960px) {
   transition: 0.8s all ease;
 }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
max-width: 2100px;
width: 100%;
height: 80px;
z-index: 1;
padding: 0 0px;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 2rem;
display: flex;
align-items: center;
padding-top: 0px;
padding-right: 30px;
padding-bottom: 15px;
padding-left: 30px;

font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
  display: block;
  top: 0;
  right: 0;
  transform: translate(-100%, 21%);
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
}
`;

export const NavMenu = styled.ul`
  display: flex;
  align-item: center;
  list-style: none;
  text-align: center;



  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-item: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  padding-top: 22px;
  padding-right: 10px;
  padding-bottom: 15px;
  padding-left: 30px;

  &.active{
    border-botton: 3px solid #00b4d8;
  }

`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  padding-top: 0px;
    padding-right: 30px;
    padding-bottom: 15px;
    padding-left: 30px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: #00b4d8;

  

`;
