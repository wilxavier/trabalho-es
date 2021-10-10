import React from 'react';

import { playInfo } from './data';

import {
  Wrapper, WrapperLeft, WrapperImage, Image, WrapperButtons,
  ButtonEdit, ButtonDelete, WrapperRight, WrapperHeading,
  Title, WrapperInformation, Name, Information, InformationValue,
  ButtonAdd, WrapperPlay, PlayHeading, PlayInformation, PlayName,
  PlayCapacity, PlayAction, ButtonEditSmalll, ButtonDeleteSmalll,
  ContentPlay, AddNewPlay, IconPlus, AddLabel, WrapperSession,
  SessionInformation, SessionValue, IconDelete, IconEdit,
  WrapperIconDelete, WrapperIconEdit
} from './styles'

export const EditPlayPage = () => {
  return (
    <Wrapper>
      <WrapperLeft>
        <WrapperImage>
          <Image src={playInfo.image} alt={''} />
        </WrapperImage>

        <WrapperButtons>
          <ButtonEdit>Editar peça</ButtonEdit>
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
          <ButtonAdd>Adicionar sala</ButtonAdd>
        </WrapperHeading>

        <WrapperPlay>
          <PlayHeading>
            <PlayInformation>
              <PlayName>Nome: 06</PlayName>
              <PlayCapacity>Capacidade: 30 pessoas</PlayCapacity>
            </PlayInformation>
            <PlayAction>
              <ButtonEditSmalll>Editar sala</ButtonEditSmalll>
              <ButtonDeleteSmalll>Excluir sala</ButtonDeleteSmalll>
            </PlayAction>
          </PlayHeading>

          <ContentPlay>
            <AddNewPlay>
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
              <WrapperIconEdit>
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
              <WrapperIconEdit>
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
              <WrapperIconEdit>
                <IconEdit />
              </WrapperIconEdit>
            </WrapperSession>
          </ContentPlay>
        </WrapperPlay>
      </WrapperRight>
    </Wrapper>
  );
};
