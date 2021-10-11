import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3.75rem 0;
  background: #fff;
`;

export const WrapperInformation = styled.div`
  width: 100%;
  max-width: 65rem;
`;

export const WrapperHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #232A34;
  padding-bottom: 5px;
`;

export const Title = styled.p`
  font-size: 2.125rem;
  color: #232A34;
`;

const ButtonSmall = styled.button`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  color: #fff;
  border-radius: 4px;
`;

export const ButtonDelete = styled(ButtonSmall)`
  background: #B3354A;

  &:hover {
    background: #D22A46;
    transition: 0.3s;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export const InformationLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InformationLabel = styled.p`
  width: 16.875rem;
  color: #232A34;
  font-size: 1rem;
`;

export const InformationValue = styled(InformationLabel)`
  font-weight: bold;
`;

export const ButtonEdit = styled(ButtonSmall)`
  background: #919AA3;

  &:hover {
    background: #7D848A;
    transition: 0.3s;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  font-size: 1rem;
  padding: 1rem 0;
  color: #fff;
  border-radius: 4px;
  background: #B3354A;
  margin: 3.75rem 7.5rem;

  &:hover {
    background: #D22A46;
    transition: 0.3s;
  }
`;
