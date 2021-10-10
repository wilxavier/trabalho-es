import React from 'react';

import {
  Wrapper, WrapperImage, Image, DescriptionImage, Title, Description, Button
} from './styles';

export const Banner = ({ image }) => {
  return (
    <Wrapper>
      <WrapperImage>
          <Image src={image} alt={''} />

          <DescriptionImage>
            <Title>O GOLPE DO AMOR</Title>
            <Description>
              Quando o amor é distorcido até se transformar em manipulação, tudo pode acontecer. Até mesmo um assassinato.
            </Description>
            <Button>Sessões</Button>
          </DescriptionImage>
      </WrapperImage>
    </Wrapper>
  );
};
