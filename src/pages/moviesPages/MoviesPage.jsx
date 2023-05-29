import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/searchForm/SearchForm';
import SearchedMovieList from 'components/moviesList/SearchedMovielist';
import { fatchMovieByQuery } from 'servises/movie-service';
import { Page } from './MoviePages.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    fatchMovieByQuery(query)
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  return (
    <Page>
      <SearchForm />
      {query && <SearchedMovieList movies={movies} />}
    </Page>
  );
};

export default MoviesPage;
