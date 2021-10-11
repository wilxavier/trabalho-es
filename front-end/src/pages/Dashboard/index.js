import React from 'react';

import { NavBar } from '../../components/NavBar';
import { Banner } from '../../components/BannerDashboard';
import { ListPlays } from '../../components/ListPlays';
import {
  dashboardInfo, dashboardPlayAuto, dashboardPlayComedia,
  dashboardPlayDrama, dashboardPlayFarsa, dashboardPlayMelodrama
} from './data';

import { Wrapper } from './styles';

export const DashboardPage = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Banner {...dashboardInfo} />
        <ListPlays title={'Auto'} itens={dashboardPlayAuto} edit={true} />
        <ListPlays title={'Comédia'} itens={dashboardPlayComedia} edit={true} />
        <ListPlays title={'Drama'} itens={dashboardPlayDrama} edit={true} />
        <ListPlays title={'Farsa'} itens={dashboardPlayFarsa} edit={true} />
        <ListPlays title={'Melodrama'} itens={dashboardPlayMelodrama} edit={true} />
      </Wrapper>
    </>
  );
};
