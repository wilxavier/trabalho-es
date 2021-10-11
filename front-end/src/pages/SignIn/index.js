import React from 'react';

import { Input } from '../../components/Form/Input';

import { Wrapper, Form, Title, ButtonSignIn, ButtonSignUp } from './styles';

export const SignInPage = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Entrar</Title>

        <Input placeholder="Email" />
        <Input placeholder="Senha" />

        <ButtonSignIn to={'/dashboard'}>Entrar</ButtonSignIn>
        <ButtonSignUp to={'/signup'}>Cadastrar-se</ButtonSignUp>
      </Form>
    </Wrapper>
  );
};
