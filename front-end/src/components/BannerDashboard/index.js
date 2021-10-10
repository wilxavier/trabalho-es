import React from 'react';

import {
  Wrapper, WrapperBanner, DescriptionBanner, Title, Button
} from './styles';

export const Banner = ({ total }) => {
  return (
    <Wrapper>
      <WrapperBanner>
          <DescriptionBanner>
            <Title>VOCÊ TEM {total} PEÇAS CADASTRADAS</Title>
            <Button>Cadastrar nova</Button>
          </DescriptionBanner>
      </WrapperBanner>
    </Wrapper>
  );
};
