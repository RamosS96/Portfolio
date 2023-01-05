import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 65px;
`

export const Section = styled.section`
  display: flex;
  width: ${ props => props.w || '100' }%;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`