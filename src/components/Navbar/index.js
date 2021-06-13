import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
import { animateScroll as scroll } from 'react-scroll';
const toggleHome=()=>{
    scroll.scrollToTop();
};
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer onClick={toggle}>
           <NavLogo to='/' onClick={toggleHome}>NoTaTo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">ToDo</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign-Up</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
