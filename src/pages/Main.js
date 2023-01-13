import React, { useEffect, useState } from 'react';
import { Section, MainWrapper, Wrapper, BkgBlue } from '../components/Wrapper';
import { Title1, Title2, Title3, TitleSpan } from '../components/Title';
import { MainCard, Card } from '../components/Maincard';
import { infoSR } from '../utils/about';
import { Paragraph } from '../components/Paragraphs';
import { LangBtn, LangBox } from '../components/LangSelect';
import { ListLi, ListBtn, ListUl } from '../components/List';
import IconBanner from '../components/Iconbanner';

function Main() {
  const [info, setInfo] = useState([])
  const [lang, setLang] = useState(false)
  const [selectedTech, setTech] = useState('')

  const handleLang = () => {
    setLang(!lang)
  }

  const handleTech = (tech) => {
    setTech(tech)
  }

  useEffect(() => {
    setInfo(infoSR);
    
  }, [lang])

  return (
    <>
      <MainWrapper>
        <LangBox>

          {(lang) ? <LangBtn onClick={handleLang}>ES</LangBtn> : <LangBtn onClick={handleLang}>EN</LangBtn>}
        </LangBox>
        <Wrapper>
          <Title1 key='owner'>Sebastian Ramos</Title1>
          <Title1 key='title'>FrontEnd Web Development <TitleSpan role="img" aria-label="title-enoji">💻</TitleSpan></Title1>
        </Wrapper>
        <Section w='100'>
          <MainCard bkgimg='"./img/wireframes.jpg"'>
            <Title2>{(lang === true ? info.titleES : info.titleEN)}</Title2>
            <Paragraph>{(lang === true ? info.aboutES : info.aboutEN)}</Paragraph>
          </MainCard>
        </Section>
        <Section w='50'>
          <Wrapper>
            <BkgBlue>
              <Card>
                <Title3>{lang ? 'Tecnologías' : 'Technologies'}</Title3>
                <IconBanner />
                <ListUl>
                  {infoSR.tech.map(d => <ListLi key={d}><ListBtn onClick={()=> {console.log("clicked")}}>{d}</ListBtn></ListLi>)}
                </ListUl>
              </Card>
            </BkgBlue>
          </Wrapper>
        </Section>
        <Section w='50'>
          asdasdassda
        </Section>
      </MainWrapper>
    </>
  );
}

export default Main;