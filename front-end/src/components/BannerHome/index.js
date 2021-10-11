import React from 'react';

import { history } from '../../services';

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
            <Button
              onClick={() => history.push('/buyticket')}
            >
              Sessões
            </Button>
          </DescriptionImage>
      </WrapperImage>
    </Wrapper>
  );
};
