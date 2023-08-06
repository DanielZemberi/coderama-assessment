import React from 'react';
import Search from './components/Search/Search';
import MovieList from './components/MovieList';
import useMoviesList from '@hookes/query/movie/useMovieList';
import { useSearchParams } from 'react-router-dom';
import { scrollToTop } from 'src/utils/scrollToTop';
import EmptyScreen from './components/EmptyScreen';

const INITIAL_PAGE = '1';

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ movie: '', page: INITIAL_PAGE });
  const search = searchParams.get('movie') ?? '';
  const page = Number(searchParams.get('page')) ?? 1;

  const { data, isFetching } = useMoviesList(
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

  const handlePagechange = () => {
    setSearchParams({
      movie: searchParams.get('movie') ?? '',
      page: String(Number(page) + 1),
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
          isLoading={isFetching}
        />
      ) : null}
    </>
  );
};

export default Home;
