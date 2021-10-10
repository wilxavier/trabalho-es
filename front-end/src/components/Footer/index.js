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
          <FooterLink to={'/'}>Perguntas frequentes</FooterLink>
          <FooterLink to={'/'}>Central de ajuda</FooterLink>
          <FooterLink to={'/'}>Termos de uso</FooterLink>
          <FooterLink to={'/'}>Privacidade</FooterLink>
        </LinksWrapper>
      </Wrapper>
    </FooterContainer>
  );
};
