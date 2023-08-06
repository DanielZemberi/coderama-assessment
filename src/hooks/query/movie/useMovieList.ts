import { getMovieList } from 'src/services/external/movie/movie.api';
import MOVIE_NAMES from './movie.utils';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const getMovieListHandler = async (search: string) => {
  return await getMovieList(search);
};

type TQueryData = Awaited<ReturnType<typeof getMovieListHandler>>;

const useMoviesList = (
  search: string,
  options?: UseQueryOptions<TQueryData | null, unknown, TQueryData, any>,
) => {
  return useQuery([MOVIE_NAMES.list, search], () => getMovieListHandler(search), options);
};

export default useMoviesList;
