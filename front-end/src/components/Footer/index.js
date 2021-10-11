import React from 'react';

import {
  FooterContainer, Wrapper, Title, LinksWrapper, FooterLink
} from './styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Title>Dúvidas? Ligue 0800-000-0000</Title>

        <LinksWrapper>
          <FooterLink>Perguntas frequentes</FooterLink>
          <FooterLink>Central de ajuda</FooterLink>
          <FooterLink>Termos de uso</FooterLink>
          <FooterLink>Privacidade</FooterLink>
        </LinksWrapper>
      </Wrapper>
    </FooterContainer>
  );
};
