import styled from 'styled-components';
import { Wrapper as Container } from '../Container';

export const Wrapper = styled(Container)`
  padding-bottom: 3.75rem;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  color: #232A34;
  margin-bottom: 1rem;
`;

export const WrapperItens = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const WrapperImage = styled.div`
  height: 18.75rem;
  min-width: 15.9375rem;
  max-width: 15.9375rem;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    transition: all 0.3s ease-out;
  }

  &+div {
    margin-left: 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
