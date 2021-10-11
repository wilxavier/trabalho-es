import React, { useState, useEffect } from 'react';

import { NavBar } from '../../components/NavBar';
import { Input } from '../../components/Form/Input';

import {
  Wrapper, WrapperInformation, WrapperHeading, Title, ButtonDelete,
  Information, InformationLabel, InformationLeft, InformationValue,
  WrapperButton, ButtonEdit, Button, WrapperModal, ModalFull, Form,
  TitleModal, ButtonAdd, WrapperIconDelete, IconDelete
} from './styles';

export const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const userLocal = localStorage.getItem('@user');

    if(userLocal) {
      setUser(JSON.parse(userLocal));
    }
  }, []);

  return (
    <>
      <NavBar />
      <Wrapper>
        <WrapperInformation>
          <WrapperHeading>
            <Title>Conta</Title>
            <ButtonDelete>Excluir conta</ButtonDelete>
          </WrapperHeading>

          <Information>
            <InformationLeft>
              <InformationLabel>
                MATRÍCULA:
              </InformationLabel>
              <InformationValue>
                {user.matricula}
              </InformationValue>
            </InformationLeft>
          </Information>

          <Information>
            <InformationLeft>
              <InformationLabel>
                NOME:
              </InformationLabel>
              <InformationValue>
                {user.nome}
              </InformationValue>
            </InformationLeft>
            <ButtonEdit
              onClick={() => setModalOpen(true)}
            >
              Editar dado
            </ButtonEdit>
          </Information>

          <Information>
            <InformationLeft>
              <InformationLabel>
                SOBRENOME:
              </InformationLabel>
              <InformationValue>
                {user.sobrenome}
              </InformationValue>
            </InformationLeft>
            <ButtonEdit
              onClick={() => setModalOpen(true)}
            >
              Editar dado
            </ButtonEdit>
          </Information>

          <Information>
            <InformationLeft>
              <InformationLabel>
                EMAIL:
              </InformationLabel>
              <InformationValue>
                {user.email}
              </InformationValue>
            </InformationLeft>
            <ButtonEdit
              onClick={() => setModalOpen(true)}
            >
              Editar dado
            </ButtonEdit>
          </Information>

          <Information>
            <InformationLeft>
              <InformationLabel>
                TELEFONE:
              </InformationLabel>
              <InformationValue>
                {user.telefone}
              </InformationValue>
            </InformationLeft>
            <ButtonEdit
              onClick={() => setModalOpen(true)}
            >
              Editar dado
            </ButtonEdit>
          </Information>

          <Information>
            <InformationLeft>
              <InformationLabel>
                CARGO:
              </InformationLabel>
              <InformationValue>
                {user.profissao}
              </InformationValue>
            </InformationLeft>
            <ButtonEdit
              onClick={() => setModalOpen(true)}
            >
              Editar dado
            </ButtonEdit>
          </Information>

          <Information>
            <InformationLeft>
              <InformationLabel>
                SENHA:
              </InformationLabel>
              <InformationValue>
                {user.senha}
              </InformationValue>
            </InformationLeft>
            <ButtonEdit
              onClick={() => setModalOpen(true)}
            >
              Editar dado
            </ButtonEdit>
          </Information>

          <WrapperButton>
            <Button>Salvar informações</Button>
          </WrapperButton>
        </WrapperInformation>
      </Wrapper>
      <WrapperModal
        isOpen={modalOpen}
      >
        <ModalFull>
          <Form>
            <TitleModal>Nome</TitleModal>

            <Input
              placeholder="Nome"
            />

            <ButtonAdd
              onClick={() => setModalOpen(false)}
            >
              Salvar
            </ButtonAdd>
          </Form>
          <WrapperIconDelete
            onClick={() => setModalOpen(false)}
          >
            <IconDelete />
          </WrapperIconDelete>
        </ModalFull>
      </WrapperModal>
    </>
  );
};
