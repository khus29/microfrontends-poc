import React, { createContext, useContext, useState, useMemo } from 'react';

const SigninContext = createContext();

export const useSignin = () => {
  const context = useContext(SigninContext);

  if (!context) {
    throw new Error('useSignin should be within SigninProvider');
  }
  return context;
};

export const SigninProvider = (props) => {
  console.log('props***', props);
  const [isSignedIn, setSignIn] = useState(false);
  const value = useMemo(() => [isSignedIn, setSignIn], [isSignedIn]);
  return <SigninContext.Provider value={value} {...props} />;
};
