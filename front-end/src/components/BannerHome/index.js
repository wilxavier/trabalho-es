import React from 'react';

import {
  Wrapper, WrapperImage, Image, DescriptionImage, Title, Description, Button
} from './styles';

export const Banner = ({ image, title, description }) => {
  return (
    <Wrapper>
      <WrapperImage>
          <Image src={image} alt={''} />

          <DescriptionImage>
            <Title>{title}</Title>
            <Description>
              {description}
            </Description>
            <Button>Sessões</Button>
          </DescriptionImage>
      </WrapperImage>
    </Wrapper>
  );
};
