import React from 'react';

import {
  Nav, Wrapper, Logo, Menu, MenuItem, MenuLink
} from './styles';

export const NavBar = () => {
  return (
    <Nav>
      <Wrapper>
        <Logo to={'/'}>Teatro Online</Logo>

        <Menu>
          <MenuItem>
            <MenuLink to={'/dashboard'}>Login / Cadastro</MenuLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Nav>
  );
};
