import React from 'react';
import { Nav, NavbarItem, NavbarUl, NavbarLi, NavbarList } from './styled';

function Navbar() {
  return (
    <Nav>
      <NavbarItem>
        <p>Item 1</p>
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
