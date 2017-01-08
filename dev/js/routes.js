import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import CarAddPage from './cars/components/car-add-page';
import CarsPage from './cars/components/cars-page';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './login/components/login-page';
import NewEventPage from './components/events/NewEventPage';
import DashboardPage from './dashboard/components/dashboard-page';

import LayoutContainer from './common/containers/layout/layout-container';
import MainLayout from './common/containers/layout/main-layout';
import LoginLayout from './common/containers/layout/login-layout';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={LayoutContainer}>
    <Route component={MainLayout}>
      <IndexRoute component={DashboardPage} />
      <Route path="car_add" component={CarAddPage} />
      <Route path="cars" component={CarsPage} />
      <Route path="new-event" component={requireAuth(NewEventPage)} />
    </Route>

    <Route component={LoginLayout}>
      <IndexRoute component={LoginPage} />
      <Route path='signup' component={SignupPage} />
       <Route path='login' component={LoginPage} />
    </Route>

  </Route>
)