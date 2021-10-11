import styled from 'styled-components';
import { Wrapper as Container } from '../../components/Container';
import { IoIosClose } from "react-icons/io";
import Modal from 'react-modal';

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  padding-top: 3.75rem;
  background: #fff;
`;

export const WrapperLeft = styled.div`
  min-width: 40rem;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 55.625rem;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const WrapperInformation = styled.div`
  margin: 0.5rem 0 3.75rem;
`;

export const Name = styled.p`
  color: #232A34;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 3.75rem;
`;

export const Information = styled.p`
  font-size: 2.125rem;
  color: #232A34;
  margin-bottom: 0.5rem;
`;

export const InformationValue = styled.span`
  font-weight: bold;
  margin-left: 2rem;
`;

export const WrapperRight = styled.div`
  width: 100%;
  padding: 0 3.75rem;
  height: 50vh;
`

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

export const WrapperPlay = styled.div`
  padding: 1rem 1rem 2rem;
  background: #232A34;
  border-radius: 4px;
  margin: 1.5rem 0 3.75rem;
`;

export const PlayHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #fff;
`;

export const PlayInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PlayName = styled.div`
  color: #fff;
  font-size: 1.125rem;
`;

export const PlayCapacity = styled.div`
  color: #fff;
  font-size: 1.125rem;
  margin-left: 2rem;
`;

export const ContentPlay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 1.5rem 1rem 0;
`;

export const WrapperSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  padding: 1rem;
`;

export const SessionInformation = styled.p`
  &+p {
    margin-top: 0.5rem;
  }
`;

export const SessionValue = styled.span`
  font-weight: bold;
  margin-left: 0.5rem;
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

export const ButtonAddModal = styled.button`
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

export const IconModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 4px;
  position: absolute;
`;

export const WrapperIconDeleteModal = styled(IconModal)`
  background: #B3354A;
  top: 2.4rem;
  right: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #D22A46;
    transition: 0.3s;
  }
`;

export const IconDeleteModal = styled(IoIosClose)`
  height: 1.75rem;
  width: 1.75rem;
  color: #fff;
`;
