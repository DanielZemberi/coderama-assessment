import useAppContext from '@hookes/app/useAppContext';
import { Box, Grid, Pagination, Typography } from '@mui/material';
import React from 'react';
import { IMovieListItem } from 'src/types/movie';
import { getTotalPagesCount } from 'src/utils/getTotalPagesCount';
import MovieCard from './components/MovieCard';
import { Loader } from '@components/ui';

interface MovieListProps {
  movieList: IMovieListItem[];
  totalResults: string;
  onNextPage: (page: number) => void;
  isLoading: boolean;
}

const MovieList: React.FC<MovieListProps> = ({
  movieList,
  totalResults,
  onNextPage,
  isLoading,
}) => {
  const { lastInteractedMovie } = useAppContext();

  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        paddingBottom={5}
        textAlign="center"
      >{`Total Results: ${totalResults}`}</Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="stretch"
        sx={{ position: 'relative' }}
      >
        {movieList.map((movie) => (
          <Grid item xs={4} sm={4} md={4} key={movie.imdbID}>
            <MovieCard
              title={movie.Title}
              img={movie.Poster}
              id={movie.imdbID}
              scrollToView={lastInteractedMovie === movie.imdbID}
            />
          </Grid>
        ))}

        <Loader loading={isLoading} />
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} marginTop={5}>
        <Pagination
          count={getTotalPagesCount(totalResults)}
          onChange={(_, page) => onNextPage(page)}
        />
      </Box>
    </>
  );
};

export default MovieList;
