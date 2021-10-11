import React from 'react';

import {
  Wrapper, WrapperInformation, WrapperHeading, Title, ButtonDelete,
  Information, InformationLabel, InformationLeft, InformationValue,
  WrapperButton, ButtonEdit, Button
} from './styles';

export const ProfilePage = () => {
  return (
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
              170152294
            </InformationValue>
          </InformationLeft>
        </Information>

        <Information>
          <InformationLeft>
            <InformationLabel>
              NOME:
            </InformationLabel>
            <InformationValue>
              Maurílio
            </InformationValue>
          </InformationLeft>
          <ButtonEdit>Editar dado</ButtonEdit>
        </Information>

        <Information>
          <InformationLeft>
            <InformationLabel>
              SOBRENOME:
            </InformationLabel>
            <InformationValue>
              J Silveira
            </InformationValue>
          </InformationLeft>
          <ButtonEdit>Editar dado</ButtonEdit>
        </Information>

        <Information>
          <InformationLeft>
            <InformationLabel>
              EMAIL:
            </InformationLabel>
            <InformationValue>
              maurilio.jesus.silveira@gmail.com
            </InformationValue>
          </InformationLeft>
          <ButtonEdit>Editar dado</ButtonEdit>
        </Information>

        <Information>
          <InformationLeft>
            <InformationLabel>
              TELEFONE:
            </InformationLabel>
            <InformationValue>
              (61) 99413-0934
            </InformationValue>
          </InformationLeft>
          <ButtonEdit>Editar dado</ButtonEdit>
        </Information>

        <Information>
          <InformationLeft>
            <InformationLabel>
              CARGO:
            </InformationLabel>
            <InformationValue>
              Ator
            </InformationValue>
          </InformationLeft>
          <ButtonEdit>Editar dado</ButtonEdit>
        </Information>

        <Information>
          <InformationLeft>
            <InformationLabel>
              SENHA:
            </InformationLabel>
            <InformationValue>
              ************
            </InformationValue>
          </InformationLeft>
          <ButtonEdit>Editar dado</ButtonEdit>
        </Information>

        <WrapperButton>
          <Button>Salvar informações</Button>
        </WrapperButton>
      </WrapperInformation>
    </Wrapper>
  );
};
