import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, devHistory, initalPath }) => {
  const history =
    devHistory ||
    createMemoryHistory({
      initialEntries: [initalPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_marketing-feed-root');
  el && mount(el, { devHistory: createBrowserHistory() });
}

export { mount };
