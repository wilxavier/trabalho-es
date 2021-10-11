import React from 'react';

import { NavBar } from '../../components/NavBar';
import { Input } from '../../components/Form/Input';
import { Select } from '../../components/Form/Select';
import { positionPeople } from './data';

import { Wrapper, Form, Title, ButtonSignIn, ButtonSignUp } from './styles';

export const SignUpPage = ({ history }) => {
  const handleRegister = () => {
    history.push('/signin');
  }

  return (
    <>
      <NavBar />
      <Wrapper>
        <Form>
          <Title>Cadastro</Title>

          <Input
            placeholder='Matrícula'
          />
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='Sobrenome'
          />
          <Input
            placeholder='Email'
          />
          <Input
            placeholder='Telefone'
          />
          <Select
            itens={positionPeople}
          />
          <Input
            placeholder='Senha'
            type={'password'}
          />

          <ButtonSignUp
            onClick={() => handleRegister()}
          >
            Cadastrar-se
          </ButtonSignUp>
          <ButtonSignIn
            onClick={() => history.push('/signin')}
          >
            Entrar
          </ButtonSignIn>
        </Form>
      </Wrapper>
    </>
  );
};
