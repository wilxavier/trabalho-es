import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/Home';
import { DashboardPage } from '../pages/Dashboard';
import { SignInPage } from '../pages/SignIn';
import { SignUpPage } from '../pages/SignUp';
import { ProfilePage } from '../pages/Profile';
import { EditPlayPage } from '../pages/EditPlay';
import { BuyTicketPage } from '../pages/BuyTicket';
import { Footer } from '../components/Footer';

import { history } from '../services';

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/dashboard'} component={DashboardPage} />
        <Route path={'/signin'} component={SignInPage} />
        <Route path={'/signup'} component={SignUpPage} />
        <Route path={'/profile'} component={ProfilePage} />
        <Route path={'/editplay'} component={EditPlayPage} />
        <Route path={'/buyticket'} component={BuyTicketPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
