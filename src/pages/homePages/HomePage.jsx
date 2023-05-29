import { useEffect, useState } from 'react';
import { fetchMovies } from 'servises/movie-service';
import MoviesList from 'components/moviesList/MoviesList';
import { Page } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Page>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </Page>
  );
};

export default HomePage;
