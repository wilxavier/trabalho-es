import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #404955;
  margin-bottom: 3.75rem;

  @media screen and (min-width: 1920px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const WrapperBanner = styled.div`
  height: 23.4375rem;
  position: relative;

  @media screen and (min-width: 1920px) {
    width: 120rem;
  }
`;

export const DescriptionBanner = styled.div`
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
  margin-bottom: 3.75rem;
`;

export const Button = styled.button`
  padding: 1rem 1.5625rem;
  background: #fff;
  color: #232A34;
  font-size: 1.375rem;
  max-width: 14rem;
  border-radius: 4px;

  &:hover {
    background: #17C951;
    color: #fff;
    transition: 0.3s;
  }
`;
