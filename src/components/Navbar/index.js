import React from 'react';
import { Nav, NavbarItem, NavbarUl, NavbarLi, NavbarList } from './styled';
import {ReactComponent as ReactLogo} from '../../img/icons/react.svg';
import {ReactComponent as CodeLogo} from '../../img/icons/code.svg';

function Navbar() {
  return (
    <Nav>
      <NavbarItem>
      <NavbarList><CodeLogo fill='white' width='50px' height='50px'/></NavbarList>
      <NavbarList><ReactLogo fill='white' width='50px' height='50px'/></NavbarList>
      </NavbarItem>
      <NavbarItem>
        <NavbarUl>
          <NavbarLi>
           <NavbarList> About</NavbarList>
          </NavbarLi>
          <NavbarLi>
          <NavbarList>Portfolio</NavbarList>
          </NavbarLi>
          <NavbarLi>
          <NavbarList>Contact</NavbarList>
          </NavbarLi>
        </NavbarUl>
      </NavbarItem>
    </Nav>
  );
}

export default Navbar;
