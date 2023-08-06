import React from 'react';

const FAVORITE_MOVIES_KEY = 'favoriteMovies';

const useMovieFavorite = (movieId: string) => {
  const [items, setItems] = React.useState<string[]>([]);
  const isFavorite = React.useMemo(() => items && items.includes(movieId), [items, movieId]);

  React.useEffect(() => {
    const items = localStorage.getItem(FAVORITE_MOVIES_KEY);
    const parsedItems = items ? JSON.parse(items) : [];

    if (parsedItems) {
      setItems(parsedItems);
    }
  }, []);

  const toggleLike = React.useCallback(() => {
    const items = localStorage.getItem(FAVORITE_MOVIES_KEY);
    const parsedItems = items ? JSON.parse(items) : [];

    if (parsedItems) {
      const newItems = parsedItems.includes(movieId)
        ? parsedItems.filter((item: string) => item !== movieId)
        : [...parsedItems, movieId];

      localStorage.setItem(FAVORITE_MOVIES_KEY, JSON.stringify(newItems));
      setItems(newItems);
    }
  }, [movieId]);

  return { items, toggleLike, isFavorite };
};

export default useMovieFavorite;
