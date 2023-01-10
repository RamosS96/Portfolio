import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  background-image: url('./img/mainbkg.svg');
  background-position: top;
  background-size: cover
`

export const Section = styled.section`
  display: flex;
  width: ${ props => props.w || '100' }%;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`