import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import CarAddPage from './cars/components/car-add-page';
import CarsPage from './cars/components/cars-page';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './login/components/login-page';
import LogoffPage from './login/components/logoff-page';
import NewEventPage from './components/events/NewEventPage';
import DashboardPage from './dashboard/components/dashboard-page';

import LayoutContainer from './common/containers/layout/layout-container';
import MainLayout from './common/containers/layout/main-layout';
import LoginLayout from './common/containers/layout/login-layout';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/viajerito/web/" component={LayoutContainer}>
    <Route component={MainLayout}>
      <IndexRoute component={requireAuth(DashboardPage)} />
      <Route path="car_add" component={requireAuth(CarAddPage)} />
      <Route path="cars" component={requireAuth(CarsPage)} />
      <Route path="new-event" component={requireAuth(NewEventPage)} />
    </Route>

    <Route component={LoginLayout}>
      <IndexRoute component={LoginPage} />
      <Route path='signup' component={SignupPage} />
      <Route path='login' component={LoginPage} />
      <Route path='logoff' component={LogoffPage} />
    </Route>
  </Route>
)