import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  z-index: 999999;
  min-width: 100%;
  width: 100%;
  position: fixed;
  padding: 2px 0px;
  top: 0;
  height: 1rem;
  background: rgb(2,0,36);
  background: linear-gradient(338deg, rgba(2,0,36,1) 10%, rgba(9,9,121,1) 48%, rgba(0,212,255,1) 76%);
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
  color: white;
  font-family: NunitoBold;
  &:hover{
    text-decoration: none;
    
  }
`  