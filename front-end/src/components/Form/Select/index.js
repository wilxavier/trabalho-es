import React, { useState } from 'react';

import { Wrapper, Item } from './styles';

export const Select = ({ itens, value, onChange }) => {
  const [select, setSelect] = useState('ator');

  return (
    <Wrapper
      value={value}
      onChange={onChange}
    >
      {
        itens.map((item, index) => (
          <Item key={index} value={item.value}>{item.value}</Item>
        ))
      }
    </Wrapper>
  );
};
