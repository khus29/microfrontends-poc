import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import { createBrowserHistory } from 'history';
import { SigninProvider } from './components/singin-context';
import Header from './components/Header';
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <SigninProvider>
          <div>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/auth' component={AuthAppLazy} />
                <Route path='/dashboard' component={DashboardApp} />
                <Route path='/' component={MarketingAppLazy} />
              </Switch>
            </Suspense>
          </div>
        </SigninProvider>
      </Router>
    </StylesProvider>
  );
};
