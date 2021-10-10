import styled from 'styled-components';
import { Wrapper as Container } from '../Container';

export const Wrapper = styled.div`
  margin-bottom: 3.75rem;

  @media screen and (min-width: 1920px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 40.3125rem;
  object-fit: cover;
  position: relative;

  @media screen and (min-width: 1920px) {
    max-width: 120rem;
    padding: 0 3.125rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const DescriptionImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  height: 100%;
  padding-left: 3.75rem;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 1.6875rem;
  margin: 3.75rem 0 2.125rem;
  max-width: 38.75rem;
`;

export const Button = styled.button`
  padding: 1rem 1.5625rem;
  background: #fff;
  color: #232A34;
  font-size: 1.375rem;
  max-width: 9rem;
  border-radius: 4px;

  &:hover {
    background: #17C951;
    color: #fff;
    transition: 0.3s;
  }
`;
