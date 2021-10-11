import React, { useState } from 'react';

import { Input } from '../../components/Form/Input';
import { Select } from '../../components/Form/Select';
import { NavBar } from '../../components/NavBar';

import { playInfo, typeTicket } from './data';

import {
  Wrapper, WrapperLeft, WrapperImage, Image, WrapperRight, WrapperHeading,
  Title, WrapperInformation, Name, Information, InformationValue,
  WrapperPlay, PlayHeading, PlayInformation, PlayName, PlayCapacity,
  ContentPlay, WrapperSession, SessionInformation, SessionValue,
  WrapperModal, ModalFull, Form, TitleModal, ButtonAddModal, WrapperIconDeleteModal,
  IconDeleteModal
} from './styles'

export const BuyTicketPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      <Wrapper>
        <WrapperLeft>
          <WrapperImage>
            <Image src={playInfo.image} alt={''} />
          </WrapperImage>

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
          </WrapperHeading>

          <WrapperPlay>
            <PlayHeading>
              <PlayInformation>
                <PlayName>Nome: 06</PlayName>
                <PlayCapacity>Capacidade: 30 pessoas</PlayCapacity>
              </PlayInformation>
            </PlayHeading>

            <ContentPlay>
              <WrapperSession
                onClick={() => setModalOpen(true)}
              >
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
              </WrapperSession>

              <WrapperSession
                onClick={() => setModalOpen(true)}
              >
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
              </WrapperSession>

              <WrapperSession
                onClick={() => setModalOpen(true)}
              >
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
              </WrapperSession>

              <WrapperSession
                onClick={() => setModalOpen(true)}
              >
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
            <TitleModal>Ingresso</TitleModal>

            <Input
              value={'097987987'}
              placeholder="Código"
              disabled={true}
            />
            <Input
              value={'R$ 50,00'}
              placeholder="Preço"
              disabled={true}
            />
            <Select
              itens={typeTicket}
            />

            <ButtonAddModal
              onClick={() => setModalOpen(false)}
            >
                Comprar
            </ButtonAddModal>
          </Form>
          <WrapperIconDeleteModal
            onClick={() => setModalOpen(false)}
          >
            <IconDeleteModal />
          </WrapperIconDeleteModal>
        </ModalFull>
      </WrapperModal>
    </>
  );
};
