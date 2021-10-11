import React, { useState } from 'react';

import { Wrapper, Item } from './styles';

export const Select = ({ itens }) => {
  const [select, setSelect] = useState('ator');

  return (
    <Wrapper
      value={select}
      onChange={(item) => setSelect(item.target.value)}
    >
      {
        itens.map((item, index) => (
          <Item key={index} value={item.value}>{item.value}</Item>
        ))
      }
    </Wrapper>
  );
};
