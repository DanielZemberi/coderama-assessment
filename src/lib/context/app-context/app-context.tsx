import React from 'react';

interface IAppContext {
  lastInteractedMovie: string;
  setLastInteractedMovie: (movieId: string) => void;
  favoriteMovies: string[];
  setFavoriteMovies: (movies: string[]) => void;
}

const AppContext = React.createContext<IAppContext>({
  lastInteractedMovie: '',
  setLastInteractedMovie: () => {},
  favoriteMovies: [],
  setFavoriteMovies: () => {},
});

export default AppContext;
