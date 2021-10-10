import React from 'react';

import { playInfo } from './data';

import {
  Wrapper, WrapperLeft, WrapperImage, Image, WrapperRight, WrapperHeading,
  Title, WrapperInformation, Name, Information, InformationValue,
  WrapperPlay, PlayHeading, PlayInformation, PlayName, PlayCapacity,
  ContentPlay, WrapperSession, SessionInformation, SessionValue
} from './styles'

export const BuyTicketPage = () => {
  return (
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
            </WrapperSession>
          </ContentPlay>
        </WrapperPlay>
      </WrapperRight>
    </Wrapper>
  );
};
