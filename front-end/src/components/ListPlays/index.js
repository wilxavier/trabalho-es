import React from 'react';

import { history } from '../../services';

import {
  Wrapper, Title, WrapperItens, WrapperImage, Image
} from './styles';

export const ListPlays = ({ title, itens, edit }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <WrapperItens>
        {
          itens.map((item, index) => (
            <WrapperImage
              onClick={() => !edit ? history.push('/buyticket') : history.push('/editplay')}
              key={index}
            >
              <Image src={item.image} alt={''} />
            </WrapperImage>
          ))
        }
      </WrapperItens>
    </Wrapper>
  );
};
