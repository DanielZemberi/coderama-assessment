import React from 'react';

interface IAppContext {
  lastInteractedMovie: string;
  setLastInteractedMovie: (movieId: string) => void;
}

const AppContext = React.createContext<IAppContext>({
  lastInteractedMovie: '',
  setLastInteractedMovie: () => {},
});

export default AppContext;
