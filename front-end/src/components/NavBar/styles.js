import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper as Container } from '../Container';

export const Nav = styled.nav`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  background: #232A34;
  font-size: 1.2rem;
`;

export const Wrapper = styled(Container)`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  display: flex;
  cursor: pointer;
  font-size: 2.5rem;
  align-items: center;
  color: #fff;
  font-family: 'Dancing Script', sans-serif;
`;

export const Menu = styled.ul``;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid #17C951;
    transition: 0.3s;
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 1.25rem;
`;
