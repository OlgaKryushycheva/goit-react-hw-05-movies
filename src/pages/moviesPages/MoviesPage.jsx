import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/searchForm/SearchForm';
import { fatchMovieByQuery } from 'servises/movie-service';
import { Page } from './MoviesPage.styled';
import MoviesList from 'components/moviesList/MoviesList';

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
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Page>
  );
};

export default MoviesPage;
