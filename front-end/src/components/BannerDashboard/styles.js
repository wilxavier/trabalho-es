import styled from 'styled-components';
import Modal from 'react-modal';
import { IoIosClose } from "react-icons/io";

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

export const WrapperModal = styled(Modal)`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
`;

export const ModalFull = styled.div`
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4.25rem;
  background: #232A34;
  border-radius: 4px;
  margin: 2rem 0;
`;

export const TitleModal = styled.p`
  font-size: 1.875rem;
  color: #fff;
  margin-bottom: 2rem;
`;

export const ButtonAdd = styled.button`
  font-size: 1rem;
  padding: 1rem 0;
  color: #fff;
  border-radius: 4px;
  background: #B3354A;
  margin: 2.5rem 0 0;

  &:hover {
    background: #D22A46;
    transition: 0.3s;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 4px;
  position: absolute;
`;

export const WrapperIconDelete = styled(Icon)`
  background: #B3354A;
  top: 2.4rem;
  right: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #D22A46;
    transition: 0.3s;
  }
`;

export const IconDelete = styled(IoIosClose)`
  height: 1.75rem;
  width: 1.75rem;
  color: #fff;
`;
