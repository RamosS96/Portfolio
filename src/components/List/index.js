import styled from "styled-components";

export const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
`

export const ListLi = styled.li`
  display: flex;
  text-decoration: none;
  margin: 5px;
  height: 37px;
  align-items: center;
  justify-content: left;
`

export const ListBtn = styled.button`
  display: inline;
  font-family: Raleway;
  font-size: 1.5rem;
  border: 0;
  background: none;
  @media (max-width: 700px) {
    font-size: .75rem;
  }
`