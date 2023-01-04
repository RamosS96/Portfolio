import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Section = styled.section`
  display: flex;
  width: ${ props => props.w || '100' }%;
  justify-content: center;
  align-items: center;
`