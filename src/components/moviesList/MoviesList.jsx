import { Link, useLocation } from 'react-router-dom/dist';
import { List } from './MovieListGeneral.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title ?? movie.name}
          </Link>
        </li>
      ))}
    </List>
  );
};

export default MoviesList;
