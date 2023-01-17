import styled from "styled-components";

export const MainCard = styled.div`
    background: url(${prop => prop.bkgimg ? prop.bkgimg : ''});
    background-size: cover;
    margin: 20px;
    padding: 10px
`

export const Card = styled.div`
    background: url(${prop => prop.bkgimg ? prop.bkgimg : ''});
    background-size: cover;
    margin: 5px 0px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
`