import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper as Container } from '../Container';

export const FooterContainer = styled.div`
  background-color: #232A34;
  padding: 2.3125rem 0;
`;

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 2.3125rem;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  font-size: 0.875rem;

  &:hover {
    color: #17C951;
    transition: 0.3s;
  }
`;
