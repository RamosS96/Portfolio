import styled from "styled-components";

export const Title1 = styled.h1`
display: flex;
text-align: center;
justify-content: center;
width: auto;
background-color: rgba(255,255,255,.4);
background-clip: text;
font-family: Fira;
font-size: 3.5rem;
font-weight: 900;
`

export const Title2 = styled.h2`
display: flex;
width: 100%;
font-family: Noticia;
font-size: 2rem;
`
export const Title3 = styled.h3`
display: flex;
width: 100%;
font-family: Noticia;
font-size: 1.5rem;
margin: 0;
padding: 0px 10px
`

export const TitleSpan = styled.span`
  display: inline;
  @media (max-width: 700px) {
    display: none;
  }
`