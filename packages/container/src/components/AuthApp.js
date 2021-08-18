import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useSignin } from './singin-context';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  const [isSignedIn, setSignIn] = useSignin();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initalPath: history.location.pathname,
      onSignIn: () => {
        setSignIn(true);
      },
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
