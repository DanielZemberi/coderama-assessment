import { getMovieList } from 'src/services/external/movie/movie.api';
import MOVIE_NAMES from './movie.utils';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { IGetMovieListParams } from 'src/types/movie';

export const getMovieListHandler = async (params: IGetMovieListParams) => {
  const res = await getMovieList(params);
  return res.data;
};

type TQueryData = Awaited<ReturnType<typeof getMovieListHandler>>;

const useMoviesList = (
  params: IGetMovieListParams,
  options?: UseQueryOptions<TQueryData | null, unknown, TQueryData, any>,
) => {
  return useQuery([MOVIE_NAMES.list, params], () => getMovieListHandler(params), options);
};

export default useMoviesList;
