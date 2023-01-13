import React from 'react';
import { BannerDiv, BannerUl, BannerLi, BannerImg } from './styled';


function IconBanner() {
  return (
    <BannerDiv>
      <BannerUl>
        <BannerLi>
          <BannerImg src='./img/icons/react.png' alt='react' />

        </BannerLi>
        <BannerLi>
          <BannerImg src='./img/icons/js.png' alt='js' />

        </BannerLi>
        <BannerLi>
          <BannerImg src='./img/icons/html.png' alt='html5' />

        </BannerLi>
        <BannerLi>
          <BannerImg src='./img/icons/css.png' alt='css' />

        </BannerLi>
        <BannerLi>
          <BannerImg src='./img/icons/sql.png' alt='sql' />

        </BannerLi>
        <BannerLi>
          <BannerImg src='./img/icons/db.png' alt='db' />

        </BannerLi>
        <BannerLi>
          <BannerImg src='./img/icons/firebase.png' alt='firebase' />

        </BannerLi>
        <BannerLi>
          <BannerImg src='./img/icons/dns.png' alt='dns' />

        </BannerLi>
        <BannerLi>
          <BannerImg src='./img/icons/domain.png' alt='domain' />

        </BannerLi>

      </BannerUl>
    </BannerDiv>
  );
}

export default IconBanner;