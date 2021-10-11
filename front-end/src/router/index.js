import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/Home';
import { DashboardPage } from '../pages/Dashboard';
import { SignInPage } from '../pages/SignIn';
import { SignUpPage } from '../pages/SignUp';
import { ProfilePage } from '../pages/Profile';
import { EditPlayPage } from '../pages/EditPlay';
import { BuyTicketPage } from '../pages/BuyTicket';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export const Routes = () => {
  return (
    <Router>
      <NavBar />
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
