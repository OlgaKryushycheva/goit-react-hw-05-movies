import MoviesList from 'components/moviesList/MoviesList';

const HomePage = () => {
  return (
    <div>
      <h1>Trending movies</h1>
      <ul>
        <MoviesList />
      </ul>
    </div>
  );
};

export default HomePage;
