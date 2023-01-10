import React, { useEffect, useState } from 'react';
import { Section, MainWrapper, Wrapper } from '../components/Wrapper';
import { Title1, Title2, TitleSpan } from '../components/Title';
import { MainCard } from '../components/Maincard';
import { infoSR } from '../utils/about';
import { LangCheckbox } from '../components/LangSelect';

function Main() {
  const [info, setInfo] = useState([])
  const lang = 'ES'

  useEffect(()=> {
    setInfo(infoSR)
  },[])
  return (
    <>
    <MainWrapper>
      <LangCheckbox/>
      <Wrapper>
      <Title1 key='owner'>Sebastian Ramos</Title1>
      <Title1 key='title'>FrontEnd Web Development <TitleSpan role="img" aria-label="title-enoji">💻</TitleSpan></Title1>
      </Wrapper>
      <Section w='50'>
        <MainCard bkgimg='"./img/wireframes.jpg"'>
        <Title2>{(lang === 'ES' ? info.titleES : info.titleEN)}</Title2>
        </MainCard>
        </Section>
      <Section w='50'>asdasdassda</Section>
      
    </MainWrapper>
    </>
  );
}

export default Main;