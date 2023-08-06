import movieApi from '@lib/api/movie-api';
import { IMovieDetail, IMovieListItem, IResponseWrapper } from 'src/types/movie';

export const getMovieList = async (search: string): Promise<IResponseWrapper<IMovieListItem[]>> => {
  return movieApi({ params: { s: search } });
};

export const getMovieDetail = async (movieId: string): Promise<IMovieDetail> => {
  return movieApi({ params: { i: movieId } });
};
