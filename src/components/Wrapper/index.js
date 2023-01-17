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
  background-size: 100% ;
  background-repeat: no-repeat;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: ${ props => props.w || '100' }%;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const BkgGrey = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 10px 10px;
  margin: 10px 20px;
  max-width: 100%;
  background-color: rgba(183, 183, 183, 0.38);
`