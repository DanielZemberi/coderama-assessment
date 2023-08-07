import { getMovieDetail } from 'src/services/external/movie/movie.api';
import MOVIE_NAMES from './movie.utils';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const getMovieDetailHandler = async (movieId: string) => {
  const res = await getMovieDetail(movieId);
  return res.data;
};

type TQueryData = Awaited<ReturnType<typeof getMovieDetailHandler>>;

const useMovieDetail = (
  movieId: string,
  options?: UseQueryOptions<TQueryData | null, unknown, TQueryData, any>,
) => {
  return useQuery([MOVIE_NAMES.list, movieId], () => getMovieDetailHandler(movieId), options);
};

export default useMovieDetail;
