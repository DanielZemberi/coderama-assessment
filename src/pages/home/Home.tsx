import React from 'react';
import Search from './components/Search/Search';
import MovieList from './components/MovieList';
import useMoviesList from '@hookes/query/movie/useMovieList';
import { useSearchParams } from 'react-router-dom';
import { scrollToTop } from 'src/utils/scrollToTop';
import EmptyScreen from './components/EmptyScreen';
import { ErrorMessage } from '@components/ui';

const INITIAL_PAGE = '1';

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ movie: '', page: INITIAL_PAGE });
  const search = searchParams.get('movie') ?? '';
  const page = Number(searchParams.get('page')) ?? 1;

  const { data, isFetching, isLoading, error } = useMoviesList(
    { search, page },
    {
      enabled: search !== '',
      keepPreviousData: true,
    },
  );

  const hasData = data && data.Search;

  const handleSearchedMovie = (searchedValue: string) => {
    setSearchParams({
      movie: searchedValue,
      page: INITIAL_PAGE,
    });
  };

  const handlePagechange = (page: number) => {
    setSearchParams({
      movie: searchParams.get('movie') ?? '',
      page: String(page),
    });
    scrollToTop();
  };

  return (
    <>
      <Search onSearch={handleSearchedMovie} lastSearchedMovie={search} />
      {!hasData && !isFetching ? <EmptyScreen search={search} /> : null}
      {hasData ? (
        <MovieList
          movieList={data.Search}
          totalResults={data.totalResults}
          onNextPage={handlePagechange}
          isLoading={isFetching || isLoading}
        />
      ) : null}
      {error ? <ErrorMessage error={error} /> : null}
    </>
  );
};

export default Home;
