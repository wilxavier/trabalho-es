import React, { useState } from 'react';

import { Input } from '../../components/Form/Input';
import { NavBar } from '../../components/NavBar';

import { playInfo } from './data';

import {
  Wrapper, WrapperLeft, WrapperImage, Image, WrapperButtons,
  ButtonEdit, ButtonDelete, WrapperRight, WrapperHeading,
  Title, WrapperInformation, Name, Information, InformationValue,
  ButtonAdd, WrapperPlay, PlayHeading, PlayInformation, PlayName,
  PlayCapacity, PlayAction, ButtonEditSmalll, ButtonDeleteSmalll,
  ContentPlay, AddNewPlay, IconPlus, AddLabel, WrapperSession,
  SessionInformation, SessionValue, IconDelete, IconEdit,
  WrapperIconDelete, WrapperIconEdit, WrapperModal, ModalFull, Form,
  TitleModal, ButtonAddModal, WrapperIconDeleteModal, IconDeleteModal
} from './styles'

export const EditPlayPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenSala, setModalOpenSala] = useState(false);
  const [modalOpenPeca, setModalOpenPeca] = useState(false);

  return (
    <>
      <NavBar />
      <Wrapper>
        <WrapperLeft>
          <WrapperImage>
            <Image src={playInfo.image} alt={''} />
          </WrapperImage>

          <WrapperButtons>
            <ButtonEdit
              onClick={() => setModalOpenPeca(true)}
            >
              Editar peça
            </ButtonEdit>
            <ButtonDelete>Excluir peça</ButtonDelete>
          </WrapperButtons>

          <WrapperInformation>
            <Name>PEÇA TEATRAL TEMPO DE CARNIFICINA</Name>

            <Information>
              CLASSIFICAÇÃO:
              <InformationValue>14 ANOS</InformationValue>
            </Information>
            <Information>
              TIPO DE PEÇA:
              <InformationValue>DRAMA</InformationValue>
            </Information>
          </WrapperInformation>
        </WrapperLeft>
        <WrapperRight>
          <WrapperHeading>
            <Title>Salas</Title>
            <ButtonAdd
              onClick={() => setModalOpenSala(true)}
            >
              Adicionar sala
            </ButtonAdd>
          </WrapperHeading>

          <WrapperPlay>
            <PlayHeading>
              <PlayInformation>
                <PlayName>Nome: 06</PlayName>
                <PlayCapacity>Capacidade: 30 pessoas</PlayCapacity>
              </PlayInformation>
              <PlayAction>
                <ButtonEditSmalll
                  onClick={() => setModalOpenSala(true)}
                >
                  Editar sala
                </ButtonEditSmalll>
                <ButtonDeleteSmalll>Excluir sala</ButtonDeleteSmalll>
              </PlayAction>
            </PlayHeading>

            <ContentPlay>
              <AddNewPlay
                onClick={() => setModalOpen(true)}
              >
                <IconPlus />
                <AddLabel>Adicionar sessão</AddLabel>
              </AddNewPlay>

              <WrapperSession>
                <SessionInformation>
                  DATA:
                  <SessionValue>10/12/2021</SessionValue>
                </SessionInformation>
                <SessionInformation>
                  HORA:
                  <SessionValue>20:00</SessionValue>
                </SessionInformation>
                <SessionInformation>
                  ASSENTOS:
                  <SessionValue>30</SessionValue>
                </SessionInformation>

                <WrapperIconDelete>
                  <IconDelete />
                </WrapperIconDelete>
                <WrapperIconEdit
                  onClick={() => setModalOpen(true)}
                >
                  <IconEdit />
                </WrapperIconEdit>
              </WrapperSession>

              <WrapperSession>
                <SessionInformation>
                  DATA:
                  <SessionValue>10/12/2021</SessionValue>
                </SessionInformation>
                <SessionInformation>
                  HORA:
                  <SessionValue>20:00</SessionValue>
                </SessionInformation>
                <SessionInformation>
                  ASSENTOS:
                  <SessionValue>30</SessionValue>
                </SessionInformation>

                <WrapperIconDelete>
                  <IconDelete />
                </WrapperIconDelete>
                <WrapperIconEdit
                  onClick={() => setModalOpen(true)}
                >
                  <IconEdit />
                </WrapperIconEdit>
              </WrapperSession>

              <WrapperSession>
                <SessionInformation>
                  DATA:
                  <SessionValue>10/12/2021</SessionValue>
                </SessionInformation>
                <SessionInformation>
                  HORA:
                  <SessionValue>20:00</SessionValue>
                </SessionInformation>
                <SessionInformation>
                  ASSENTOS:
                  <SessionValue>30</SessionValue>
                </SessionInformation>

                <WrapperIconDelete>
                  <IconDelete />
                </WrapperIconDelete>
                <WrapperIconEdit
                  onClick={() => setModalOpen(true)}
                >
                  <IconEdit />
                </WrapperIconEdit>
              </WrapperSession>
            </ContentPlay>
          </WrapperPlay>
        </WrapperRight>
      </Wrapper>
      <WrapperModal
        isOpen={modalOpen}
      >
        <ModalFull>
          <Form>
            <TitleModal>Sessões</TitleModal>

            <Input
              placeholder="Data"
            />
            <Input
              placeholder="Hora"
            />
            <Input
              placeholder="Assentos"
            />

            <ButtonAddModal
              onClick={() => setModalOpen(false)}
            >
              Salvar
            </ButtonAddModal>
          </Form>
          <WrapperIconDeleteModal
            onClick={() => setModalOpen(false)}
          >
            <IconDeleteModal />
          </WrapperIconDeleteModal>
        </ModalFull>
      </WrapperModal>
      <WrapperModal
        isOpen={modalOpenSala}
      >
        <ModalFull>
          <Form>
            <TitleModal>Sala</TitleModal>

            <Input
              placeholder="Nome"
            />
            <Input
              placeholder="Capacidade"
            />

            <ButtonAddModal
              onClick={() => setModalOpenSala(false)}
            >
              Salvar
            </ButtonAddModal>
          </Form>
          <WrapperIconDeleteModal
            onClick={() => setModalOpenSala(false)}
          >
            <IconDeleteModal />
          </WrapperIconDeleteModal>
        </ModalFull>
      </WrapperModal>
      <WrapperModal
        isOpen={modalOpenPeca}
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

            <ButtonAddModal
              onClick={() => setModalOpenPeca(false)}
            >
              Salvar
            </ButtonAddModal>
          </Form>
          <WrapperIconDeleteModal
            onClick={() => setModalOpenPeca(false)}
          >
            <IconDeleteModal />
          </WrapperIconDeleteModal>
        </ModalFull>
      </WrapperModal>
    </>
  );
};
