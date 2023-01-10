import styled from "styled-components";
import { colors } from "../../utils/colors/colors";

export const Nav = styled.nav`
  display: flex;
  z-index: 999999;
  min-width: 100%;
  width: 100%;
  position: fixed;
  padding: 2px 0px;
  top: 0;
  height: 1rem;
  background-color: ${colors.black};
  justify-content: space-between;
  align-items: center;
  height: 50px;
`

export const NavbarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const NavbarUl = styled.ul`
  align-items: center;
  display: block;
  justify-content: right;
  margin-right: 0px;
  margin-left: 0px;
  padding: 0px;
  text-decoration: none;
  width: fit-content;
`
export const NavbarLi = styled.li`
  display: inline-block;
  text-decoration: none;
  padding: 0px 5px;
  margin: 0px 10px;
  transition-duration: .4s;
  &:hover {
    transform: scale(1.25,1.25 );
    transition-duration: .7s;
    
  }
  `

export const NavbarList = styled.span`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${colors.white};
  font-family: NunitoBold;
  &:hover{
    text-decoration: none;
    color: ${colors.orange};
  }
`  