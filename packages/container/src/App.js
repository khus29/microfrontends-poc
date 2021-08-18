import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import { SigninProvider } from './components/singin-context';
import Header from './components/Header';
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <SigninProvider>
          <div>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/auth' component={AuthAppLazy} />
                <Route path='/' component={MarketingAppLazy} />
              </Switch>
            </Suspense>
          </div>
        </SigninProvider>
      </BrowserRouter>
    </StylesProvider>
  );
};
