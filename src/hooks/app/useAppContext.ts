import AppContext from '@lib/context/app-context/app-context';
import React from 'react';

const useAppContext = () => {
  return React.useContext(AppContext);
};

export default useAppContext;
