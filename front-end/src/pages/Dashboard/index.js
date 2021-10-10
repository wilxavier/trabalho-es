import React from 'react';

import { Banner } from '../../components/BannerDashboard';
import { ListPlays } from '../../components/ListPlays';
import {
  dashboardInfo, dashboardPlayAuto, dashboardPlayComedia,
  dashboardPlayDrama, dashboardPlayFarsa, dashboardPlayMelodrama
} from './data';

export const DashboardPage = () => {
  return (
    <>
      <Banner {...dashboardInfo} />
      <ListPlays title={'Auto'} itens={dashboardPlayAuto} />
      <ListPlays title={'Comédia'} itens={dashboardPlayComedia} />
      <ListPlays title={'Drama'} itens={dashboardPlayDrama} />
      <ListPlays title={'Farsa'} itens={dashboardPlayFarsa} />
      <ListPlays title={'Melodrama'} itens={dashboardPlayMelodrama} />
    </>
  );
};
