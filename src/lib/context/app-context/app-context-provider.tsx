import React from 'react';
import AppContext from './app-context';

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [lastInteractedMovie, setLastInteractedMovie] = React.useState('');
  const [favoriteMovies, setFavoriteMovies] = React.useState<string[]>([]);

  const handleLastInteractedMovie = React.useCallback((movieId: string) => {
    setLastInteractedMovie(movieId);
  }, []);

  const handleSetFavoriteMovies = React.useCallback((movies: string[]) => {
    setFavoriteMovies(movies);
  }, []);

  const contextValues = React.useMemo(() => {
    return {
      lastInteractedMovie,
      setLastInteractedMovie: handleLastInteractedMovie,
      favoriteMovies,
      setFavoriteMovies: handleSetFavoriteMovies,
    };
  }, [favoriteMovies, handleLastInteractedMovie, handleSetFavoriteMovies, lastInteractedMovie]);

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
