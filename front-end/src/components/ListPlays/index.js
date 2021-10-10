import React from 'react';

import {
  Wrapper, Title, WrapperItens, WrapperImage, Image
} from './styles';

export const ListPlays = ({ title, itens }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <WrapperItens>
        {
          itens.map((item, index) => (
            <WrapperImage key={index}>
              <Image src={item.image} alt={''} />
            </WrapperImage>
          ))
        }
      </WrapperItens>
    </Wrapper>
  );
};
