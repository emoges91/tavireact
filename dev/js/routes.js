import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import CarAddPage from './cars/components/car-add-page';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';
import DashboardPage from './dashboard/components/dashboard-page';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage} />
    <Route path="car_add" component={CarAddPage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="new-event" component={requireAuth(NewEventPage)} />
  </Route>
)