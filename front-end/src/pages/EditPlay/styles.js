import styled from 'styled-components';
import { Wrapper as Container } from '../../components/Container';
import { IoIosAddCircle, IoIosClose, IoMdCreate } from "react-icons/io";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  background: #fff;
  padding-top: 3.75rem;
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

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0.5rem 0 3.75rem;
`;

const ButtonBig = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 1rem 0;
  color: #fff;
  border-radius: 4px;

  &+button {
    margin-left: 0.75rem;
  }
`;

export const ButtonEdit = styled(ButtonBig)`
  background: #919AA3;

  &:hover {
    background: #7D848A;
    transition: 0.3s;
  }
`;

export const ButtonDelete = styled(ButtonBig)`
  background: #B3354A;

  &:hover {
    background: #D22A46;
    transition: 0.3s;
  }
`;

export const WrapperInformation = styled.div`
  margin-bottom: 3.75rem;
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

const ButtonSmall = styled.button`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  color: #fff;
  border-radius: 4px;

  &+button {
    margin-left: 1rem;
  }
`;

export const ButtonAdd = styled(ButtonSmall)`
  background: #17C951;

  &:hover {
    background: #0F9A3D;
    transition: 0.3s;
  }
`;

export const ButtonDeleteSmalll = styled(ButtonSmall)`
  background: #B3354A;

  &:hover {
    background: #D22A46;
    transition: 0.3s;
  }
`;

export const ButtonEditSmalll = styled(ButtonSmall)`
  background: #919AA3;

  &:hover {
    background: #7D848A;
    transition: 0.3s;
  }
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


export const PlayAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentPlay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 1.5rem 1rem 0;
`;

export const AddNewPlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 1rem 0;
  border-radius: 4px;
  cursor: pointer;
`;

export const IconPlus = styled(IoIosAddCircle)`
  color: #17C951;
  height: 3.125rem;
  width: 3.125rem;
`;

export const AddLabel = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const WrapperSession = styled(AddNewPlay)`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  position: relative;
  cursor: auto;
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

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 0.875rem;
  position: absolute;
`;

export const IconDelete = styled(IoIosClose)`
  height: 1.75rem;
  width: 1.75rem;
  color: #fff;
`;

export const IconEdit = styled(IoMdCreate)`
  color: #fff;
`;

export const WrapperIconDelete = styled(Icon)`
  background: #B3354A;
  top: -0.5rem;
  right: -0.5rem;
  cursor: pointer;

  &:hover {
    background: #D22A46;
    transition: 0.3s;
  }
`;

export const WrapperIconEdit = styled(Icon)`
  background: #919AA3;
  bottom: -0.5rem;
  right: -0.5rem;
  cursor: pointer;

  &:hover {
    background: #7D848A;
    transition: 0.3s;
  }
`;
