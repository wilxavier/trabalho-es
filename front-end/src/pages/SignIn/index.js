import React from 'react';

import { NavBar } from '../../components/NavBar';
import { Input } from '../../components/Form/Input';

import { Wrapper, Form, Title, ButtonSignIn, ButtonSignUp } from './styles';

export const SignInPage = ({ history }) => {

  const handleLogin = () => {
    localStorage.setItem('@logged', JSON.stringify(true));

    history.push('/');
  }
  return (
    <>
      <NavBar />
      <Wrapper>
        <Form>
          <Title>Entrar</Title>

          <Input
            placeholder="Email"
          />
          <Input
            placeholder="Senha"
            type={'password'}
          />

          <ButtonSignIn
            onClick={() => handleLogin()}
          >
            Entrar
          </ButtonSignIn>
          <ButtonSignUp
            onClick={() => history.push('/signup')}
          >
            Cadastrar-se
          </ButtonSignUp>
        </Form>
      </Wrapper>
    </>
  );
};
