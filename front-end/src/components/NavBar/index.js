import React, { useState, useEffect } from 'react';

import { history } from '../../services';

import {
  Nav, Wrapper, Logo, Menu, MenuItem, MenuLink
} from './styles';

export const NavBar = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const userLogged = localStorage.getItem('@logged');

    if(userLogged) {
      setLogged(JSON.parse(userLogged));
    } else {
      setLogged(false);
    }
  }, [logged]);

  const handleLoggedOut = () => {
    localStorage.removeItem('@logged');
    history.push('/');
    setLogged(false);
  }

  return (
    <Nav>
      <Wrapper>
        <Logo
          onClick={() => history.push('/')}
        >
          Teatro Online
        </Logo>

        <Menu>
          {
            logged &&
            <MenuItem>
              <MenuLink
                onClick={() => history.push('/dashboard')}
              >
                Peças
              </MenuLink>
            </MenuItem>
          }
          {
            !logged
            ? <MenuItem>
                <MenuLink
                  onClick={() => history.push('/signin')}
                >
                  Login / Cadastro
                </MenuLink>
              </MenuItem>
            : <MenuItem>
                <MenuLink
                  onClick={() => history.push('/profile')}
                >
                  Perfil
                </MenuLink>
              </MenuItem>
          }
          {
            logged &&
            <MenuItem>
              <MenuLink
                onClick={() => handleLoggedOut()}
              >
                Sair
              </MenuLink>
            </MenuItem>
          }
        </Menu>
      </Wrapper>
    </Nav>
  );
};
