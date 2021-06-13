<<<<<<< HEAD
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

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer onClick={toggle}>
          <NavLogo to="about">NoTaTo</NavLogo>
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
=======
import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from "./NavbarElement";
import { animateScroll as scroll } from 'react-scroll';
const toggleHome=()=>{
    scroll.scrollToTop();
};
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>NoTaTo</NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars/>
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to ='about'>About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to ='discover'>Discover</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to ='services'>ToDo</NavLinks>
                       </NavItem>
                       <NavBtn>
                           <NavBtnLink to ='signup'>Sign-Up</NavBtnLink>
                       </NavBtn>
                       <NavBtn>
                         
                           <NavBtnLink to="/signin">Sign In</NavBtnLink>
                          
                       </NavBtn>
                   </NavMenu>
                
             </NavbarContainer>
        </Nav>
        </>
    )
}
>>>>>>> 078c8acdcad1cbca3458cc5a586686a8dedb520e

export default Navbar;
