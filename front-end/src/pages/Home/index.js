import React from 'react';

import { Banner } from '../../components/Banner';
import { ListPlays } from '../../components/ListPlays';
import {
  homeBanner, homePlayAuto, homePlayComedia, homePlayDrama,
  homePlayFarsa, homePlayMelodrama, homePlayMonologo, homePlayMusical,
  homePlayOpera, homePlayRevista
} from './data';

export const HomePage = () => {
  return (
    <>
      <Banner {...homeBanner} />
      <ListPlays title={'Auto'} itens={homePlayAuto} />
      <ListPlays title={'Comédia'} itens={homePlayComedia} />
      <ListPlays title={'Drama'} itens={homePlayDrama} />
      <ListPlays title={'Farsa'} itens={homePlayFarsa} />
      <ListPlays title={'Melodrama'} itens={homePlayMelodrama} />
      <ListPlays title={'Monólogo'} itens={homePlayMonologo} />
      <ListPlays title={'Musical'} itens={homePlayMusical} />
      <ListPlays title={'Ópera'} itens={homePlayOpera} />
      <ListPlays title={'Revista'} itens={homePlayRevista} />
    </>
  );
};
