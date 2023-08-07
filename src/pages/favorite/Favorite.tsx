import useAppContext from '@hookes/app/useAppContext';
import { Box, Grid, Typography } from '@mui/material';
import MovieCard from '@pages/home/components/MovieList/components/MovieCard';
import React from 'react';
import { getMovieDetail } from 'src/services/external/movie/movie.api';
import { IMovieDetail } from 'src/types/movie';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Favorite: React.FC = () => {
  const { favoriteMovies } = useAppContext();
  const [favItems, setFavItems] = React.useState<IMovieDetail[]>([]);
  const [parent] = useAutoAnimate();

  const getFavMovieList = React.useCallback(async () => {
    const res = await Promise.allSettled(favoriteMovies.map(getMovieDetail));
    setFavItems([]);

    res.map((result) => {
      if (result.status === 'fulfilled') {
        setFavItems((prev) => [...prev, result.value.data]);
      }
    });
  }, [favoriteMovies]);

  React.useEffect(() => {
    getFavMovieList();
  }, [getFavMovieList, favoriteMovies]);

  return (
    <>
      <Typography variant="h3" textAlign="center" paddingBottom={4}>
        Favorite movies
      </Typography>
      {favItems.length ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignItems="stretch"
          sx={{ position: 'relative' }}
          ref={parent}
        >
          {favItems.map((movie) => (
            <Grid item xs={4} sm={4} md={4} key={movie.imdbID}>
              <MovieCard title={movie.Title} img={movie.Poster} id={movie.imdbID} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ background: 'white' }} padding={5}>
          <Typography variant="h5" textAlign="center" paddingBottom={4}>
            Your list is empty
          </Typography>
          <Typography variant="body1" textAlign="center" paddingBottom={4}>
            Click the star icon to add to your favorite list
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Favorite;
