import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/Home';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route patg='/' exact component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
};
