import { getMovieDetail } from 'src/services/external/movie/movie.api';
import MOVIE_NAMES from './movie.utils';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const getMovieDetailHandler = async (movieId: string) => {
  return await getMovieDetail(movieId);
};

type TQueryData = Awaited<ReturnType<typeof getMovieDetailHandler>>;

const useMovieDetail = (
  movieId: string,
  options?: UseQueryOptions<TQueryData | null, unknown, TQueryData, any>,
) => {
  return useQuery([MOVIE_NAMES.list, movieId], () => getMovieDetailHandler(movieId), options);
};

export default useMovieDetail;
