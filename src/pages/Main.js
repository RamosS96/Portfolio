import React, { useEffect, useState } from 'react';
import { Section, MainWrapper, Wrapper } from '../components/Wrapper';
import { Title1, Title2, TitleSpan } from '../components/Title';
import { MainCard } from '../components/Maincard';

function Main() {
  const [info, setInfo] = useState([])
  const lang = 'ES'

  useEffect(()=> {
    setInfo({aboutES:"Acerca de Mi", aboutEN:"About me"})
  },[])
  return (
    <>
    <MainWrapper>
      <Wrapper>
      <Title1>Sebastian Ramos</Title1>
      <Title1>FrontEnd Web Development <TitleSpan role="img" aria-label="title-enoji">💻</TitleSpan></Title1>
      <Section w='50'>
        <MainCard bkgimg='"./img/wireframes.jpg"'>
        <Title2>{(lang === 'ES' ? info.aboutES : info.aboutEN)}</Title2>
        </MainCard>
        </Section>
      <Section w='50'>asdasdassda</Section>
      </Wrapper>
    </MainWrapper>
    </>
  );
}

export default Main;