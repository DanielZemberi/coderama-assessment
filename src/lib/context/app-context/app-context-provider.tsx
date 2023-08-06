import React from 'react';
import AppContext from './app-context';

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [lastInteractedMovie, setLastInteractedMovie] = React.useState('');

  const handleLastInteractedMovie = React.useCallback((movieId: string) => {
    setLastInteractedMovie(movieId);
  }, []);

  const contextValues = React.useMemo(() => {
    return {
      lastInteractedMovie,
      setLastInteractedMovie: handleLastInteractedMovie,
    };
  }, [handleLastInteractedMovie, lastInteractedMovie]);

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
