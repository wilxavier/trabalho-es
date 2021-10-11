import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4.25rem;
  background: #232A34;
  border-radius: 4px;
  margin: 2rem 0;
`;

export const Title = styled.p`
  font-size: 1.875rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1rem;
  padding: 1rem 0;
  color: #fff;
  border-radius: 4px;
`;

export const ButtonSignUp = styled(Button)`
  background: transparent;
`;

export const ButtonSignIn = styled(Button)`
  background: #B3354A;
  margin: 2.5rem 0;

  &:hover {
    background: #D22A46;
    transition: 0.3s;
  }
`;
