import React, { useState } from 'react';

import { Input } from '../Form/Input';

import {
  Wrapper, WrapperBanner, DescriptionBanner, Title, Button,
  WrapperModal, ModalFull, Form, TitleModal, ButtonAdd,
  WrapperIconDelete, IconDelete
} from './styles';

export const Banner = ({ total }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Wrapper>
      <WrapperBanner>
          <DescriptionBanner>
            <Title>VOCÊ TEM {total} PEÇAS CADASTRADAS</Title>
            <Button
              onClick={() => setModalOpen(true)}
            >
              Cadastrar nova
            </Button>
          </DescriptionBanner>
      </WrapperBanner>
      <WrapperModal
        isOpen={modalOpen}
      >
        <ModalFull>
          <Form>
            <TitleModal>Peça</TitleModal>

            <Input
              placeholder="Nome"
            />
            <Input
              placeholder="Classificação"
            />
            <Input
              placeholder="Tipo de peça"
            />

            <ButtonAdd
              onClick={() => setModalOpen(false)}
            >
              Adicionar peça
            </ButtonAdd>
          </Form>
          <WrapperIconDelete
            onClick={() => setModalOpen(false)}
          >
            <IconDelete />
          </WrapperIconDelete>
        </ModalFull>
      </WrapperModal>
    </Wrapper>
  );
};
