import { Link, useLocation } from 'react-router-dom';
import { List } from './MovieListGeneral.styled';

const SearchedMovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </List>
  );
};

export default SearchedMovieList;
