import React from 'react';

import { Input } from '../../components/Form/Input';
import { Select } from '../../components/Form/Select';
import { positionPeople } from './data';

import { Wrapper, Form, Title, ButtonSignIn, ButtonSignUp } from './styles';

export const SignUpPage = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Cadastro</Title>

        <Input placeholder="Matrícula" />
        <Input placeholder="Nome" />
        <Input placeholder="Sobrenome" />
        <Input placeholder="Email" />
        <Input placeholder="Telefone" />
        <Select itens={positionPeople} />
        <Input placeholder="Senha" />

        <ButtonSignUp to={'/signin'}>Cadastrar-se</ButtonSignUp>
        <ButtonSignIn to={'/signin'}>Entrar</ButtonSignIn>
      </Form>
    </Wrapper>
  );
};
