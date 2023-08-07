import React from 'react';
import useAppContext from './useAppContext';

const FAVORITE_MOVIES_KEY = 'favoriteMovies';

const useMovieFavorite = (movieId?: string) => {
  const { setFavoriteMovies, favoriteMovies } = useAppContext();

  const isFavorite = React.useMemo(() => {
    if (!movieId || !favoriteMovies) {
      return false;
    }
    return favoriteMovies.includes(movieId);
  }, [favoriteMovies, movieId]);

  React.useEffect(() => {
    const items = localStorage.getItem(FAVORITE_MOVIES_KEY);
    const parsedItems = items ? JSON.parse(items) : [];

    if (parsedItems) {
      setFavoriteMovies(parsedItems);
    }
  }, [setFavoriteMovies]);

  const toggleLike = React.useCallback(() => {
    const items = localStorage.getItem(FAVORITE_MOVIES_KEY);
    const parsedItems = items ? JSON.parse(items) : [];

    const newItems = parsedItems.includes(movieId)
      ? parsedItems.filter((item: string) => item !== movieId)
      : [...parsedItems, movieId];

    localStorage.setItem(FAVORITE_MOVIES_KEY, JSON.stringify(newItems));
    setFavoriteMovies(newItems);
  }, [movieId, setFavoriteMovies]);

  return { favoriteMovies, toggleLike, isFavorite };
};

export default useMovieFavorite;
