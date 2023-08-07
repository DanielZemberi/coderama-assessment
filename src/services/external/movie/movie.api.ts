import movieApi from '@lib/api/movie-api';
import {
  IGetMovieListParams,
  IMovieDetail,
  IMovieListItem,
  IResponseWrapper,
} from 'src/types/movie';

export const getMovieList = async (
  params: IGetMovieListParams,
): Promise<{ data: IResponseWrapper<IMovieListItem[]> }> => {
  return movieApi('/', { params: { s: params.search, page: params.page } });
};

export const getMovieDetail = async (movieId: string): Promise<{ data: IMovieDetail }> => {
  return movieApi({ params: { i: movieId } });
};
